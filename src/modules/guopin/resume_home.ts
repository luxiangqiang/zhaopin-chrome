/**
 * 功能：通过 xPath 获取 dom 元素
 * @param xpath 
 * @returns 
 */
 const getxPathEle = (xpath:string) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom: Node | null = result.iterateNext();
  if(dom){
    return dom;
  }else{
    return null;
  }
}

// 分割
function splitArr(ele: Node | null, symbol:string = '：'){
  if(!ele){
    return '';
  }
  // console.error( $(ele).text().split(symbol))
  return $(ele).text().split(symbol)[1];
}

// 日期补 0
function formatDate(str: string) {
  // 根据 - 符号拆分
  return str
    .split("-")
    .map((item) => {
      // +item 将item字符串转换为数字
      // 小于10的时候就补全一个前缀0
      if (+item < 10) {
        return "0" + +item;
      }

      // 大于10的时候不用补0
      return item;
    })
    .join("-"); // 最后重组回来
}

// 正则转换日期
function regConvertDate(date: string){
  let result = date;
  if(result.charAt(result.length - 1) === '月'){
    result = result.replace(/(月)/ig, '')
    result = result.replace(/(年)/ig, '-')
    return formatDate(result)
  }
  result = result.replace(/(日)/ig, '')
  result = result.replace(/(年)|(月)/ig, '-')
  return formatDate(result)
}

// 判断校招/社招
function isJudgeSchoolType(){
  return window.location.host === "campus.iguopin.com";
}

// 解析教育经历、工作经历、培训经历
function getExperience(item: HTMLElement, typeName: string){
  let els = [];
  if($(item).text() === typeName){
    for(let el = item; item; el = el?.nextElementSibling as HTMLElement) {
      if ($(el).attr('class') === 'item') {
        els.push(el)
      }
      if ((el?.tagName === 'H2' && $(el).text() !== typeName) || !el?.tagName ||el?.tagName === 'footer') {
        break;
      }
    }
  }
  return els;
}

// 教育经历
function getEduExperience(){
  let edus:{
    start: string;
    end: string;
    education: string;
    school: string;
    speciality: string;
  }[] = [];
  $.each($('h2'), (index, item) => {
    const eduEles = getExperience(item,'教育经历');
    if (eduEles.length !== 0) {
      edus = eduEles.map(el=>{
        const time = $(el).find('.td1').prop("firstChild").nodeValue;
        const [start, end] = time.split('-');
        const other = $(el).find('.td2').text();
        const[,education, school, speciality] = other.split('|');
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          education,
          school,
          speciality
        }
      })
    }
  })
  return edus; 
}

// 工作经历
function getWorkExperience(){
  let works:{
    start: string;
    end: string;
    title: string;
    company: string;
    summary: string;
  }[] = [];
  $.each($('h2'), (index, item) => {
    const workEles = getExperience(item,'工作经历');
    if (workEles.length !== 0) {
      works = workEles.map(el=>{
        const time = $(el).find('.td1').prop("firstChild").nodeValue;
        const [start, end] = time.split('-');
        const other = $(el).find('.td2').text();
        const [title, company] = other.split('|');
        const summaryEle = $(el).find('.td3').find('.txtr')[0];
        const summary = $(summaryEle).text();
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          title,
          company,
          summary
        }
      })
    }
  })
  return works;
}

// 培训经历
function getTrainingsExperience(){
  let tranings:{
    start: string;
    end: string;
    trainingName: string;
    institution: string;
    summary: string;
  }[] = [];
  $.each($('h2'), (index, item) => {
    const tranEles = getExperience(item,'培训经历');
    if (tranEles.length !== 0) {
      tranings = tranEles.map(el=>{
        const time = $(el).find('.td1').prop("firstChild").nodeValue;
        const [start, end] = time.split('-');
        const other = $(el).find('.td2').text();
        const [trainingName, institution] = other.split('|');
        const summary = $(el).find('.td3 .txtr').text();
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          trainingName,
          institution,
          summary
        }
      })
    }
  })
  return tranings;
}

// 项目经历
function getProjectsExperience(){
  let projects:{
    start: string;
    end: string;
    projectName: string;
    company: string;
    responsibilities: string;
    summary: string;
  }[] = [];
  $.each($('h2'), (index, item) => {
    const projectsEles = getExperience(item,'项目经历');
    if (projectsEles.length !== 0) {
      projects = projectsEles.map(el=>{
        const time = $(el).find('.td1').prop("firstChild").nodeValue;
        const [start, end] = time.split('-');
        const other = $(el).find('.td2').text();
        const [title, projectName, company] = other.split('|');
        const summaryEle = $(el).find('.txtr')[0];
        const summary = $(summaryEle).text();
        const responsibilitiesEle =  $(el).find('.txtr')[1];
        const responsibilities = $(responsibilitiesEle).text();
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          projectName,
          company,
          title,
          responsibilities,
          summary
        }
      })
    }
  })
  return projects;
}

// 证书
function getCertificates(){
  let certificates:{
    certificate: string;
    date: string;
  }[] = [];
  $.each($('h2'), (index, item) => {
    const certificatesEles = getExperience(item,'证书');
    if (certificatesEles.length !== 0) {
      certificates = certificatesEles.map(el => {
        const date = $(el).find('.td1').text();
        const other = $(el).find('.td2').text();
        const [certificate] = other.split('|');
        return {
          date: regConvertDate(date),
          certificate
        }
      })
    }
  })
  return certificates;
}

// 获取简历数据
function getResumeData(){
  const subject = getxPathEle('/html/body/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]');
  const nameEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[1]')
  const sexEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[2]')
  let mobileEle: Node | null = null;
  let emailEle: Node | null = null;
  let workStartEle: Node | null = null; // 工作开始时间
  let locationEle: Node | null = null; // 现居住地
  let titleEle: Node | null = null; // 期望岗位
  let vocationEle: Node | null = null; // 期望行业
  let salaryFromEle: Node | null = null; // 期望薪资
  let forwardLocationEle: Node | null = null; // 期望地区

  // 校招
  if(isJudgeSchoolType()){
    mobileEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[6]')
    emailEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[7]')
    locationEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[13]')
    titleEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[4]')
    vocationEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[3]')
    salaryFromEle  = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[6]')
    forwardLocationEle  = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[5]')
  }else{
    mobileEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[4]')
    emailEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[6]')
    workStartEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[13]')
    locationEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[22]')
    titleEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[6]')
    vocationEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[5]')
    salaryFromEle  = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[8]')
    forwardLocationEle  = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[7]')
  }
  const birthEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[2]/div[3]')
  const jobTypeEle = getxPathEle('/html/body/div[1]/div[1]/div[3]/div[4]/div[2]')
  
  const edus = getEduExperience();
  const works = getWorkExperience();
  const projects = getProjectsExperience();
  const trainings = getTrainingsExperience();
  const certificates = getCertificates()

  return {
    subject: splitArr(subject),
    form:{
      basic:{
        name: splitArr(nameEle),
        sex: splitArr(sexEle),
        mobile: splitArr(mobileEle),
        email: splitArr(emailEle),
        birth: splitArr(birthEle),
        workStart: splitArr(workStartEle),
        location: splitArr(locationEle),
      },
      forwards: [{
        vocation: splitArr(vocationEle),
        title: splitArr(titleEle),
        location: splitArr(forwardLocationEle),
        salaryFrom: splitArr(salaryFromEle),
        jobType: splitArr(jobTypeEle),
      }],
      edus: edus,
      works: works,
      projects: projects,
      trainings: trainings,
      certificates: certificates
    }
  };
}

function init(){
  const data = getResumeData();
  chrome.runtime.sendMessage({
    channel: 'RESUME_DATA',
    message: data
  })
  setTimeout(()=>{
    window.close()
  }, 500)
}

init();