// 国聘
export const GUOPIN_SCHOOL_RECRUITMENT = 'https://campus.iguopin.com/index.php?m=&c=company&a=jobs_add'; 
export const GUOPIN_SOCIAL_RECRUITMENT = 'https://www.iguopin.com/index.php?m=&c=company&a=jobs_add';
// 24365
export const JIUYEWANG_URL = "https://job.ncss.cn/corp/jobs/add.html";
// 牛客
export const NUIKE_URL = "https://nowpick.nowcoder.com/w/hrconsole/job-publish";

// 职位列表
export const JOB_COLUMNS = [
  {
    label: '公司',
    prop: 'companyName',
    width: 150,
  },
  {
    label: '职位',
    prop: 'title',
    width: 120,
  },
  {
    label: '编码',
    prop: 'code',
    width: 80,
  },
  {
    label: '性质',
    prop: 'recruitmentTypeName',
    width: 70,
  },
  {
    label: '客户经理',
    prop: 'hiringManager',
    width: 90,
  },
  {
    label: '当前状态',
    prop: 'statusName',
    width: 70,
  },
  {
    label: '面试间状态',
    prop: 'openedDesc',
    width: 90,
  },
  {
    label: '职位在线天数',
    prop: 'onlineDays',
    width: 100,
  },
  {
    label: '累计投递人数',
    prop: 'totalCandidateCount',
    width: 100,
  },
  {
    label: '地区',
    prop: 'officeLocation',
    width: 100,
  },
  {
    label: '发布人',
    prop: 'name',
    width: 60,
  },
  {
    label: '发布时间',
    prop: 'publishedAt',
    width: 140,
  },
];

// 收集简历
export const COLLECT_RESUME_COLUMN = [
  {
    label: '姓名',
    prop: 'name',
    width: 100,
  },
  {
    label: '电话',
    prop: 'mobile',
    width: 140,
  },
  {
    label: '性别',
    prop: 'sex',
    width: 100,
  },
  {
    label: '应聘岗位',
    prop: 'title',
    width: 200,
  },
  {
    label: '期望地区',
    prop: 'location',
    width: 100,
  },
  {
    label: '邮箱',
    prop: 'email',
    width: 120,
  }
]

export const PLATFORM_MAP:Record<string, string> = {
  "guopin":"国聘",
  "24365":"24365",
  "zhipin":"Boss直聘",
  "qiancheng": "前程无忧",
  "shixiseng": "实习僧",
  "nuike" : "牛客网"
}