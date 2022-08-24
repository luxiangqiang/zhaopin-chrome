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

// 发布校招职位
async function init(){
  const index = await getJobLocalstory('multipleIndex') as number; // 批量发布的索引
  const count = await getJobLocalstory('count') as number; // 批量发布的索引
  console.log(index, count);
  if(index !== count){
    let publishJobDom = null;
    if($('a[type="button"]').first().text().indexOf('发布社招职位') !== -1){
      publishJobDom = getxPathElement('/html/body/div[2]/div[1]/div[2]/a[2]') as HTMLElement;
    }else{
      publishJobDom = getxPathElement('/html/body/div[3]/div[2]/div[3]/a[2]') as HTMLElement;
    }
    publishJobDom.click();
  }
}

init();
