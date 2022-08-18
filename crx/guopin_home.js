const jobs = [{
  title: "java \u5DE5\u7A0B\u5E08",
  code: "A002",
  salaryFrom: "200",
  salaryTo: "300",
  amount: "100",
  salmonths: "3",
  description: "\u5C97\u4F4D\u804C\u8D23\uFF1A\n1.\u6839\u636E\u4EA7\u54C1\u5F00\u53D1\u8FDB\u5EA6\u548C\u4EFB\u52A1\u5206\u914D\uFF0C\u72EC\u7ACB\u5F00\u53D1\u76F8\u5E94\u7684\u754C\u9762\u4E0E\u754C\u9762\u903B\u8F91\uFF1B\n2.\u534F\u52A9\u6D4B\u8BD5\u4EBA\u5458\u5B8C\u6210\u8F6F\u4EF6\u7CFB\u7EDF\u53CA\u6A21\u5757\u7684\u6D4B\u8BD5\uFF1B"
}];
const titleToElementIdMap = {
  "jobs_name": "title",
  "jobs_num": "code",
  "minwage": "salaryFrom",
  "maxwage": "salaryTo",
  "salmonths": "salmonths",
  "amount": "amount",
  "contents": "description"
};
function enterInput(id, text) {
  $(id).val(text);
}
function getSecondJobDom(title) {
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
  const specialized = ["\u6559\u80B2\u5B66", "\u79D1\u5B66\u6559\u80B2"];
  Object.keys(titleToElementIdMap).forEach((id) => {
    enterInput(`#${id}`, jobs[0][titleToElementIdMap[id]]);
  });
  $(".J_radioitme_jobs:contains('\u5E94\u5C4A\u751F')").click();
  $("#J_showmodal_jobs").click();
  titles.map((title, index) => {
    if (index === 0) {
      $(`label[name='${title}']`).click();
    } else if (index === 1) {
      const targetEle = getSecondJobDom(title);
      if (targetEle) {
        targetEle.click();
      } else {
        throw Error("\u{1F645} \u6CA1\u6709\u83B7\u53D6\u804C\u4F4D DOM \u5143\u7D20");
      }
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
  const dom = $("a[data-code='1163']")[0];
  if (dom) {
    dom.click();
  } else {
    throw Error("\u{1F645} \u6CA1\u6709\u83B7\u53D6\u5B66\u5386 DOM \u5143\u7D20");
  }
  $("#J_showmodal_major").click();
  $(`li[data-title='${specialized[0]}']`).click();
  $(`li[data-title='${specialized[1]}']`).click();
  $("#J_btnyes_major").click();
  setTimeout(() => {
    $("#department").click();
    setTimeout(() => {
      $("#layui-layer-iframe1").contents().find(".layui-tree-txt:contains('\u62A2\u955C')").click();
    }, 4e3);
  }, 1e3);
  $("#starttime").click();
  $("td[lay-ymd='2022-8-18']").click();
  $(".laydate-btns-confirm").click();
  $("#endtime").click();
  $("td[lay-ymd='2022-8-31']").click();
  $(".laydate-btns-confirm").click();
  $("#check_protocal").click();
}
function init() {
  autoSetSchoolJob();
}
init();
