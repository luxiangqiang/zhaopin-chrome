<template>
  <div class="container">
    <div class="full-screen" @click="handlerFullScreen">
      <img :src="fullScreen" alt="fullScreen">
    </div>
    <el-card class="login-box">
      <template #header>
        <div class="login-title">账号登陆</div>
      </template>
      <el-form ref="ruleFormRef" :model="form" :rules="rules" status-icon label-width="60px">
        <el-form-item label="邮箱:" prop="email">
          <el-input
            v-model="form.email"
            name="email"
            label="邮箱"
            size="large"
            placeholder="请输入企业邮箱登录"
          >
            <template #append>{{ emailSuffix }}</template>
          </el-input>
        </el-form-item>
        <el-form-item class="password" label="密码:" prop="password">
          <el-input
            v-model="form.password"
            show-password
            label-width="100px"
            type="password"
            name="password"
            label="密码"
            size="large"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-row :gutter="20" type="flex" justify="center">
          <el-button 
            type="primary" 
            class="login-btn"
            round
            @click="submitForm(ruleFormRef)"
          >登录</el-button>
        </el-row>
      </el-form>
    </el-card>
    <div class="statement">免责声明：本产品仅为辅助工具，仅供学习使用，禁止用于商业用途!</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { login } from '@/axios/apis/index';
import { useRouter } from "vue-router";
import { getLocalstoryToken } from '@/utils/index';
import type { FormInstance, FormRules } from 'element-plus';
import fullScreen from '@/assets/images/full-screen.png';

const router = useRouter();
const emailSuffix = '@reta-inc.com';
const ruleFormRef = ref<FormInstance>();
const form = reactive({
  email: '',
  password: '',
});
const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: '请输入企业邮箱登录',
    },
    {
      pattern: /^[a-zA-Z][a-zA-Z0-9_-]*$/,
      message: '邮箱格式不正确',
    },
  ],
  password: [{ required: true, message: '请输入密码' }],
});

onMounted(async () => {
  const token = await getLocalstoryToken();
  if(token){
    router.push({ name: "platform" });
  }else{
    router.push({ path: "/" });
  }
})

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

const saveToken = (token: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.set(
        { "token": token }, 
        () => {
          var error = chrome.runtime.lastError;  
          if (error) {  
            reject(error);
          } 
          resolve(token);
          console.log('😄 Save Token Success～');
        }
      );
    } catch (error) {
      reject(error);
    }
  })
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        const { data } = await login({
          email: `${form.email}@reta-inc.com`,
          password: form.password,
        });
        // sendMonitorMessage(`【监控报警-账号登陆】：${ form.email } 账号已登陆～`)
        await saveToken(data.authToken);
        router.push({
          name: "platform"
        })
      } catch (error) {
        console.log('🙅 登陆失败', error);
      }
    } else {
      console.log('🙅 验证失败!', valid);
    }
  });
};
</script>

<style scoped lang="less">
/deep/.el-card__body{
  padding: 20px 40px;
}
.container {
  position: relative;
  width: 768px;
  height: 572px;
  background-size: cover;
  background-image: url('@/assets/images/background.png');
  opacity: 0.9;
  .full-screen{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    img{
      width: 32px;
      height: 32px;
    }
  }
  .login-box {
    width: 550px;
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    .login-title {
      font-size: 16px;
    }
    .password {
      margin-top: 25px;
    }
    .login-btn {
      width: 375px;
      height: 48px;
      padding-left: 50px;
      padding-right: 50px;
      margin: 20px 10px;
    }
  }
  .statement {
    position: absolute;
    bottom: 8px;
    left: 23%;
    color: #fff;
  }
}
</style>