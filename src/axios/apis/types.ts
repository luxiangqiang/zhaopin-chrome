export interface IListRequest {
  pageNo: number;
  pageSize: number;
  name?: string;
  uid?: number;
  strCompanyIds?: string;
  companyId?:number;
  jobIds?: string;
  extras?: string;
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
  company:{
    name: string
  }
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
  recruitmentType:     string;
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
