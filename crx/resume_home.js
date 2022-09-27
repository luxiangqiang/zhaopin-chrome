const getxPathEle = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    return null;
  }
};
function splitArr(ele, symbol = "\uFF1A") {
  if (!ele) {
    return "";
  }
  return $(ele).text().split(symbol)[1];
}
function formatDate(str) {
  return str.split("-").map((item) => {
    if (+item < 10) {
      return "0" + +item;
    }
    return item;
  }).join("-");
}
function regConvertDate(date) {
  let result = date;
  if (result.charAt(result.length - 1) === "\u6708") {
    result = result.replace(/(月)/ig, "");
    result = result.replace(/(年)/ig, "-");
    return formatDate(result);
  }
  result = result.replace(/(日)/ig, "");
  result = result.replace(/(年)|(月)/ig, "-");
  return formatDate(result);
}
function isJudgeSchoolType() {
  return window.location.host === "campus.iguopin.com";
}
function getExperience(item, typeName) {
  let els = [];
  if ($(item).text() === typeName) {
    for (let el = item; item; el = el == null ? void 0 : el.nextElementSibling) {
      if ($(el).attr("class") === "item") {
        els.push(el);
      }
      if ((el == null ? void 0 : el.tagName) === "H2" && $(el).text() !== typeName || !(el == null ? void 0 : el.tagName) || (el == null ? void 0 : el.tagName) === "footer") {
        break;
      }
    }
  }
  return els;
}
function getEduExperience() {
  let edus = [];
  $.each($("h2"), (index, item) => {
    const eduEles = getExperience(item, "\u6559\u80B2\u7ECF\u5386");
    if (eduEles.length !== 0) {
      edus = eduEles.map((el) => {
        const time = $(el).find(".td1").prop("firstChild").nodeValue;
        const [start, end] = time.split("-");
        const other = $(el).find(".td2").text();
        const [, education, school, speciality] = other.split("|");
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          education,
          school,
          speciality
        };
      });
    }
  });
  return edus;
}
function getWorkExperience() {
  let works = [];
  $.each($("h2"), (index, item) => {
    const workEles = getExperience(item, "\u5DE5\u4F5C\u7ECF\u5386");
    if (workEles.length !== 0) {
      works = workEles.map((el) => {
        const time = $(el).find(".td1").prop("firstChild").nodeValue;
        const [start, end] = time.split("-");
        const other = $(el).find(".td2").text();
        const [title, company] = other.split("|");
        const summaryEle = $(el).find(".td3").find(".txtr")[0];
        const summary = $(summaryEle).text();
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          title,
          company,
          summary
        };
      });
    }
  });
  return works;
}
function getTrainingsExperience() {
  let tranings = [];
  $.each($("h2"), (index, item) => {
    const tranEles = getExperience(item, "\u57F9\u8BAD\u7ECF\u5386");
    if (tranEles.length !== 0) {
      tranings = tranEles.map((el) => {
        const time = $(el).find(".td1").prop("firstChild").nodeValue;
        const [start, end] = time.split("-");
        const other = $(el).find(".td2").text();
        const [trainingName, institution] = other.split("|");
        const summary = $(el).find(".td3 .txtr").text();
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          trainingName,
          institution,
          summary
        };
      });
    }
  });
  return tranings;
}
function getProjectsExperience() {
  let projects = [];
  $.each($("h2"), (index, item) => {
    const projectsEles = getExperience(item, "\u9879\u76EE\u7ECF\u5386");
    if (projectsEles.length !== 0) {
      projects = projectsEles.map((el) => {
        const time = $(el).find(".td1").prop("firstChild").nodeValue;
        const [start, end] = time.split("-");
        const other = $(el).find(".td2").text();
        const [title, projectName, company] = other.split("|");
        const summaryEle = $(el).find(".txtr")[0];
        const summary = $(summaryEle).text();
        const responsibilitiesEle = $(el).find(".txtr")[1];
        const responsibilities = $(responsibilitiesEle).text();
        return {
          start: regConvertDate(start),
          end: regConvertDate(end),
          projectName,
          company,
          title,
          responsibilities,
          summary
        };
      });
    }
  });
  return projects;
}
function getCertificates() {
  let certificates = [];
  $.each($("h2"), (index, item) => {
    const certificatesEles = getExperience(item, "\u8BC1\u4E66");
    if (certificatesEles.length !== 0) {
      certificates = certificatesEles.map((el) => {
        const date = $(el).find(".td1").text();
        const other = $(el).find(".td2").text();
        const [certificate] = other.split("|");
        return {
          date: regConvertDate(date),
          certificate
        };
      });
    }
  });
  return certificates;
}
function getResumeData() {
  const subject = getxPathEle("/html/body/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]");
  const nameEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[1]");
  const sexEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[2]");
  let mobileEle = null;
  let emailEle = null;
  let workStartEle = null;
  let locationEle = null;
  let titleEle = null;
  let vocationEle = null;
  let salaryFromEle = null;
  let forwardLocationEle = null;
  if (isJudgeSchoolType()) {
    mobileEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[6]");
    emailEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[7]");
    locationEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[13]");
    titleEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[4]");
    vocationEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[3]");
    salaryFromEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[6]");
    forwardLocationEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[5]");
  } else {
    mobileEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[4]");
    emailEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[6]");
    workStartEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[13]");
    locationEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[22]");
    titleEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[6]");
    vocationEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[5]");
    salaryFromEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[8]");
    forwardLocationEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[7]");
  }
  const birthEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[2]/div[3]");
  const jobTypeEle = getxPathEle("/html/body/div[1]/div[1]/div[3]/div[4]/div[2]");
  const edus = getEduExperience();
  const works = getWorkExperience();
  const projects = getProjectsExperience();
  const trainings = getTrainingsExperience();
  const certificates = getCertificates();
  return {
    subject: splitArr(subject),
    form: {
      basic: {
        name: splitArr(nameEle),
        sex: splitArr(sexEle),
        mobile: splitArr(mobileEle),
        email: splitArr(emailEle),
        birth: splitArr(birthEle),
        workStart: splitArr(workStartEle),
        location: splitArr(locationEle)
      },
      forwards: [{
        vocation: splitArr(vocationEle),
        title: splitArr(titleEle),
        location: splitArr(forwardLocationEle),
        salaryFrom: splitArr(salaryFromEle),
        jobType: splitArr(jobTypeEle)
      }],
      edus,
      works,
      projects,
      trainings,
      certificates
    }
  };
}
function init() {
  const data = getResumeData();
  chrome.runtime.sendMessage({
    channel: "RESUME_DATA",
    message: [data]
  });
  setTimeout(() => {
    window.close();
  }, 500);
}
init();
