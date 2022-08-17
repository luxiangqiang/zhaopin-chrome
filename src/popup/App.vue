<template>
  <el-button
    type="primary"
    class="btn-set-cookie"
    @click="publishJob"
    id="changeColor"
  >
    一键发布职位
  </el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { ElMessage } from 'element-plus'
// import api from '@/utils/api';

export default defineComponent({
  name: 'App',
  setup(props, context) {
    const tabPageId = ref(0);
    return {
      tabPageId
    };
  },

  methods: {
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
