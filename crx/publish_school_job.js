const JOB_TYPE_MAP = {
  "\u6821\u62DB": "\u5E94\u5C4A\u751F",
  "\u5B9E\u4E60": "\u5B9E\u4E60",
  "\u793E\u62DB": "\u793E\u62DB"
};
const EDUCATION_MAP = {
  "\u535A\u58EB": "\u535A\u58EB\u53CA\u4EE5\u4E0A",
  "\u7855\u58EB": "\u7855\u58EB\u53CA\u4EE5\u4E0A",
  "\u672C\u79D1": "\u672C\u79D1\u53CA\u4EE5\u4E0A",
  "\u4E13\u79D1": "\u4E0D\u9650",
  "\u9AD8\u4E2D": "\u4E0D\u9650",
  "\u4E2D\u4E13\u4E2D\u6280": "\u4E0D\u9650",
  "\u4E2D\u4E13/\u4E2D\u6280": "\u4E0D\u9650",
  "\u521D\u4E2D\u53CA\u4EE5\u4E0B": "\u4E0D\u9650",
  "\u4E0D\u9650": "\u4E0D\u9650"
};
let evt = document.createEvent("HTMLEvents");
evt.initEvent("input", true, true);
const getxPath = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    return null;
  }
};
const getJobLocalstory = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(type, (result) => {
        console.log("\u{1F44C} Get Job Success\uFF5E", result, type);
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  });
};
function formateData(job) {
  return {
    title: `${job.title}\u2014${job.company.name}\u2014${job.code}`,
    code: job.code,
    type: JOB_TYPE_MAP[job.recruitmentTypeName],
    salaryFrom: JOB_TYPE_MAP[job.recruitmentTypeName] === "\u5B9E\u4E60" ? job.salaryFrom : formatNumber(job.salaryFrom),
    salaryTo: JOB_TYPE_MAP[job.recruitmentTypeName] === "\u5B9E\u4E60" ? job.salaryTo : formatNumber(job.salaryTo),
    amount: 3,
    salmonths: job.salaryTimes + "\u4E2A\u6708",
    description: job.description,
    education: EDUCATION_MAP[job.educationFrom],
    specialized: ["\u5176\u4ED6", "\u4E0D\u9650"],
    experienceFrom: job.experienceFrom
  };
}
function formatNumber(salary) {
  const index1 = salary.indexOf("\u5343");
  const index2 = salary.indexOf("\u4E07");
  if (index1 !== -1) {
    return salary.substring(0, index1) + "K";
  }
  if (index2 !== -1) {
    return Number(salary.substring(0, index2)) * 1e4 / 1e3 + "K";
  } else {
    return Number(salary) / 1e3 + "K";
  }
}
async function autoSetSchoolJob(formate) {
  console.log(formate.type);
  switch (formate.type) {
    case "\u5E94\u5C4A\u751F":
      break;
    case "\u5B9E\u4E60": {
      $.each($(".el-radio-group label .tw-mr-5"), (index, ele) => {
        if ($(ele).text().trim() === "\u5B9E\u4E60") {
          $(ele).trigger("click");
        }
      });
      break;
    }
    case "\u793E\u62DB":
      {
        $.each($(".el-radio-group label"), (index, ele) => {
          if ($(ele).text().trim() === "\u793E\u62DB") {
            $(ele).trigger("click");
          }
        });
        setTimeout(() => {
          $.each($(".el-select-dropdown__item"), (index, ele) => {
            if ($(ele).text() === "1\u4E2A\u5DE5\u4F5C\u65E5\u5185") {
              $(ele).trigger("click");
            }
          });
        }, 1e3);
      }
      break;
  }
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 1e3);
  });
  const titleEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[1]/div/div/div[1]/form/div/div/div/input");
  if (titleEle) {
    $(titleEle).val(formate.title);
    titleEle.dispatchEvent(evt);
  }
  const jobSummaryEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[3]/div/div/div/form/div/div/div[1]/textarea");
  const jobRequirementEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[4]/div/div/div/form/div/div/div/textarea");
  if (jobSummaryEle && jobRequirementEle) {
    $(jobSummaryEle).val(formate.description);
    $(jobRequirementEle).val(formate.description);
    jobSummaryEle.dispatchEvent(evt);
    jobRequirementEle.dispatchEvent(evt);
  }
  let keyEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[6]/div/div/form/div/div/div[2]");
  if (formate.type === "\u5E94\u5C4A\u751F") {
    keyEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[5]/div/div/form/div/div/div[2]");
  }
  if (formate.type === "\u5B9E\u4E60") {
    keyEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[5]/div/div/form/div/div/div[2]");
    const mouthEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[8]/div/div/form/div/div/div[2]/div/div/div/div/input");
    $(mouthEle).trigger("click");
    setTimeout(() => {
      $.each($(".el-select-dropdown__item"), (index, ele) => {
        if (["5\u5929", "3\u4E2A\u6708", formate.salaryFrom, formate.salaryTo].includes($(ele).text().trim())) {
          $(ele).trigger("click");
        }
      });
    }, 2e3);
  }
  $(keyEle).trigger("click");
  const timeId = setInterval(() => {
    $.each($(".category-item"), (index, ele) => {
      if (["\u8F6F\u4EF6\u670D\u52A1", "\u751F\u6D3B\u670D\u52A1"].includes($(ele).text().trim())) {
        clearInterval(timeId);
        $(ele).trigger("click");
      }
    });
    $(".footer-save").trigger("click");
  }, 1e3);
  $.each($(".el-select-dropdown__item"), (index, ele) => {
    if ($(ele).text() === formate.education) {
      $(ele).trigger("click");
    }
  });
  const salaryFromEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[9]/div/div/form/div/div/div[2]/div/div/div/div/input");
  salaryFromEle && $(salaryFromEle).trigger("click");
  setTimeout(() => {
    $.each($(".el-select-dropdown__item"), (index, ele) => {
      if ($(ele).text() === formate.salaryFrom) {
        $(ele).trigger("click");
      }
    });
  }, 1e3);
  const salaryToEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[9]/div/div/form/div/div/div[3]/div/div/div/div/input");
  salaryToEle && $(salaryToEle).trigger("click");
  setTimeout(() => {
    $.each($(".el-select-dropdown__item"), (index, ele) => {
      if ($(ele).text() === formate.salaryTo) {
        $(ele).trigger("click");
      }
    });
  }, 1e3);
  const salaryMounthEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[9]/div/div/form/div/div/div[4]/div/div/div/div/input");
  salaryMounthEle && $(salaryMounthEle).trigger("click");
  setTimeout(() => {
    $.each($(".el-select-dropdown__item"), (index, ele) => {
      if ($(ele).text() === String(formate.salmonths)) {
        $(ele).trigger("click");
      }
    });
  }, 1e3);
  const shixiCheckoutEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/section/div[1]/label/span[1]/span");
  shixiCheckoutEle && $(shixiCheckoutEle).trigger("click");
}
async function init() {
  const data = await getJobLocalstory("job");
  const formate = formateData(data);
  console.error(formate);
  const timeId = setInterval(() => {
    const titleEle = getxPath("/html/body/div[1]/div/div/div/div/div[2]/div[2]/div[3]/div/div/div[3]/div[1]/form/div[1]/div/div/div[1]/form/div/div/div/input");
    if (titleEle) {
      clearInterval(timeId);
      autoSetSchoolJob(formate);
    }
  }, 1e3);
}
init();
