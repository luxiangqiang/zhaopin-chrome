<template>
  <div class="contianer">
    <header class="header">
      <div class="header--title">国聘一键发布职位助手</div>
      <el-button 
        :disabled="multipleSelection.length === 0"
        class="publish-btn" type="primary" @click="allPublishJob">
        一键发布职位({{ multipleSelection.length }})
      </el-button>
    </header>
    <el-card shadow="always">
      <el-row class="mgb">
        <el-col :span="8">
          <span style="width: 70px">招聘状态：</span>
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
          <span class="filter-text">编码: </span>
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
          <span style="width: 70px">招聘性质：</span>
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
          <span style="width: 44px">公司：</span>
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
        class="table"
        :data="tableData"
        stripe
        border
        height="300"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="item of jobColumns"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >

        </el-table-column>
        <el-table-column fixed="right" label="操作" :width="'100px'" class="operate" align="center">
          <template v-slot="scope">
            <el-button type="text" size="small" @click="publishJob(scope.row)">一键发布</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="total, sizes, prev, pager, next"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :page-size="pageSize"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, Ref, ref, watch } from 'vue';
import { getJobs, getCompanyList } from '@/axios/apis/index';
import { jobColumns } from './contants';
import { IList } from '@/axios/apis/types';

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
  recruitmentType: ''
});
const multipleSelection = ref<IList[]>([]);
const SCHOOL_RECRUITMENT = 'https://campus.iguopin.com/index.php?m=&c=company&a=jobs_add'; 
const SOCIAL_RECRUITMENT = 'https://www.iguopin.com/index.php?m=&c=company&a=jobs_add';

watch(query, () => {
  getJobData();
});

onMounted(() => {
  getJobData();
  getCompanyLists();
});

// 【单个】一键发布
const publishJob = async (job: IList) => {
  switch(job.recruitmentTypeName){
    case '社招': 
      window.open(SOCIAL_RECRUITMENT);
    break;
    case '校招':
    case '实习':
      window.open(SCHOOL_RECRUITMENT);
    break;
  }
  await setJobLocalstory('job','single', job);
};

// 【批量】一键发布
const allPublishJob = async () => {
  const isSocial = multipleSelection.value.every(el=>el.recruitmentTypeName === '社招');
  const isSchool = multipleSelection.value.every(el=>['校招','实习'].includes(el.recruitmentTypeName));
  if(isSocial){
    await setJobLocalstory('jobs','multiple', multipleSelection.value);
    window.open(SOCIAL_RECRUITMENT);
  }else if(isSchool){
    await setJobLocalstory('jobs','multiple', multipleSelection.value);
    window.open(SCHOOL_RECRUITMENT);
  }else{
    alert('社招和校招不能混合批量发布～');
  }
}

const handleSelectionChange = (val: IList[]) => {
  multipleSelection.value = val;
};

// 保存数据
const setJobLocalstory = (key: string, type: string, data: IList | IList[]) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.set(
        { 
          [key]: data, 
          'type': type, 
          'multipleIndex': 0, 
          'count': Array.isArray(data) ? data.length : 0
        }, 
        () => {
          var error = chrome.runtime.lastError;  
          if (error) {  
            reject(error);
          } 
          resolve(1);
          console.log('😄 Save Data Success～');
        }
      );
    } catch (error) {
      reject(error);
    }
  })
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
      hiringManager: el.company.followerName
    }));
    totalCount.value = data.totalCount;
  } catch (error) {
    console.error('🙅 获取职位数据错误', error);
  } finally {
    loading.value = false;
  }
};

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
</script>

<style lang="less" scoped>
.contianer {
  width: 737px;
  padding: 15px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 13px;

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
  .mgb {
    margin-bottom: 10px;
  }
  .el-col {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .filter-text {
      width: 50px;
      text-align: end;
    }
  }
  .table {
    margin-top: 20px;
    overflow: auto;
  }
  .el-pagination {
    display: flex;
    justify-content: end;
    margin-top: 8px;
  }
}
</style>
