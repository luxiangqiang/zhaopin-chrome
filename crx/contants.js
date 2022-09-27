const GUOPIN_SCHOOL_RECRUITMENT = "https://campus.iguopin.com/index.php?m=&c=company&a=jobs_add";
const GUOPIN_SOCIAL_RECRUITMENT = "https://www.iguopin.com/index.php?m=&c=company&a=jobs_add";
const JIUYEWANG_URL = "https://job.ncss.cn/corp/jobs/add.html";
const JOB_COLUMNS = [
  {
    label: "\u516C\u53F8",
    prop: "companyName",
    width: 150
  },
  {
    label: "\u804C\u4F4D",
    prop: "title",
    width: 120
  },
  {
    label: "\u7F16\u7801",
    prop: "code",
    width: 80
  },
  {
    label: "\u6027\u8D28",
    prop: "recruitmentTypeName",
    width: 70
  },
  {
    label: "\u5BA2\u6237\u7ECF\u7406",
    prop: "hiringManager",
    width: 90
  },
  {
    label: "\u5F53\u524D\u72B6\u6001",
    prop: "statusName",
    width: 70
  },
  {
    label: "\u9762\u8BD5\u95F4\u72B6\u6001",
    prop: "openedDesc",
    width: 90
  },
  {
    label: "\u804C\u4F4D\u5728\u7EBF\u5929\u6570",
    prop: "onlineDays",
    width: 100
  },
  {
    label: "\u7D2F\u8BA1\u6295\u9012\u4EBA\u6570",
    prop: "totalCandidateCount",
    width: 100
  },
  {
    label: "\u5730\u533A",
    prop: "officeLocation",
    width: 100
  },
  {
    label: "\u53D1\u5E03\u4EBA",
    prop: "name",
    width: 60
  },
  {
    label: "\u53D1\u5E03\u65F6\u95F4",
    prop: "publishedAt",
    width: 140
  }
];
const COLLECT_RESUME_COLUMN = [
  {
    label: "\u59D3\u540D",
    prop: "name",
    width: 100
  },
  {
    label: "\u7535\u8BDD",
    prop: "mobile",
    width: 140
  },
  {
    label: "\u6027\u522B",
    prop: "sex",
    width: 100
  },
  {
    label: "\u5E94\u8058\u5C97\u4F4D",
    prop: "title",
    width: 200
  },
  {
    label: "\u671F\u671B\u5730\u533A",
    prop: "location",
    width: 100
  },
  {
    label: "\u90AE\u7BB1",
    prop: "email",
    width: 120
  }
];
const PLATFORM_MAP = {
  "guopin": "\u56FD\u8058",
  "24365": "24365",
  "zhipin": "Boss\u76F4\u8058",
  "qiancheng": "\u524D\u7A0B\u65E0\u5FE7",
  "shixiseng": "\u5B9E\u4E60\u50E7",
  "nuike": "\u725B\u5BA2\u7F51"
};
export { COLLECT_RESUME_COLUMN as C, GUOPIN_SCHOOL_RECRUITMENT as G, JIUYEWANG_URL as J, PLATFORM_MAP as P, GUOPIN_SOCIAL_RECRUITMENT as a, JOB_COLUMNS as b };
