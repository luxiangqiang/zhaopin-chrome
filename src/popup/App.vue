<template>
  <div class="contianer">
    <header class="header">
      <h2>国聘一键发布职位助手</h2>
      <el-button class="publish-btn" type="primary" @click="publishJob">一键发布职位</el-button>
    </header>
    <el-card shadow="always">
      <el-row class="mgb">
        <el-col :span="7">
          <span style="width: 90px">招聘状态：</span>
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
          <span class="filter-text">地区：</span>
          <el-input
            class="input-item"
            placeholder="请输入职位"
            v-model="query.city"
            clearable
          ></el-input>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="7">
          <span style="width: 100px">面试间状态：</span>
          <el-select
            v-model="query.opened"
            class="interview-room-status"
            placeholder="请选择面试间状态"
          >
            <el-option
              v-for="item in interviewRoomStatusOptions"
              :key="item.value + 'status'"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <span style="width: 42px">公司：</span>
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
      <el-table v-loading="loading" class="table" :data="tableData" stripe border height="300">
        <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="item of jobColumns"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
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
import { nextTick, onMounted, reactive, Ref, ref, watch } from 'vue';
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
  city: string;
  status: string;
  opened: string;
}

const loading = ref<Boolean>(false);
const tableData: Ref<IList[]> = ref([]);
const totalCount: Ref<number> = ref(0);
const pageNo: Ref<number> = ref(1);
const pageSize: Ref<number> = ref(10);
const companyOptions: Ref<IOptions[]> = ref([]);
const jobTypes: Ref<string[]> = ref([]);
const interviewRoomStatusOptions: Ref<IOptions[]> = ref([
  {
    label: '全部',
    value: '',
  },
  {
    label: '已开启',
    value: '1',
  },
  {
    label: '待开启',
    value: '-1',
  },
  {
    label: '已关闭',
    value: '0',
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
  city: '',
  status: '',
  opened: '',
});

watch(query, () => {
  getJobData();
});

onMounted(() => {
  getJobData();
  getCompanyLists();
});

// 一键发布
const publishJob = async (job: IList) => {
  window.open('https://campus.iguopin.com/index.php?m=&c=company&a=jobs_add');
  setJobLocalstory(job);
};

const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

const setJobLocalstory = (job: IList) => {
  chrome.storage.sync.set({ 'job': job }, function () {
    console.log('😄 Save Job Success～');
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
    ...temp,
  };
  try {
    const { data } = await getJobs(params);
    tableData.value = data?.list?.map((el) => ({
      ...el,
      companyName: el.company.name,
      name: el.publishedBy.name,
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
    h2 {
      color: #292929da;
    }
    &--right{
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
