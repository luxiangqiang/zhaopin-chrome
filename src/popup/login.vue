<template>
  <div class="container">
    <el-card class="login-box">
      <template #header>
        <div class="login-title">账号登陆</div>
      </template>
      <el-form ref="ruleFormRef" :model="form" :rules="rules" status-icon label-width="100px">
        <el-form-item label="企业邮箱:" prop="email">
          <el-input
            v-model="form.email"
            name="email"
            label="企业邮箱"
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
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-row :gutter="20" type="flex" justify="center">
          <el-button 
            type="primary" 
            class="login-btn"
            @click="submitForm(ruleFormRef)"
          >登录</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { login } from '@/axios/apis/index';
import { useRouter } from "vue-router";
import { getLocalstoryToken } from '@/utils/index';
import type { FormInstance, FormRules } from 'element-plus';

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
    router.push({ name: "popup" });
  }else{
    router.push({ path: "/" });
  }
})

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
        await saveToken(data.authToken);
        router.push({
          name: "popup"
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
.container {
  width: 737px;
  height: 500px;
  background-size: cover;
  background-image: url('@/assets/images/background.png');
  opacity: 0.9;
  .login-box {
    width: 500px;
    height: auto;
    position: absolute;
    top: 50%;
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
      padding-left: 50px;
      padding-right: 50px;
      margin: 20px 10px;
    }
  }
}
</style>