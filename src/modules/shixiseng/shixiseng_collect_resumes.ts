/**
 * 功能：通过 xPath 获取 dom 元素
 * @param xpath 
 * @returns 
 */
const getxPathNode = (xpath:string) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom: Node | null = result.iterateNext();
  if(dom){
    return dom;
  }else{
    return null;
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
  return year + "-" + month + "-" + day;
}

function isDuringDate(beginDateStr: string, endDateStr: string, curDateStr: string) {
  var curDate = new Date(curDateStr),
      beginDate = new Date(beginDateStr),
      endDate = new Date(endDateStr);
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

async function deepDownload(){
  const timeRage:string[] = await getLocalstory('timeRange') as string[];
  const timeId = setInterval(async () => {
    const resumeList = $('.resume-item');
    if(resumeList.length > 0){
      clearInterval(timeId);

      for await (let [index, ele] of document.querySelectorAll('.resume-item').entries()){
        const alltime = $(ele).find('.intern-name span').text();
        let time = alltime.substring(0, alltime.indexOf('日'));
        time = `2022-` + time.replace(/(月)/g, '-');
        await new Promise((resolve, reject)=>{
          if(alltime.indexOf('今') !== -1 || isDuringDate(timeRage[0], timeRage[1], getNowDate(new Date(time)))) {
            $($(ele).find('.operation-item__name')[1]).trigger('click');
            setTimeout(()=>{
              const confirmEle = getxPathNode('//*[@id="app"]/div/section[1]/section/main/div[1]/div[2]/div/div/div[3]/div/button[2]');
              confirmEle && $(confirmEle).trigger('click');
              resolve('ok');
            }, 1000)
          }else{
            reject('error')
            return;
          }
          if(index === resumeList.length - 1){
            const nextEle = getxPathNode('//*[@id="app"]/div/section[1]/section/main/div[1]/div[1]/div[4]/div[21]/button[2]');
            nextEle && $(nextEle).trigger('click');
            deepDownload()
          }
        });
      }
    }
  }, 1000)
}

async function init(){
  deepDownload();
}

init();