<template>
  <div class="container">
    <header>
      <div>抢镜小助手({{ platformName }})</div>
      <div class="statement">特此声明：本产品仅为辅助工具，仅供学习使用，禁止用于商业用途!</div>
    </header>
    <el-card>
      <el-row>
        <el-col :span="11">
          <span>选择时间段：</span>
          <el-date-picker
            v-model="timeRange"
            class="el-date-picker"
            value-format="YYYY-MM-DD"
            type="daterange"
            range-separator="～"
            start-placeholder="开始时间"
            end-placeholder="截止时间"
          />
        </el-col>
        <el-col :span="10">
          <el-checkbox-group v-model="typeCheckList">
            <el-checkbox label="社招" />
            <el-checkbox label="校招" />
          </el-checkbox-group>
        </el-col>
      </el-row>
    </el-card>
    <section>
      <div class="resume-count">共计 {{ resumeCount }} 条简历</div>
    </section>
    <section>
      <el-table
        ref="multipleTableRef"
        v-loading="loading"
        class="table"
        :data="tableData"
        stripe
        border
        height="350"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="item of COLLECT_RESUME_COLUMN"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" :width="'100px'" class="operate" align="center">
          <template v-slot="scope">
            <el-button type="text" size="small" @click="handlerSingleImport(scope.row)">一键入库</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <footer>
      <el-button type="primary" @click="handlerback">
        <el-icon><Back /></el-icon>
        返回上级
      </el-button> 
      <el-button type="primary" @click="handlerSetting"> 
        <el-icon><Platform /></el-icon>
        窗口模式
      </el-button>
      <el-button type="primary" @click="handlerCleart"> 
        <el-icon><DeleteFilled /></el-icon>
        一键清空 
      </el-button>
      <el-button type="primary" @click="handlerRefresh"> 
        <el-icon><Refresh /></el-icon>
        一键刷新
      </el-button>
      <el-button type="primary" @click="handlerCollect"> 
        <el-icon><List /></el-icon>
        一镜统收
      </el-button>
      <el-button type="primary" :disabled="multipleSelection.length === 0" @click="handlerImport"> 
        <el-icon><Promotion /></el-icon>
        一镜到底
        <span v-if="multipleSelection.length > 0">({{ multipleSelection.length }})</span>
      </el-button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref, computed } from 'vue';
import { COLLECT_RESUME_COLUMN, PLATFORM_MAP } from './contants';
import { useRouter, useRoute } from "vue-router";
import dayjs from 'dayjs';
import { ElNotification, ElTable } from 'element-plus'
import { postResumeList } from '@/axios/apis';
import { IResume } from '@/axios/apis/types';
import { ElMessage } from 'element-plus'
import { getLocalstory, clearLocalstory, setBadgeText, saveLocalStory } from '@/utils'

const router = useRouter();
const route = useRoute();
const channel = ref<string>('');
const timeRange = ref<Date[] | any>([]);
const loading = ref<Boolean>(false);
const typeCheckList = ref<string[]>(['社招']);
const tableData: Ref<any[]> = ref([]);
const resumeList: Ref<IResume[]> = ref([]);
const multipleSelection = ref<any[]>([]);
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const platformName = ref("");

onMounted(async () => {
  const dayAfter = dayjs().add(1, 'day').format('YYYY-MM-DD');
  const dayBefore = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
  timeRange.value = [dayBefore, dayAfter];

  const resumes = await getLocalstory('resumes') as IResume[];
  resumeList.value = resumes || [];
  tableData.value = resumeList.value.map((el: IResume) =>({
    subject: el.subject,
    ...el.form.basic,
    title: el.subject,
    ...el.form.forwards[0]
  }))

  const platform = route.query.platfrom ? String(route.query.platfrom) : '';
  switch(platform){
    case 'guopin': 
      channel.value = 'GUOPIN';
      break;
    case '24365':
      channel.value = 'C_24365';
      break;
  }

  const platName = await getLocalstory('platName') as string;
  platformName.value = PLATFORM_MAP[platName];
})

const resumeCount = computed(() => tableData.value.length)

// 一键刷新
const handlerRefresh = async () => {
  loading.value = true;
  const resumes = await getLocalstory('resumes') as IResume[];
  resumeList.value = resumes || [];
  tableData.value = resumeList.value.map((el: IResume) =>({
    subject: el.subject,
    ...el.form.basic,
    ...el.form.forwards[0]
  }))
  loading.value = false;
  ElMessage({
    message: '刷新成功～',
    type: 'success',
  })
}

// 窗口模式
const handlerSetting = async () => {
  let url = chrome.runtime.getURL("popup.html");
  let tab = await chrome.windows.create({ 
    url: url,
    width: 768,
    height: 685
  });
}

// 全选
const handleSelectionChange = (val: IResume[]) => {
  multipleSelection.value = val;
}

// 一键入库（单个）
const handlerSingleImport = async (row: any) => {
  try {
    const data = resumeList.value.find(el => row.subject === el.subject) || null;
    const { success } = await postResumeList({
      channel: "GUOPIN",
      items: [data!]
    });
    if(success){
      ElMessage({
        message: '入库成功～',
        type: 'success',
      })
    }
    loading.value = false;
  } catch (error) {
    console.error('🙅 一键入库:', error)
  }
}

// 一键统收
const handlerCollect = () => {
  const platform = route.query.platfrom ? String(route.query.platfrom) : '';
  if(timeRange.value.length < 2){
    ElNotification({
      title: '提示',
      message: '请选择完整时间段！',
      type: 'warning',
    })
    return;
  }

  switch(platform){
    case 'guopin': 
      channel.value = 'GUOPIN';
      guopinCollect();
      break;
    case '24365':
    channel.value = 'C_24365';
      newCareerCollect();
      break;
  }
}

 // 国聘统收
const guopinCollect = () => {
  // 判断是否有选项
  if(typeCheckList.value.length === 0){
    ElNotification({
      title: '提示',
      message: '请勾选招聘类型！',
      type: 'warning',
    })
    return;
  }

  // 清理上一段收集的简历
  clearLocalstory('resumes');
  chrome.runtime.sendMessage({
    channel: 'CLEAR_RESUME_LIST'
  })

  if(typeCheckList.value.includes('社招')){
    const url = `https://www.iguopin.com/index.php?m=Home&c=Company&a=jobs_apply&is_reply=0&company_name=&company_uid=&dept_id=&department_id=&jobs_id=&audit=&nature=&is_confirm=&sex=&age=&political=&education_cn=&experience=&householdaddress_cn=&householdaddress=&address_cn=&address=&current_district_cn=&current_district=&apply_addtime=${ timeRange.value[0] }+%2C+${ timeRange.value[1] }&fullname=&speciality=&telephone=&school=&personal_look=&source=&edu1_level=&edu2_level=&major_category_cn=&major_category=&birthdate=&detail=&resume_tag=-1`;
    window.open(url);
  }
  if(typeCheckList.value.includes('校招')){
    const url = `https://campus.iguopin.com/index.php?m=&c=company&a=jobs_apply&is_reply=0&state=-1&open=1&datestart=${ timeRange.value[0] }%2017:00:00&dateend=${ timeRange.value[1] }%2017:00:00&edustart=&edueend=&birthdate=,`;
    window.open(url);
  }
}

// 24365 统收
const newCareerCollect = () => {
  // 清理上一段收集的简历
  clearLocalstory('resumes');
  chrome.runtime.sendMessage({
    channel: 'CLEAR_RESUME_LIST'
  })

  saveLocalStory('timeRange', timeRange.value)
  // 感兴趣
  window.open('https://job.ncss.cn/corp/candidate.html?checkOut');
}

// 一键清理
const handlerCleart = () => {
  clearLocalstory('resumes');
  tableData.value = []
  setBadgeText()
  ElMessage({
    message: '清理成功～',
    type: 'success',
  })
}

// 一键入库
const handlerImport = async () => {
  loading.value = true;
  try {
    const ids = multipleSelection.value.map(el=>el.subject);
    const data = resumeList.value.filter(el => ids.includes(el.subject));
    const { success } = await postResumeList({
      channel: channel.value,
      items: data
    });
    if(success){
      ElMessage({
        message: '入库成功～',
        type: 'success',
      })
      multipleTableRef.value!.clearSelection();
    }
    loading.value = false;
  } catch (error) {
    console.error('🙅 一键入库:', error)
  }
}

// 返回
const handlerback = () => {
  router.replace('/home');
}
</script>

<style lang="less" scoped>
  .container {
    width: 737px;
    padding: 0 15px 15px;
    background: url('@/assets/images/background.png') no-repeat;
    opacity: 0.9;
    header {
      position: relative;
      display: flex;
      justify-content: center;
      font-size: 22px;
      font-weight: 500;
      padding: 15px 0;
      color: #fff;
      .statement {
        font-size: 12px;
        position: absolute;
        bottom: 0;
        left: 23%;
        color: #fff;
      }
    }
    .resume-count{
      display: flex;
      justify-content: flex-end;
      text-align: end;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
      margin-top: 6px;
    }
    .el-card{
      border-radius: 8px;
      .el-col{
        display: flex;
        align-items: center;
        margin-right: 15px;
        span {
          width: 160px;
          font-size: 14px;
        }
        .el-date-picker{
          width: 500px;
        }
      }
    }
    .el-table{
      margin-top: 5px;
      border-radius: 8px;
    }
    footer{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      .el-icon{
        margin-right: 5px;
        font-size: 16px;
      }
    }
  }
</style>