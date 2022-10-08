<template>
  <div class="contianer">
    <header>
      <div>抢镜小助手({{platformName}})</div>
       <div class="statement">免责声明：本产品仅为辅助工具，仅供学习使用，禁止用于商业用途!</div>
      <div class="full-screen" @click="handlerFullScreen">
        <img :src="fullScreen" alt="fullScreen">
      </div>
    </header>
    <el-card>
      <el-row>
        <el-col :span="8">
          <span style="width: 100px">招聘状态：</span>
          <el-select v-model="query.status" placeholder="请选择招聘状态">
            <el-option
              v-for="item in recruitmentStatusOptions"
              :key="item.value + 'company'"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <span class="filter-text">职位：</span>
          <el-input
            class="input-item"
            placeholder="请输入职位"
            v-model="query.job"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="7">
          <span class="filter-text">编码：</span>
          <el-input
            class="input-item"
            placeholder="请输入职位编码"
            v-model="query.code"
            clearable
          ></el-input>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="8">
          <span style="width: 100px">招聘性质：</span>
          <el-select
            v-model="query.recruitmentType"
            class="interview-room-status"
            placeholder="请输入招聘性质"
          >
            <el-option
              v-for="item in recruitmentTypeOptions"
              :key="item.value + 'status'"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <span class="filter-text">公司：</span>
          <el-select
            v-model="query.company"
            multiple
            filterable
            collapse-tags
            placeholder="请选择公司"
          >
            <el-option
              v-for="item in companyOptions"
              :key="item.value + 'company'"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-card>
    <section>
      <el-table
        v-loading="loading"
        :data="tableData"
        stripe
        border
        height="332"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-for="item of JOB_COLUMNS"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" :width="'100px'" class="operate" align="center">
          <template v-slot="scope">
            <el-button type="text" size="small" @click="handlerSinglePublishJob(scope.row)">一键发布</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </section>
    <footer>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next, total"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :page-size="pageSize"
      />
      <div>
        <el-button class="publish-btn" type="primary" @click="handlerSelectPlatform"> 选择平台 </el-button>
        <el-button class="publish-btn" type="primary" @click="oneClickCollection"> 一镜到底 </el-button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, reactive, Ref, ref, watch, computed } from 'vue';
import { getJobs, getCompanyList } from '@/axios/apis/index';
import { 
  JOB_COLUMNS, 
  GUOPIN_SCHOOL_RECRUITMENT, 
  GUOPIN_SOCIAL_RECRUITMENT,
  JIUYEWANG_URL,
  PLATFORM_MAP,
  NUIKE_URL,
SHIXISENG_PRACTICE_URL,
SHIXISENG_SCHOOL_URL
} from './contants';
import { IList } from '@/axios/apis/types';
import { getLocalstory } from '@/utils/index';
import fullScreen from '@/assets/images/full-screen.png';

interface IOptions {
  label: string;
  value: number | string;
}
interface IQuery {
  company: string;
  job: string;
  code: string;
  status: string;
  opened: string;
  recruitmentType: string;
}

const router = useRouter();
const route = useRoute();
const loading = ref<Boolean>(false);
const tableData: Ref<IList[]> = ref([]);
const totalCount: Ref<number> = ref(0);
const pageNo: Ref<number> = ref(1);
const pageSize: Ref<number> = ref(50);
const companyOptions: Ref<IOptions[]> = ref([]);
const recruitmentTypeOptions: Ref<IOptions[]> = ref([
  {
    label: '全部',
    value: '',
  },
  {
    label: '社招',
    value: 'SOCIAL',
  },
  {
    label: '校招',
    value: 'ON_CAMPUS',
  },
  {
    label: '实习',
    value: 'PRACTICE',
  },
]);
const recruitmentStatusOptions: Ref<IOptions[]> = ref([
  {
    label: '全部',
    value: '',
  },
  {
    label: '招聘中',
    value: 'PUBLISHED',
  },
  {
    label: '已关闭',
    value: 'CLOSED',
  },
]);
const query = reactive<IQuery>({
  company: '',
  job: '',
  code: '',
  status: '',
  opened: '',
  recruitmentType: '',
});
const multipleSelection = ref<IList[]>([]);
const singlePublishJob = ref<Function>(()=>{});
const multiplePublishJob = ref<Function>(()=>{});
const platformName = ref('');

watch(query, () => {
  getJobData();
});

onMounted(async () => {
  getJobData();
  getCompanyLists();
  platformSelect();
  const platName = await getLocalstory('platName') as string;
  platformName.value = PLATFORM_MAP[platName];
});

const handlerSelectPlatform = () => {
  router.replace('/platform');
}

// 单个发布职位
const handlerSinglePublishJob = (job: IList) => {
  singlePublishJob.value(job);
}

// 批量发布职位
const handlerMultiplePublishJob = () => {
  multiplePublishJob.value();
}

// 平台判断
const platformSelect = async () => {
  const platform = await getLocalstory('platName') as string;
  switch(platform){
    case 'guopin':
      singlePublishJob.value = guopinPulishJob;
      // multiplePublishJob.value =  guopinMultiplePulishJob;
    break;
    case '24365':
      singlePublishJob.value = jiuyePublishJob;
      // multiplePublishJob.value = jiuyeMultiplePublishJob;
    break;
    case 'nuike':
      singlePublishJob.value = nuikePublishJob;
      break;
    case 'shixiseng':
      singlePublishJob.value = shixisengPublishJob;
    default:
      break;
  }
}

// 一键统收
const oneClickCollection = async () => {
  const platform = route.query.platfrom ? String(route.query.platfrom) : '';
  router.push({
    name: 'collect-resumes',
    query:{
      platfrom: platform
    }
  });
}

// 国聘单个发布职位
const guopinPulishJob = async (job: IList) => {
  await setJobLocalstory('job','single', job);
  switch(job.recruitmentTypeName){
    case '社招': 
      window.open(GUOPIN_SOCIAL_RECRUITMENT);
    break;
    case '校招':
    case '实习':
      window.open(GUOPIN_SCHOOL_RECRUITMENT);
    break;
  }
}
// 国聘批量发布职位
// const guopinMultiplePulishJob = async () => {
//   const isSocial = multipleSelection.value.every(el=>el.recruitmentTypeName === '社招');
//   const isSchool = multipleSelection.value.every(el=>['校招','实习'].includes(el.recruitmentTypeName));
//   if(isSocial){
//     await setJobLocalstory('jobs','multiple', multipleSelection.value);
//     window.open(GUOPIN_SOCIAL_RECRUITMENT);
//   }else if(isSchool){
//     await setJobLocalstory('jobs','multiple', multipleSelection.value);
//     window.open(GUOPIN_SCHOOL_RECRUITMENT);
//   }else{
//     alert('社招和校招不能混合批量发布～');
//   }
// };

// 24365 单个发布职位
const jiuyePublishJob = async (job: IList) => {
  await setJobLocalstory('job','single', job);
  window.open(JIUYEWANG_URL);
}

// 牛客单个发职位
const nuikePublishJob = async (job: IList) => {
  await setJobLocalstory('job','single', job);
  window.open(NUIKE_URL);
}

// 实习僧发送职位
const shixisengPublishJob = async (job: IList) => {
  await setJobLocalstory('job', 'single', job);
  switch(job.recruitmentTypeName){
    case '校招': 
      window.open(SHIXISENG_SCHOOL_URL);
    break;
    case '实习':
      window.open(SHIXISENG_PRACTICE_URL);
    break;
  }
}

const handleSelectionChange = (val: IList[]) => {
  multipleSelection.value = val;
};

// 保存数据
const setJobLocalstory = (key: string, type: string, data: IList | IList[]) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set(
        {
          [key]: data,
          type: type,
          multipleIndex: 0,
          count: Array.isArray(data) ? data.length : 0,
        },
        () => {
          var error = chrome.runtime.lastError;
          if (error) {
            reject(error);
          }
          resolve(1);
          console.log('😄 Save Data Success～');
        },
      );
    } catch (error) {
      reject(error);
    }
  });
};

// 获取职位管理数据
const getJobData = async () => {
  loading.value = true;
  const temp = Object.assign({}, query) as Record<string, string>;
  temp.strCompanyIds = Array.isArray(temp.company) ? temp.company.join(',') : '';
  delete temp.company;
  Object.keys(temp).forEach((key) => {
    if (!temp[key] || temp[key] === '') {
      delete temp[key];
    }
  });
  const params = {
    pageNo: pageNo.value,
    pageSize: pageSize.value,
    excludeOurCompany: 1,
    ...temp,
  };
  try {
    const { data } = await getJobs(params);
    tableData.value = data?.list?.map((el) => ({
      ...el,
      companyName: el.company.name,
      name: el.publishedBy.name,
      hiringManager: el.company.followerName,
    }));
    totalCount.value = data.totalCount;
  } catch (error) {
    console.error('🙅 获取职位数据错误', error);
  } finally {
    loading.value = false;
  }
};

// 全屏
const handlerFullScreen = async () => {
  let url = chrome.runtime.getURL("popup.html");
  let tab = await chrome.windows.create({ 
    url: url,
    width: 768,
    height: 685,
    left: 500,
  });
}

// 获取公司列表
const getCompanyLists = async () => {
  loading.value = true;
  try {
    const { data } = await getCompanyList({ type: 'COMPANY', companyIds: '' });
    companyOptions.value = data.map((el) => ({
      label: el.name,
      value: el.id,
    }));
  } catch (error) {
    console.error('🙅 获取公司列表错误', error);
  } finally {
    loading.value = false;
  }
};


const handleSizeChange = (value: number) => {
  pageSize.value = value;
  getJobData();
};

const handleCurrentChange = (value: number) => {
  pageNo.value = value;
  getJobData();
};

// 【单个】一键发布
// const publishJob = async (job: IList) => {
//   switch (job.recruitmentTypeName) {
//     case '社招':
//       window.open(GUOPIN_SOCIAL_RECRUITMENT);
//       break;
//     case '校招':
//     case '实习':
//       window.open(GUOPIN_SCHOOL_RECRUITMENT);
//       break;
//   }
//   await setJobLocalstory('job', 'single', job);
// };
</script>

<style lang="less" scoped>
/deep/.el-pagination__total{
  color: #fff;
  margin-left: 10px;
}
/deep/.el-card__body{
  padding: 15px;
}
.contianer {
  width: 737px;
  height: 558px;
  padding: 0 15px 15px;
  background: url('@/assets/images/background.png') no-repeat;
  opacity: 0.9;
  header {
    position: relative;
    display: flex;
    font-size: 22px;
    font-weight: 500;
    padding: 15px 0;
    color: #fff;
    justify-content: center;
    .statement {
      position: absolute;
      bottom: 0;
      left: 23%;
      color: #fff;
      font-size: 12px;
    }
    .full-screen{
      position: absolute;
      right: -6px;
      top: 8px;
      cursor: pointer;
      img{
        width: 32px;
        height: 32px;
      }
    }
    &--title{
      font-size: 18px;
      font-weight: 500;
      color: #292929da;
    }
    &--right {
      display: flex;
      align-items: center;
    }
    .publish-btn {
      height: 35px;
      margin-left: 12px;
    }
  }
  .el-card {
    border-radius: 8px;
  }
  .el-table{
    margin-top: 10px;
    overflow: auto;
    border-radius: 8px;
  }
  .row{
    margin-top: 10px;
  }
  .el-col {
    display: flex;
    align-items: center;
    margin-right: 6px;
    font-size: 14px;
    & > span{
      color: #4E5969;
    }
    .filter-text {
      width: 60px;
      text-align: end;
    }
  }
  footer {
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    .el-pagination {
      display: flex;
      justify-content: end;
      margin-top: 8px;
    }
    .el-button{
      margin-top: 6px;
    }
  }
  
}
</style>
