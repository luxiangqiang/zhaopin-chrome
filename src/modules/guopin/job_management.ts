
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

// 发布校招职位
const publishJobDom = getxPathElement('/html/body/div[3]/div[2]/div[3]/a[2]') as HTMLElement;
// publishJobDom.click();