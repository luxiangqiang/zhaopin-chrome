import { IList } from "@/axios/apis/types";
import { IFormat } from "../guopin/types";

// 【映射】职位性质
const JOB_TYPE_MAP:Record<string, string> = {
  '校招': '应届生',
  '实习': '实习',
  '社招': '社招'
}

// 【映射】学历字段映射
const EDUCATION_MAP:Record<string, string> = {
  '博士': '博士及以上',
  '硕士': '硕士及以上',
  '本科': '本科及以上',
  '专科': '不限',
  '高中': '不限',
  '中专中技':'不限',
  '中专/中技':'不限',
  '初中及以下':'不限',
  '不限':'不限'
}

let evt:Event = document.createEvent('HTMLEvents');
evt.initEvent('input', true, true);

/**
 * 功能：通过 xPath 获取 dom 元素
 * @param xpath 
 * @returns 
 */
 const getxPath = (xpath:string) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom: Node | null = result.iterateNext();
  if(dom){
    return dom;
  }else{
    return null;
  }
}

// 获取 job 
const getJobLocalstory  = (type: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.get(type, (result) => {
        console.log('👌 Get Job Success～', result, type)
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  })
}

// 数据格式转换
function formateData(job: IList){
  return {
    title: `${job.title}—${job.company.name}—${job.code}`, // 职位名
    code: job.code, // 职位编号
    type: JOB_TYPE_MAP[job.recruitmentTypeName], // 招聘类型
    salaryFrom: JOB_TYPE_MAP[job.recruitmentTypeName] === "实习" ? job.salaryFrom : formatNumber(job.salaryFrom), // 最低薪资
    salaryTo: JOB_TYPE_MAP[job.recruitmentTypeName] === "实习" ? job.salaryTo : formatNumber(job.salaryTo), // 最高薪资
    amount: 3, // 在招人数
    salmonths: job.salaryTimes + '个月', // 薪资月数
    description: job.description, // 职位描述
    // category: JOB_CATEGORIES_MAP[job.secondCategory.name], // 职位类别
    // city: Object.keys(CITY_MAP).includes(city) ? CITY_MAP[city] : ['其他地区', '全国'], // 工作地区
    education: EDUCATION_MAP[job.educationFrom], // 学历
    specialized: ['其他', '不限'], // 专业
    experienceFrom: job.experienceFrom, // 工作年限
  }
}

function formatNumber(salary: string) {
  const index1 = salary.indexOf('千');
  const index2 = salary.indexOf('万');
  if(index1 !== -1) {
    return salary.substring(0, index1) + 'K';
  }
  if(index2 !== -1) {
    return Number(salary.substring(0, index2)) * 10000 / 1000 + 'K';
  }else{
    return Number(salary) / 1000 + 'K';
  }
}

// 时间格式设置
function getNowDate(date: Date) { 
  let year = date.getFullYear() // 年
  let month = String(date.getMonth() + 1); // 月
  let day = String(date.getDate()); // 日
  // 给一位数的数据前面加 “0”
  if (Number(month) >= 1 && Number(month) <= 9) {
    month = "0" + month;
  }
  if (Number(day) >= 0 && Number(day) <= 9) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day + " " + '00:00';
}

async function autoSetSchoolJob(formate: IFormat){
  console.log(formate.type)
  switch(formate.type){
    case '应届生':
      break;
    case '实习':{
      $.each($('.el-radio-group label .tw-mr-5'), (index, ele) => {
        if($(ele).text().trim() === '实习'){
          $(ele).trigger('click')
        }
      })
      break;
    }
    case '社招':{
      $.each($('.el-radio-group label'), (index, ele) => {
        if($(ele).text().trim() === '社招'){
          $(ele).trigger('click')
        }
      })
      setTimeout(()=>{
        // 反馈时长
        $.each($('.el-select-dropdown__item'), (index, ele) => {
          if($(ele).text() === "1个工作日内"){
            $(ele).trigger('click');
          }
        })
      }, 1000)
    }
    break;
  }

  await new Promise((resolve, reject) => { setTimeout(() => { resolve('ok')}, 1000) })
  
  // 设置标题
  const titleEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[1]/div/div/div[1]/form/div/div/div/input');
  if(titleEle){
    $(titleEle).val(formate.title)
    titleEle.dispatchEvent(evt)
  }
  // 设置职位类别
  // const categoryEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[2]/div/div/form/div/div/div/div/input')
  // if(categoryEle){
  //   $(categoryEle).trigger('click')
  // }
  // $.each($('.el-cascader-node__label'), (index, ele) => {
  //   if($(ele).text() === "金融"){
  //     console.error($(ele).parent())
  //     $(ele).parent().focus()
  //   }
  // })
  // 职位描述
  const jobSummaryEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[3]/div/div/div/form/div/div/div[1]/textarea')
  const jobRequirementEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[4]/div/div/div/form/div/div/div/textarea')
  if(jobSummaryEle && jobRequirementEle){
    $(jobSummaryEle).val(formate.description);
    $(jobRequirementEle).val(formate.description);
    jobSummaryEle.dispatchEvent(evt)
    jobRequirementEle.dispatchEvent(evt)
  }

  let keyEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[6]/div/div/form/div/div/div[2]');
  if(formate.type === "应届生"){
    keyEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[5]/div/div/form/div/div/div[2]');
  }
  if(formate.type === "实习"){
    keyEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[5]/div/div/form/div/div/div[2]');
    const mouthEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[8]/div/div/form/div/div/div[2]/div/div/div/div/input')
    $(mouthEle!).trigger('click')
    setTimeout(()=>{
      $.each($('.el-select-dropdown__item'), (index, ele) => {
        if(["5天", "3个月", formate.salaryFrom, formate.salaryTo].includes($(ele).text().trim())){
          $(ele).trigger('click');
        }
      })
    }, 2000)
  }
  // 关键词设置
  $(keyEle!).trigger('click')
  const timeId = setInterval(()=>{
    $.each($('.category-item'), (index, ele)=>{
      if(['软件服务', '生活服务'].includes($(ele).text().trim())){
        clearInterval(timeId);
        $(ele).trigger('click');
      }
    })
    $('.footer-save').trigger('click')
  },1000);

  // 学历
  $.each($('.el-select-dropdown__item'), (index, ele) => {
    if($(ele).text() === formate.education){
      $(ele).trigger('click')
    }
  })

  // 薪资设置
  const salaryFromEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[9]/div/div/form/div/div/div[2]/div/div/div/div/input')
  salaryFromEle && $(salaryFromEle).trigger('click');
  setTimeout(()=>{
    $.each($('.el-select-dropdown__item'), (index, ele) => {
      if($(ele).text() === formate.salaryFrom){
        $(ele).trigger('click');
      }
    });
  }, 1000)
  const salaryToEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[9]/div/div/form/div/div/div[3]/div/div/div/div/input')
  salaryToEle && $(salaryToEle).trigger('click');
  setTimeout(()=>{
    $.each($('.el-select-dropdown__item'), (index, ele) => {
      if($(ele).text() === formate.salaryTo){
        $(ele).trigger('click');
      }
    });
  }, 1000)
  const salaryMounthEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[9]/div/div/form/div/div/div[4]/div/div/div/div/input')
  salaryMounthEle && $(salaryMounthEle).trigger('click');
  setTimeout(()=>{
    $.each($('.el-select-dropdown__item'), (index, ele) => {
      if($(ele).text() === String(formate.salmonths)){
        $(ele).trigger('click');
      }
    });
  }, 1000)

  // 是否同时发布实习职位
  const shixiCheckoutEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/section/div[1]/label/span[1]/span')
  shixiCheckoutEle && $(shixiCheckoutEle).trigger('click');
}

async function init(){
  const data = await getJobLocalstory('job') as IList;
  // 转换数据格式
  const formate = formateData(data) as any;
  console.error(formate)
  // 自动设置校招职位
  const timeId = setInterval(()=>{
    const titleEle = getxPath('/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[1]/div/div/div[1]/form/div/div/div/input');
    if(titleEle){
      clearInterval(timeId);
      autoSetSchoolJob(formate);
    }
  },1000)
}


init();