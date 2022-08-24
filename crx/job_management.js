const getxPathElement = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    throw Error("\u{1F645} xPath: \u83B7\u53D6\u4E0D\u5230\u8BE5 dom \u8282\u70B9");
  }
};
const getJobLocalstory = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(type, (result) => {
        console.log("\u{1F44C} Get Job Success\uFF5E");
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  });
};
async function init() {
  const index = await getJobLocalstory("multipleIndex");
  const count = await getJobLocalstory("count");
  console.log(index, count);
  if (index !== count) {
    let publishJobDom = null;
    if ($('a[type="button"]').first().text().indexOf("\u53D1\u5E03\u793E\u62DB\u804C\u4F4D") !== -1) {
      publishJobDom = getxPathElement("/html/body/div[2]/div[1]/div[2]/a[2]");
    } else {
      publishJobDom = getxPathElement("/html/body/div[3]/div[2]/div[3]/a[2]");
    }
    publishJobDom.click();
  }
}
init();
