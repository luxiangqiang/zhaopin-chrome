<template>
  <el-button
    type="primary"
    class="btn-set-cookie"
    @click="publishJob"
  >
    一键发布职位
  </el-button>
  <el-button
    type="primary"
    class="btn-set-cookie"
    @click="getData"
  >
    请求数据
  </el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {  getJobs } from '@/axios/apis/index';
import axios from 'axios';
// import { ElMessage } from 'element-plus'
// import api from '@/utils/api';

export default defineComponent({
  name: 'App',
  setup(props, context) {
    const tabPageId = ref(0);
    return {
      tabPageId,
      pageNo:1,
      pageSize: 10,
    };
  },

  methods: {
    async getData(){
      const { data } = await getJobs({ pageNo: 1, pageSize:10 });
      console.log(data);
    },
    async publishJob() {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: Number(tab.id), allFrames: true},
        files: ['./jquery.js', './guopin_home.js']
      });
    },
  }
})
</script>

<style lang="less" scoped>
  
</style>
