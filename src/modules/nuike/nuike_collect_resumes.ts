
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

// loadResume
async function loadResumes() {
  const timeRage:string[] = await getLocalstory('timeRange') as string[];
  const timeId = setInterval(async () => {
    if($('.resume-list-item-wrap').length > 0){
      clearInterval(timeId);
      for await (let ele of document.querySelectorAll('.resume-list-item-wrap')){
        const timeEle = $(ele).find('.tw-text-size-base-pure').find('div').first()
        const startIndex = timeEle.text().indexOf('申请');
        const time = timeEle.text().slice(0, startIndex);
        if(isDuringDate(timeRage[0], timeRage[1], time)){
          const nameEle = $(ele).find('.name');
          await new Promise((resolve, reject) => {
            $(nameEle).trigger('click');
            const timeId = setInterval(() => {
              if($("span[aria-label='Xiazaijianli']").length > 0){
                clearInterval(timeId);
                $("span[aria-label='Xiazaijianli']").trigger('click')
                setTimeout(()=>{
                  $("span[aria-label='Dahaoguanbi1']").trigger('click')
                  resolve('ok');
                }, 500)
              }
            }, 1000)
          })
        }
      }
    }
  }, 1000)
}

function init(){
  loadResumes();
}

init();