/**
 * 功能：通过 xPath 获取 dom 元素
 * @param xpath 
 * @returns 
 */
 const getxPathElement = (xpath:string) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom: Node | null = result.iterateNext();
  if(dom){
    return dom;
  }else{
    throw Error('🙅 xPath: 获取不到该 dom 节点')
  }
}

/**
 * 功能：获取缓存数据
 * @param type 
 * @returns 
 */
const getJobLocalstory  = (type: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.get(type, (result) => {
        console.log('👌 Get Job Success～')
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  })
}

const zeroFill = (i : number) => {
  if (i >= 0 && i <= 9) {
    return "0" + i;
  } else {
    return i;
  }
}
/**
 * 功能：格式化时间
 * @param date 
 * @returns 
 */
const getNowDate = (date: Date) => { 
  let year = date.getFullYear() // 年
  let month = zeroFill(date.getMonth() + 1); // 月
  let day = zeroFill(date.getDate()); // 日
  let hour = zeroFill(date.getHours()); //时
  let minute = zeroFill(date.getMinutes()); //分
  return year + "-" + month + "-" + day + " " +`${hour}:${minute}`;
}

// 发布校招职位
async function init(){
  const index = await getJobLocalstory('multipleIndex') as number; // 批量发布的索引
  const count = await getJobLocalstory('count') as number; // 批量发布的职位数量
  console.log(index, count);
  if(index < count){
    let publishJobDom = null;
    if($('a[type="button"]').first().text().indexOf('发布社招职位') !== -1){
      publishJobDom = getxPathElement('/html/body/div[2]/div[1]/div[2]/a[2]') as HTMLElement;
    }else{
      publishJobDom = getxPathElement('/html/body/div[3]/div[2]/div[3]/a[2]') as HTMLElement;
    }
    publishJobDom.click();
  }
  if(index === count){
    chrome.runtime.sendMessage({
      result:'导入成功!',
      reason: null,
      count: count,
      index: index + 1,
      time: getNowDate(new Date()),
    }, res => {
    })
  }
}

init();
