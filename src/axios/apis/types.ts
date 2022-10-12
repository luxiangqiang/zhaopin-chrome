export interface ILoginUserInfo {
  avatar: string;
  birthday: null | string;
  bizTypes: number;
  email: string;
  id: number;
  isMale: null | boolean | number;
  mobile: null | number;
  name: string;
  nickname: string;
  username: string;
}
export interface ILoginRes {
  suId?: number;
  authToken: string;
  nickname: string;
  userInfo: ILoginUserInfo;
}
export interface IListRequest {
  pageNo: number;
  pageSize: number;
  name?: string;
  uid?: number;
  strCompanyIds?: string;
  companyId?: number;
  jobIds?: string;
  extras?: string;
  excludeOurCompany?: number;
}

export interface IListResponse {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  total: number;
  list: IList[];
}

/**
 * 直面vo
 */
export interface IInterview {
  /**
   * 职类列表
   */
  categories: IJob[];
  /**
   * 学历
   */
  educationFrom: number;
  /**
   * 学历类型
   */
  educationType: string;
  /**
   * 是否启用
   */
  enabled: boolean;
  /**
   * 启用时间
   */
  enabledAt: string;
  /**
   * 经验from
   */
  experienceFrom: number;
  /**
   * 经验to
   */
  experienceTo: number;
  /**
   * 年龄from
   */
  fromAge: number;
  /**
   * 年龄to
   */
  toAge: number;
}

export interface IJob {
  code: string;
  name: string;
}

/**
 * 发布人
 */
export interface IPublishedBy {
  /**
   * 头像地址，头像地址
   */
  avatar: string;
  /**
   * 邮箱，邮箱
   */
  email: string;
  /**
   * 用户编号，用户编号
   */
  id: number;
  /**
   * 手机号，手机号
   */
  mobile: string;
  /**
   * 名字，名字
   */
  name: string;
  /**
   * 发布人头衔
   */
  title: string;
}

export interface IList {
  /**
   * 职位类别
   */
  secondCategory: {
    name: string;
  };
  /**
   * 职位编号
   */
  code: string;
  /**
   * 公司
   */
  company: {
    name: string;
    followerName: string;
  };
  directInterview: IInterview;
  /**
   * 最低学历，最低学历
   */
  educationFrom: string;
  /**
   * 面试评估人数，面试评估人数
   */
  evaluatorCount: number;
  /**
   * 经验描述，经验描述
   */
  experienceDesc: string;
  /**
   * 最低工作年限，最低工作年限
   */
  experienceFrom: string;
  /**
   * 最高工作年限，最高工作年限
   */
  experienceTo: string;
  /**
   * 招聘人数，招聘人数
   */
  headcount: number;
  /**
   * 职位编码
   */
  jobCode: string;
  /**
   * 职位id，职位id
   */
  jobId: number;
  /**
   * 职位性质编码，职位性质编码
   */
  jobType: string;
  /**
   * 职位性质名称，职位性质名称
   */
  jobTypeName: string;
  /**
   * 办公地点，办公地点
   */
  officeAddress: string;
  /**
   * 办公地点，办公地点
   */
  officeLocation: string;
  /**
   * 在线天数
   */
  onlineDays: number;
  /**
   * 发布人
   */
  publishedBy: IPublishedBy;
  /**
   * 招聘类型编码
   */
  recruitmentType: string;
  recruitmentTypeName: string;
  /**
   * 薪水描述，薪水描述
   */
  salaryDesc: string;
  /**
   * 最低薪水，最低薪水
   */
  salaryFrom: string;
  /**
   * 薪水数，薪水数
   */
  salaryTimes: number;
  /**
   * 最高薪水，最高薪水
   */
  salaryTo: string;
  /**
   * 薪水类型编码
   */
  salaryType: string;
  /**
   * 薪水类型名称
   */
  salaryTypeName: string;
  /**
   * 状态编码，状态编码
   */
  status: string;
  /**
   * 状态名称，状态名称
   */
  statusName: string;
  /**
   * 职位标题，职位标题
   */
  title: string;
  /**
   * 累计投递人数
   */
  totalCandidateCount: number;
  /**
   * 职位描述
   */
  description: string;
}


/**
* 优势
*/
export interface IAdvantage {
  summary: string;
}

/**
* 基础
*/
export interface IBasic {
  /**
   * 生日
   */
  birth: string;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 求职角色
   */
  jobRole: string;
  /**
   * 求职状态
   */
  jobState: string;
  /**
   * 地区
   */
  location: string;
  /**
   * 电话
   */
  mobile: string;
  /**
   * 姓名
   */
  name: string;
  /**
   * 照片媒体ID
   */
  photoMediaId: number;
  /**
   * 政治面貌
   */
  politicalStatus: string;
  /**
   * 性别
   */
  sex: string;
  /**
   * 行业
   */
  vocation: string;
  /**
   * 参加工作时间
   */
  workStart: string;
}

export interface ICertificates {
  /**
   * 证书名称
   */
  certificate: string;
  /**
   * 日期
   */
  date: string;
}

export interface IEdus {
  /**
   * 学历
   */
  education: string;
  /**
   * 教育ID
   */
  eduId: number | null;
  /**
   * 结束时间
   */
  end: string;
  /**
   * 学校
   */
  school: string;
  /**
   * 专业
   */
  speciality: string;
  /**
   * 开始时间
   */
  start: string;
  /**
   * 详细介绍
   */
  summary: string;
}

export interface IForwards {
  /**
   * 意向ID
   */
  forwardId: number | null;
  /**
   * 工作性质
   */
  jobType: string;
  /**
   * 地区
   */
  location: string;
  /**
   * 薪资 (最小)
   */
  salaryFrom: string;
  /**
   * 薪资 (最大)
   */
  salaryTo: string;
  /**
   * 职位
   */
  title: string;
  /**
   * 行业
   */
  vocation: string;
}

export interface IProjects {
  /**
   * 公司
   */
  company: string;
  /**
   * 结束时间
   */
  end: string;
  /**
   * 项目名称
   */
  projectName: string;
  /**
   * 职责
   */
  responsibilities: string;
  /**
   * 开始时间
   */
  start: string;
  /**
   * 详细描述
   */
  summary: string;
  /**
   * 职位
   */
  title: string;
}

export interface ITrainings {
  /**
   * 证书
   */
  certificate: string;
  /**
   * 课程
   */
  course: string;
  /**
   * 结束时间
   */
  end: string;
  /**
   * 机构
   */
  institution: string;
  /**
   * 开始时间
   */
  start: string;
  /**
   * 详细描述
   */
  summary: string;
  /**
   * 培训名称
   */
  trainingName: string;
}

export interface IWorks {
  /**
   * 公司
   */
  company: string;
  /**
   * 工作时间
   */
  duration: string;
  /**
   * 结束时间
   */
  end: string;
  /**
   * 工作性质
   */
  jobType: string;
  /**
   * 地区
   */
  location: string;
  /**
   * 薪资
   */
  salary: string;
  /**
   * 技能
   */
  skills: string[];
  /**
   * 开始时间
   */
  start: string;
  /**
   * 详细描述
   */
  summary: string;
  /**
   * 岗位
   */
  title: string;
  /**
   * 行业
   */
  vocation: string;
  /**
   * 工作ID
   */
  workId: number | null;
}


/**
* 简历表单
*
* ResumeFormDTO
*/
export interface ResumeFormDTO {
  /**
   * 优势
   */
  advantage: Partial<IAdvantage>;
  /**
   * 基础
   */
  basic: Partial<IBasic>;
  /**
   * 证书
   */
  certificates: Partial<ICertificates>[];
  /**
   * 教育
   */
  edus: Partial<IEdus>[];
  /**
   * 意向
   */
  forwards: Partial<IForwards>[];
  /**
   * 项目
   */
  projects: Partial<IProjects>[];
  /**
   * 培训
   */
  trainings: Partial<ITrainings>[];
  /**
   * 工作
   */
  works: Partial<IWorks>[];
}


export interface IResume {
  /**
   * 简历表单
   */
  form: Partial<ResumeFormDTO>;
  /**
   * 主题
   */
  subject: string;
}

export interface ICollectResume {
  /**
   * 渠道，GUOPIN: 国聘
   * C_24365: 24365
   */
  channel: string;
  /**
   * 简历明细列表
   */
  items: IResume[];
}