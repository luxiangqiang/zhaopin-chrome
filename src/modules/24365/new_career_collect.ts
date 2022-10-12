import { IResume } from '../../axios/apis/types';
function isDuringDate(beginDateStr: string, endDateStr: string, curDateStr: string) {
  var curDate = new Date(curDateStr),
      beginDate = new Date(beginDateStr),
      endDate = new Date(endDateStr);
      console.error(beginDate, endDate, curDate)
  if (curDate >= beginDate && curDate <= endDate) {
      return true;
  }
  return false;
}

/**
 * 功能：获取缓存数据
 * @param type 
 * @returns 
 */
 export const getLocalstory  = (type: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.get(type, (result) => {
        console.log(`✅ Get ${ type } Success～`, result[type])
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  })
}

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

// 分割
function splitArr(ele: Node | null){
  if(!ele){
    return '';
  }
  return $(ele).text();
}

// 获取教育经历
function getEduExperience(){
  let edus:{
    start: string;
    end: string;
    education: string;
    school: string;
    speciality: string;
  }[] = [];
  $.each($('#edu p'), (index, ele) => {
    const time = $(ele).find('span').first().text().split('--');
    edus.push({
      start: time[0],
      end: time[1],
      education: $(ele).find('.edulevel').text(),
      school: $(ele).find('.school').text(),
      speciality:  $(ele).find('.major').text()
    });
  })
  return edus;
}

// 获取项目经验 
function getProjectsExperience(){
  let projects:{
    summary: string;
  }[] = [];
  $.each($('.title-name'), (index, ele)=>{
    if($(ele).text() === '项目经验'){
      projects.push({
        summary: $(ele).parent().siblings().first().text()
      });
    }
  })
  return projects;
}

// 技能证书
function getCertificates(){
  let certificates:{
    certificate: string;
  }[] = [];
  $.each($('.title-name'), (index, ele)=>{
    if($(ele).text() === '所获证书'){
      certificates.push({
        certificate: $(ele).parent().siblings().first().text()
      });
    }
  })
  return certificates;
}

// 实践经验
function getWorkExperience(){
  let works:{
    summary: string;
  }[] = [];
  $.each($('.title-name'), (index, ele)=>{
    if($(ele).text() === '实践经验'){
      works.push({
        summary: $(ele).parent().siblings().first().text()
      });
    }
  })
  return works;
}

// 个人优势：技能专长、获奖情况、自我评价
function getAdvantage(){
  let summary = '';
  $.each($('.title-name'), (index, ele)=>{
    if($(ele).text() === '技能专长'){
      summary = summary + '技能专长：' + $(ele).parent().siblings().first().text()+ '\n'
    }
    if($(ele).text() === '获奖情况'){
      summary = summary + '获奖情况：' + $(ele).parent().siblings().first().text()+ '\n'
    }
    if($(ele).text() === '自我评价'){
      summary = summary + '自我评价:' + $(ele).parent().siblings().first().text()+ '\n'
    }
  })
  return {
    summary
  };
}

// 获取信息
function getResumeData(): Partial<IResume>{
  const subject = $('#target').text();
  const nameEle = getxPath('//*[@id="bacic"]/div/h1')
  const sexEle = getxPath('//*[@id="bacic"]/div/p[1]/span[1]/span')
  const mobileEle = getxPath('//*[@id="bacic"]/div/p[3]/span[1]/span')
  const birthEle = getxPath('//*[@id="bacic"]/div/p[1]/span[3]/span')
  const emailEle = getxPath('//*[@id="bacic"]/div/p[3]/span[2]/span')

  const edus = getEduExperience();
  const projects = getProjectsExperience();
  const certificates = getCertificates()
  const works = getWorkExperience();
  const advantage = getAdvantage();

  return {
    subject: subject,
    form:{
      basic:{
        name: splitArr(nameEle),
        sex: splitArr(sexEle),
        mobile: splitArr(mobileEle),
        email: splitArr(emailEle),
        birth: splitArr(birthEle),
      },
      forwards: [
      ],
      edus: edus,
      works: works,
      projects: projects,
      advantage: advantage,
      certificates: certificates
    }
  }
}

const list:Partial<IResume>[] = [];

// 保存数据
const saveResumesLocalStory = (key: string, value: any) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]:  value}, function () {
        console.log('✅ [resume_home.js]: Save Resumes Success～');
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  })
}

// 递归翻页
async function deepTurnPages(){
  const timeRage:string[] = await getLocalstory('timeRange') as string[];
  const timeId = setInterval(async () => {
    if($('.canditateList').length > 0){
      clearInterval(timeId);
      let flag = false;
      for await (let ele of document.querySelectorAll('.canditateList')){
        const applyTime = $(ele).find('.applyTime').text();
        if(isDuringDate(timeRage[0], timeRage[1], applyTime)){
          console.error(applyTime)
          await new Promise((resolve, reject) => {
            $(ele).find('.studentname')[0].click();
            setTimeout(()=>{
              const data = getResumeData();
              list.push(data);
              resolve(1);
            }, 500)
          })
        }else{
          flag = true;
          break;
        }
      }
      if(!flag){
        $.each($('.next'), async (index, ele) => {
          if($(ele).text() === ">"){
            ele.click();
            await deepTurnPages()
          }
        })
      }
    }
    const resume =  await getLocalstory('resumes') as Partial<IResume>[] || [];
    resume.push(...list);
    await saveResumesLocalStory('resumes', resume)
    // chrome.runtime.sendMessage({
    //   channel: 'RESUME_DATA_ZHAO',
    //   message: list
    // })
  }, 2000)
}

async function init(){
  deepTurnPages();
}

init();