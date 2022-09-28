function isDuringDate(beginDateStr, endDateStr, curDateStr) {
  var curDate = new Date(curDateStr), beginDate = new Date(beginDateStr), endDate = new Date(endDateStr);
  console.error(beginDate, endDate, curDate);
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
const getxPath = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    return null;
  }
};
function splitArr(ele) {
  if (!ele) {
    return "";
  }
  return $(ele).text();
}
function getEduExperience() {
  let edus = [];
  $.each($("#edu p"), (index, ele) => {
    const time = $(ele).find("span").first().text().split("--");
    edus.push({
      start: time[0],
      end: time[1],
      education: $(ele).find(".edulevel").text(),
      school: $(ele).find(".school").text(),
      speciality: $(ele).find(".major").text()
    });
  });
  return edus;
}
function getProjectsExperience() {
  let projects = [];
  $.each($(".title-name"), (index, ele) => {
    if ($(ele).text() === "\u9879\u76EE\u7ECF\u9A8C") {
      projects.push({
        summary: $(ele).parent().siblings().first().text()
      });
    }
  });
  return projects;
}
function getCertificates() {
  let certificates = [];
  $.each($(".title-name"), (index, ele) => {
    if ($(ele).text() === "\u6240\u83B7\u8BC1\u4E66") {
      certificates.push({
        certificate: $(ele).parent().siblings().first().text()
      });
    }
  });
  return certificates;
}
function getWorkExperience() {
  let works = [];
  $.each($(".title-name"), (index, ele) => {
    if ($(ele).text() === "\u5B9E\u8DF5\u7ECF\u9A8C") {
      works.push({
        summary: $(ele).parent().siblings().first().text()
      });
    }
  });
  return works;
}
function getAdvantage() {
  let summary = "";
  $.each($(".title-name"), (index, ele) => {
    if ($(ele).text() === "\u6280\u80FD\u4E13\u957F") {
      summary = summary + "\u6280\u80FD\u4E13\u957F\uFF1A" + $(ele).parent().siblings().first().text() + "\n";
    }
    if ($(ele).text() === "\u83B7\u5956\u60C5\u51B5") {
      summary = summary + "\u83B7\u5956\u60C5\u51B5\uFF1A" + $(ele).parent().siblings().first().text() + "\n";
    }
    if ($(ele).text() === "\u81EA\u6211\u8BC4\u4EF7") {
      summary = summary + "\u81EA\u6211\u8BC4\u4EF7:" + $(ele).parent().siblings().first().text() + "\n";
    }
  });
  return {
    summary
  };
}
function getResumeData() {
  const subject = $("#target").text();
  const nameEle = getxPath('//*[@id="bacic"]/div/h1');
  const sexEle = getxPath('//*[@id="bacic"]/div/p[1]/span[1]/span');
  const mobileEle = getxPath('//*[@id="bacic"]/div/p[3]/span[1]/span');
  const birthEle = getxPath('//*[@id="bacic"]/div/p[1]/span[3]/span');
  const emailEle = getxPath('//*[@id="bacic"]/div/p[3]/span[2]/span');
  const edus = getEduExperience();
  const projects = getProjectsExperience();
  const certificates = getCertificates();
  const works = getWorkExperience();
  const advantage = getAdvantage();
  return {
    subject,
    form: {
      basic: {
        name: splitArr(nameEle),
        sex: splitArr(sexEle),
        mobile: splitArr(mobileEle),
        email: splitArr(emailEle),
        birth: splitArr(birthEle)
      },
      forwards: [],
      edus,
      works,
      projects,
      advantage,
      certificates
    }
  };
}
const list = [];
async function deepTurnPages() {
  const timeRage = await getLocalstory("timeRange");
  const timeId = setInterval(async () => {
    if ($(".canditateList").length > 0) {
      clearInterval(timeId);
      let flag = false;
      for await (let ele of document.querySelectorAll(".canditateList")) {
        const applyTime = $(ele).find(".applyTime").text();
        if (isDuringDate(timeRage[0], timeRage[1], applyTime)) {
          console.error(applyTime);
          await new Promise((resolve, reject) => {
            $(ele).find(".studentname")[0].click();
            setTimeout(() => {
              const data = getResumeData();
              list.push(data);
              resolve(1);
            }, 500);
          });
        } else {
          flag = true;
          break;
        }
      }
      if (!flag) {
        $.each($(".next"), async (index, ele) => {
          if ($(ele).text() === ">") {
            ele.click();
            await deepTurnPages();
          }
        });
      }
    }
    console.log(list);
    chrome.runtime.sendMessage({
      channel: "RESUME_DATA_ZHAO",
      message: list
    });
  }, 2e3);
}
async function init() {
  deepTurnPages();
}
init();
