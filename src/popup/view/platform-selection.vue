<template>
  <div class="container">
    <header>
      <div>请选择使用平台</div>
    </header>
    <div class="divider">
      <el-divider><el-icon><Monitor /></el-icon></el-divider>
    </div>
    <section>
      <el-row :gutter="20">
        <el-col :span="11" v-for="(item, index) of list" :key="index" @click="handlerSelectPlatform(item)">
          <el-card shadow="hover">
            <div class="content">
              <img :style="{ height: item.height }" :src="item.images" alt="">
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <footer>
      <el-checkbox v-model="statement">我已阅读免责声明</el-checkbox>
      <div>
        免责声明：本产品仅为辅助工具，仅供学习使用，禁止用于商业用途，商用者自主承担法律责任!
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import guopin_logo from '@/assets/images/guopin_logo.png'
  import img_logo from '@/assets/images/24365_logo.png'
  import boss_logo from '@/assets/images/boss_logo.png'
  import qianchengwuyou_logo from '@/assets/images/qianchengwuyou_logo.png'
  import shixiseng_logo from '@/assets/images/shixiseng_logo.png'
  import nuike_logo from '@/assets/images/nuike_logo.png'
  import { ElMessage } from 'element-plus'
  import { useRouter } from "vue-router";

  interface IPlatform {
    images: string;
    title: string;
    height: string;
    value: string;
  }

  const statement = ref<boolean>(false);
  const list = reactive<IPlatform[]>([
    {
      images: guopin_logo,
      title: '国聘网',
      value: 'guopin',
      height: '36px'
    },
    {
      images: img_logo,
      title: '24365',
      value: '24365',
      height: '47px'
    },
    {
      images: boss_logo,
      title: 'Boss直聘',
      value: 'zhipin',
      height: '28px'
    },
    {
      images: qianchengwuyou_logo,
      title: '前程无忧',
      value: 'qiancheng',
      height: '44px'
    },
    {
      images: shixiseng_logo,
      title: '实习僧',
      value: 'shixiseng',
      height: '40px'
    },
    {
      images: nuike_logo,
      title: '牛客网',
      value: 'nuike',
      height: '32px'
    }
  ]);
  const router = useRouter();

  // 选择平台
  const handlerSelectPlatform = (item: IPlatform) => {
    console.error(item)
    if(statement.value){
      router.push({ 
        name: 'home',
        query: {
          platfrom: item.value
        }
      })
    }else{
      ElMessage({
        message: '请先阅读免责声明～',
        type: 'warning',
      })
    }
  }
</script>

<style scoped lang="less">
  /deep/.el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
    background: #b9eaffd9;
  }
  /deep/.el-divider__text{
    background-color: #33d2e5b0;
    color: #fff;
  }
  /deep/.el-checkbox__label{
    color: #fff;
  }
  .container{
    position: relative;
    width: 768px;
    height: 572px;
    background-size: cover;
    background-image: url('@/assets/images/background.png');
    opacity: 0.9;

    header {
      position: relative;
      display: flex;
      font-size: 22px;
      font-weight: 500;
      padding: 15px 0;
      color: #fff;
      justify-content: center;
      div {
        margin-top: 10px;
      }
    }
    .divider{
      display: flex;
      justify-content: center;
      .el-divider{
        color: #fff;
        width: 700px;
      }
    }
    .el-row{
      margin-top: 15px;
      padding: 0 10px;
      justify-content: space-evenly;
      .el-col{
        margin-bottom: 35px;
      }
    }
    .el-card {
      border-radius: 10px;
    }
    .content{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      cursor: pointer;
    }
    footer{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
</style>