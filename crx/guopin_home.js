const jobs = [{
  title: "java \u5DE5\u7A0B\u5E08",
  code: "A002",
  salaryFrom: "200",
  salaryTo: "300",
  amount: "100",
  description: "\u5C97\u4F4D\u804C\u8D23\uFF1A\n1.\u6839\u636E\u4EA7\u54C1\u5F00\u53D1\u8FDB\u5EA6\u548C\u4EFB\u52A1\u5206\u914D\uFF0C\u72EC\u7ACB\u5F00\u53D1\u76F8\u5E94\u7684\u754C\u9762\u4E0E\u754C\u9762\u903B\u8F91\uFF1B\n2.\u534F\u52A9\u6D4B\u8BD5\u4EBA\u5458\u5B8C\u6210\u8F6F\u4EF6\u7CFB\u7EDF\u53CA\u6A21\u5757\u7684\u6D4B\u8BD5\uFF1B"
}];
const titleToElementIdMap = {
  "jobs_name": "title",
  "jobs_num": "code",
  "minwage": "salaryFrom",
  "maxwage": "salaryTo",
  "amount": "amount",
  "contents": "description"
};
function enterInput(id, text) {
  $(id).val(text);
}
function getSecondJob(title) {
  let result = null;
  const JSecondJob = $(".modal_body_box > .item:nth-child(2) ul");
  $.each(JSecondJob, (index, item) => {
    const lis = $(item).find("li");
    $.each(lis, (i, li) => {
      if ($(li).text() === title) {
        result = $(li);
      }
    });
  });
  return result;
}
function autoSetSchoolJob() {
  const titles = ["\u8D22\u52A1/\u4EBA\u4E8B/\u884C\u653F/\u540E\u52E4", "\u8D22\u52A1/\u5BA1\u8BA1/\u7A0E\u52A1", "\u8D22\u52A1\u603B\u76D1"];
  const citys = ["\u6CB3\u5317", "\u6CA7\u5DDE"];
  Object.keys(titleToElementIdMap).forEach((id) => {
    enterInput(`#${id}`, jobs[0][titleToElementIdMap[id]]);
  });
  $("#J_showmodal_jobs").click();
  titles.map((title, index) => {
    if (index === 0) {
      $(`label[name='${title}']`).click();
    } else if (index === 1) {
      const targetEle = getSecondJob(title);
      targetEle.click();
    } else {
      $(`label[data-title='${title}']`).click();
    }
  });
  $("div[data-title='\u8BF7\u9009\u62E9\u5DE5\u4F5C\u5730\u533A']").click();
  citys.map((targetCity, index) => {
    if (index === 0) {
      $.each($(".list_nav li"), (index2, province) => {
        if ($(province).text() === targetCity) {
          $(province).click();
        }
      });
    } else {
      $.each($(".J_list_city"), (index2, city) => {
        if ($(city).text() === targetCity) {
          $(city).click();
        }
      });
    }
  });
  $("#J_btnyes_city").click();
}
function init() {
  autoSetSchoolJob();
}
init();
