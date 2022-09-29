function isDuringDate(beginDateStr, endDateStr, curDateStr) {
  var curDate = new Date(curDateStr), beginDate = new Date(beginDateStr), endDate = new Date(endDateStr);
  if (curDate >= beginDate && curDate <= endDate) {
    return true;
  }
  return false;
}
const getLocalstory = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(type, (result) => {
        console.log(`\u2705 Get ${type} Success\uFF5E`, result[type]);
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  });
};
async function loadResumes() {
  const timeRage = await getLocalstory("timeRange");
  const timeId = setInterval(async () => {
    if ($(".resume-list-item-wrap").length > 0) {
      clearInterval(timeId);
      for await (let ele of document.querySelectorAll(".resume-list-item-wrap")) {
        const timeEle = $(ele).find(".tw-text-size-base-pure").find("div").first();
        const startIndex = timeEle.text().indexOf("\u7533\u8BF7");
        const time = timeEle.text().slice(0, startIndex);
        if (isDuringDate(timeRage[0], timeRage[1], time)) {
          const nameEle = $(ele).find(".name");
          await new Promise((resolve, reject) => {
            $(nameEle).trigger("click");
            const timeId2 = setInterval(() => {
              if ($("span[aria-label='Xiazaijianli']").length > 0) {
                clearInterval(timeId2);
                $("span[aria-label='Xiazaijianli']").trigger("click");
                setTimeout(() => {
                  $("span[aria-label='Dahaoguanbi1']").trigger("click");
                  resolve("ok");
                }, 500);
              }
            }, 1e3);
          });
        }
      }
    }
  }, 1e3);
}
function init() {
  loadResumes();
}
init();
