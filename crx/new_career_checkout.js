const getxPath = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    return null;
  }
};
async function init() {
  const allSelectEle = getxPath('//*[@id="allbox"]/label');
  const interstingEle = getxPath('//*[@id="next"]');
  let confirmEle = null;
  if (allSelectEle && interstingEle) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        $(allSelectEle).trigger("click");
        $(interstingEle).trigger("click");
        resolve(1);
      }, 500);
    }).then(async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          confirmEle = getxPath('//*[@id="myModalDao"]/div/div/div[3]/button[1]');
          resolve(1);
        }, 200);
      }).then((res) => {
        $(confirmEle).trigger("click");
        window.open("https://job.ncss.cn/corp/candidate.html?communicate");
        window.close();
      });
    });
  }
}
init();
