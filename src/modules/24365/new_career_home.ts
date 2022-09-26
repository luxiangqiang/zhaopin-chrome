import { IList } from "@/axios/apis/types";
import { IFormat } from "../guopin/types";

/* —————————————————————————————— 数据映射 ———————————————————————————— */

// 【映射】职位类别
const JOB_CATEGORIES_MAP:Record<string, string> = {
  "场务/剧务" : "文体/影视/写作/媒体类",
  "演艺人员/经纪人" : "文体/影视/写作/媒体类",
  "影视制作" : "文体/影视/写作/媒体类",
  "舞美设计" : "文体/影视/写作/媒体类",
  "广告" : "文体/影视/写作/媒体类",
  "IT培训" : "教育/培训类",
  "才艺特长培训" : "教育/培训类",
  "教务管理" : "教育/培训类",
  "考研辅导" : "教育/培训类",
  "留学辅导" : "教育/培训类",
  "特殊教育" : "教育/培训类",
  "语言培训" : "教育/培训类",
  "早教/幼教" : "教育/培训类",
  "职业培训" : "教育/培训类",
  "中小学课程辅导" : "教育/培训类",
  "高等教育" : "教育/培训类",
  "科研/学术研究" : "教育/培训类",
  "保险" : "金融保险类",
  "投融资" : "金融保险类",
  "证券/基金/期货" : "金融保险类",
  "信托/担保/拍卖/典当" : "金融保险类",
  "银行及金融服务" : "金融保险类",
  "农/林/牧/渔" : "生物/制药/化工/环保类",
  "环境科学/环保" : "生物/制药/化工/环保类",
  "能源/矿产/地质" : "生物/制药/化工/环保类",
  "陈列展示设计" : "美术/设计/创意类",
  "动画动效设计" : "美术/设计/创意类",
  "工业设计" : "美术/设计/创意类",
  "视觉/交互设计" : "美术/设计/创意类",
  "产品经理" : "经营管理类",
  "高级管理" : "经营管理类",
  "项目管理" : "经营管理类",
  "策划" : "市场/公关/媒介类",
  "发行" : "市场/公关/媒介类",
  "公关媒介" : "市场/公关/媒介类",
  "会展会务" : "市场/公关/媒介类",
  "市场/品牌推广" : "市场/公关/媒介类",
  "市场调研" : "市场/公关/媒介类",
  "采购/供应链/材料管理" : "贸易/物流/采购/运输类",
  "仓储管理" : "贸易/物流/采购/运输类",
  "交通运输" : "贸易/物流/采购/运输类",
  "配送理货" : "贸易/物流/采购/运输类",
  "物流管理" : "贸易/物流/采购/运输类",
  "关务" : "贸易/物流/采购/运输类",
  "财务" : "财务/审计/统计类",
  "档案管理" : "行政/后勤类",
  "行政" : "行政/后勤类",
  "合规风控/法务/律师" : "法律类",
  "人事" : "人力资源类",
  "文员/助理" : "行政/后勤类",
  "销售顾问" : "销售类",
  "商务拓展" : "销售类",
  "销售管理" : "销售类",
  "测试工程师" : "计算机/网络/技术类",
  "运维支持" : "计算机/网络/技术类",
  "售前售后工程师" : "计算机/网络/技术类",
  "物业/安保" : "建筑/房地产/装饰装修/物业管理类",
  "餐饮服务" : "商业零售类",
  "酒店服务" : "商业零售类",
  "旅游服务" : "商业零售类",
  "健康/美容" : "商业零售类",
  "家政/维修" : "商业零售类",
  "专业服务" : "商业零售类",
  "商务服务" : "商业零售类",
  "运动健身" : "商业零售类",
  "零售百货" : "商业零售类",
  "管培生/储备干部" : "经营管理类",
  "社工" : "经营管理类",
  "政府及非盈利机构从业者" : "经营管理类",
  "电商运营" : "计算机/网络/技术类",
  "新媒体运营" : "计算机/网络/技术类",
  "业务运营" : "计算机/网络/技术类",
  "运营管理" : "计算机/网络/技术类",
  "专业分析" : "计算机/网络/技术类",
  "客户服务" : "计算机/网络/技术类",
  "机械设计/制造" : "工厂生产类",
  "机械设备维修" : "工厂生产类",
  "汽车制造" : "工厂生产类",
  "汽车销售与服务" : "工厂生产类",
  "普工/技工" : "工厂生产类",
  "生产管理" : "工厂生产类",
  "生产质量管理" : "工厂生产类",
  "服装/纺织/皮革" : "工厂生产类",
  "印刷包装" : "工厂生产类",
  "化工" : "工厂生产类",
  "编辑/编校/作家" : "文体/影视/写作/媒体类",
  "翻译" : "翻译类",
  "记者/采编" : "文体/影视/写作/媒体类",
  "生物/医药" : "生物/制药/化工/环保类",
  "医疗器械" : "生物/制药/化工/环保类",
  "护士/医助" : "医疗卫生/美容保健类",
  "医生/药剂师" : "医疗卫生/美容保健类",
  "医务管理" : "医疗卫生/美容保健类",
  "药店" : "医疗卫生/美容保健类",
  "前端开发" : "计算机/网络/技术类",
  "人工智能" : "计算机/网络/技术类",
  "软件研发" : "计算机/网络/技术类",
  "数据工程师" : "计算机/网络/技术类",
  "移动研发" : "计算机/网络/技术类",
  "通信及硬件研发" : "电子/电器/通信技术类",
  "电子/电器/半导体" : "电子/电器/通信技术类",
  "工程安全/工程质检" : "建筑/房地产/装饰装修/物业管理类",
  "工程管理" : "建筑/房地产/装饰装修/物业管理类",
  "工程开发技术人员" : "建筑/房地产/装饰装修/物业管理类",
  "施工员" : "建筑/房地产/装饰装修/物业管理类",
  "房地产规划开发" : "建筑/房地产/装饰装修/物业管理类",
  "房地产交易" : "建筑/房地产/装饰装修/物业管理类",
  "建筑/室内设计" : "建筑/房地产/装饰装修/物业管理类"
}

// Input 字段
const TITLE_TO_ELEMENT_ID_MAP: Record<string, keyof IFormat> = {
  'jobname': 'name', // 职位
  'jobtitle': 'title', // 职位标题
  'jobmajor': 'specialized', // 专业要求
  'jobworkers': 'amount', // 招聘人数
  'jobwrite': 'description', // 职位详情
  'jobdata': 'jobdata', // 发布天数
}

// 【映射】城市
const CITY_MAP:Record<string, string[]> = {
  '芜湖市': ['34','340200'],
  '北京市': ['11','110101'],
  '福州市': ['35','350100'],
  '厦门市': ['35','350200'],
  '广州市': ['44','440100'],
  '韶关市': ['44','440200'],
  '深圳市': ['44','440300'],
  '揭阳市': ['44','445200'],
  '河源市': ['44','441600'],
  '阳江市': ['44','441700'],
  '清远市': ['44','441800'],
  '东莞市': ['44','441900'],
  '中山市': ['44','442000'],
  '潮州市': ['44','445100'],
  '惠州市': ['44','441300'],
  '肇庆市': ['44','441200'],
  '梅州市': ['44','441400'],
  '汕尾市': ['44','441500'],
  '云浮市': ['44','445300'],
  '珠海市': ['44','440400'],
  '汕头市': ['44','440500'],
  '佛山市': ['44','440600'],
  '江门市': ['44','440700'],
  '湛江市': ['44','440800'],
  '茂名市': ['44','440900'],
  '保定市': ['13','130600'],
  '南阳市': ['41','411300'],
  '郑州市': ['41','410100'],
  '武汉市': ['42','420100'],
  '长沙市': ['43','430100'],
  '无锡市': ['32','320200'],
  '抚州市': ['36','361000'],
  '大连市': ['21','210200'],
  '济南市': ['37','370100'],
  '青岛市': ['37','370200'],
  '聊城市': ['37','371500'],
  '西安市': ['61','610100'],
  '上海市': ['31','310101'],
  '成都市': ['51','510100'],
  '杭州市': ['33','330100'],
  '台州市': ['33','331000'],
  '金华市': ['33','330700'],
}

const EDUCATION_MAP:Record<string, string> = {
  '博士': '博士及以上',
  '硕士': '硕士及以上',
  '本科': '本科及以上',
  '专科': '不限',
  '高中': '不限',
  '中专中技':'不限',
  '中专/中技':'不限',
  '初中及以下':'不限',
  '不限':'不限'
} 

async function enterInput(id: string ,text: string){
  $(id).val(text);
}

// 获取 jobs
const getJobs = (type: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.get(type, (result) => {
        console.log('👌 Get Job Success～', result, type)
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  })
}

// number format
function formatNumber(salary: string) {
  const index1 = salary.indexOf('千');
  const index2 = salary.indexOf('万');
  if(index1 !== -1) {
    return salary.substring(0, index1);
  }
  if(index2 !== -1) {
    return Number(salary.substring(0, index2)) * 10000 / 1000;
  }else{
    return Number(salary) / 1000;
  }
}

// 数据格式转换
function formateData(job: IList){
  const city = job.officeLocation.split('-');
  return {
    name:  `${job.title}—${job.company.name}—${job.code}`,// 职位名
    title: `待遇丰厚、弹性工作`, 
    code: job.code, // 职位编号
    salaryFrom: formatNumber(job.salaryFrom), // 最低薪资
    salaryTo: formatNumber(job.salaryTo), // 最高薪资
    amount: 0, // 在招人数
    salmonths: job.salaryTimes, // 薪资月数
    description: job.description, // 职位描述
    category: JOB_CATEGORIES_MAP[job.secondCategory.name], // 职位类别
    city: CITY_MAP[city[0]],
    education: EDUCATION_MAP[job.educationFrom], // 学历
    specialized: '计算机网络技术 软件工程 信息管理与信息系统 电子信息工程 物联网工程 通信工程 数据科学与大数据技术 工商管理 金融学 会计学 市场营销', // 专业
    experienceFrom: job.experienceFrom, // 工作年限
    jobdata: 60,
  }
}

// 自动发布职位
async function autoSetJob(data: IFormat){
  $('#jobmajor').focus();
  // 通过 id 自动填写
  Object.keys(TITLE_TO_ELEMENT_ID_MAP).forEach(id => {
    const value = data[TITLE_TO_ELEMENT_ID_MAP[id]] as Exclude<IFormat[keyof IFormat], string[]>;
    enterInput(`#${ id }`, String(value));
  })

  // 选择学历
  $('#degreeCode').trigger('click');
  $.each($('.writeOrNot option'), (index, el)=>{
    if($(el).text() === data.education){
      $(el).attr('selected','true');
    }
  })


  // 选择职位类别
  // $('.select2-search__field').trigger('click');
  // $.each($('.select2-results__option'), (index, el) => {
  //   if($(el).text() === data.category){
  //     $(el).trigger('click');
  //   }
  // })

  // 薪资选择
  $('input[name="lowMonthPay"]').val(data.salaryFrom);
  $('input[name="highMonthPay"]').val(data.salaryTo);

  // 多网站共享
  $('#autobtn').trigger('click')


  // 工作地点
  // $('#province').val(data.city[0]);
  // setTimeout(()=>{
    // $("#locationCity").trigger("click");
    // $("#locationCity").trigger("change");
    // $("#province").trigger("change");
  // }, 2000)

  // $('#locationCity').val(data.city[1])
}

const singleJobPublish = async () => {
  const job = await getJobs('job') as IList;
  const formate = formateData(job) as any;
  await autoSetJob(formate);
}

async function init(){
  singleJobPublish();
}

// 执行主流程
init()