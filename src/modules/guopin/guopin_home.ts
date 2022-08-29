import { IList } from '@/axios/apis/types';
import { IFormat } from './types';

/* —————————————————————————————— 数据映射 ———————————————————————————— */

// 【映射】职位类别
const JOB_CATEGORIES_MAP:Record<string, string[]> = {
  '场务/剧务': ['广告/传媒/设计', '影视/编导', '其他影视/编导职位 '],
  '演艺人员/经纪人': ['广告/传媒/设计', '影视/编导', '经纪人/星探'],
  '影视制作': ['广告/传媒/设计', '影视/编导', '影视策划/制作人员'],
  '舞美设计': ['广告/传媒/设计', '影视/编导', '艺术指导/舞美设计'],
  '广告': ['广告/传媒/设计', '广告/会展', '其他广告/会展职位'],
  'IT培训': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '才艺特长培训': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '教务管理': ['法律/教育培训/管理咨询/翻译', '教育培训', '教学/教务管理人员'],
  '考研辅导': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '留学辅导': ['法律/教育培训/管理咨询/翻译', '教育培训', '留学顾问'],
  '特殊教育': ['法律/教育培训/管理咨询/翻译', '教育培训', '特教(特殊教育)'],
  '语言培训': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '早教/幼教': ['法律/教育培训/管理咨询/翻译', '教育培训', '幼教'],
  '职业培训': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '中小学课程辅导': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '高等教育': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '科研/学术研究': ['法律/教育培训/管理咨询/翻译', '教育培训', '其他教育培训职位'],
  '保险': ['金融', '保险', '其他保险职位'],
  '投融资': ['金融', '基金/证券/期货/投资', '其他基金/证券/期货/投资'],
  '证券/基金/期货': ['金融', '基金/证券/期货/投资', '其他基金/证券/期货/投资'],
  '信托/担保/拍卖/典当': ['金融', '信托/担保/拍卖/典当', '其他信托/担保/拍卖/典当职位'],
  '银行及金融服务': ['金融', '银行', '其他银行职位'],
  '农/林/牧/渔': ['能源/环保/农业/科研', '农/林/牧/渔业', '其他农/林/牧/渔业职位'],
  '环境科学/环保': ['能源/环保/农业/科研', '环境科学', '其他环境科学职位'],
  '能源/矿产/地质': ['能源/环保/农业/科研', '能源/矿产/地质勘查', '其他能源/矿产/地质勘查职位'],
  '陈列展示设计': ['广告/传媒/设计', '美术/设计', '店面/展览/展示/陈列设计 '],
  '动画动效设计': ['广告/传媒/设计', '美术/设计', '多媒体/动画设计'],
  '工业设计': ['广告/传媒/设计', '美术/设计', '工业设计'],
  '视觉/交互设计': ['广告/传媒/设计', '美术/设计', '工业设计'],
  '产品经理': ['计算机/互联网/通信', '互联网产品/运营管理', '其他产品/运营岗位'],
  '高级管理': ['高级管理', '高级管理岗位', '其他高级管理'],
  '项目管理': ['市场/销售/媒介/公关/项目管理', '项目管理', '其他项目管理职位'],
  '策划': ['市场/销售/媒介/公关/项目管理', '市场/企划', '其他市场/企划职位'],
  '发行': ['市场/销售/媒介/公关/项目管理', '市场/企划', '其他市场/企划职位'],
  '公关媒介': ['市场/销售/媒介/公关/项目管理', '公关', '公关专员/助理 '],
  '会展会务': ['市场/销售/媒介/公关/项目管理', '市场/企划', '其他市场/企划职位'],
  '市场/品牌推广': ['市场/销售/媒介/公关/项目管理', '公关', '公关专员/助理'],
  '市场调研': ['市场/销售/媒介/公关/项目管理', '市场/企划', '市场调研与分析'],
  '采购/供应链/材料管理': ['贸易/物流/运输/供应链', '贸易/采购', '其他贸易/采购职位'],
  '仓储管理': ['贸易/物流/运输/供应链', '物流/仓储', '物流/仓储项目管理'],
  '交通运输': ['贸易/物流/运输/供应链', '交通/运输', '其他交通/运输职位'],
  '配送理货': ['贸易/物流/运输/供应链', '物流/仓储', '其他物流/仓储职位'],
  '物流管理': ['贸易/物流/运输/供应链', '物流/仓储', '其他物流/仓储职位'],
  '关务': ['贸易/物流/运输/供应链', '物流/仓储', '其他物流/仓储职位'],
  '财务': ['财务/人事/行政/后勤', '财务/审计/税务', '其他财务/审计/税务职位'],
  '档案管理': ['财务/人事/行政/后勤', '行政/后勤/文秘', '其他行政/后勤/文秘职位'],
  '行政': ['财务/人事/行政/后勤', '行政/后勤/文秘', '其他行政/后勤/文秘职位'],
  '合规风控/法务/律师': ['法律/教育培训/管理咨询/翻译', '法律', '其他法律职位'],
  '人事': ['财务/人事/行政/后勤', '人力资源', '其他人力资源'],
  '文员/助理': ['财务/人事/行政/后勤', '行政/后勤/文秘', '其他行政/后勤/文秘职位'],
  '销售顾问': ['市场/销售/媒介/公关/项目管理', '销售', '销售经理'],
  '商务拓展': ['市场/销售/媒介/公关/项目管理', '销售', '商务经理/主管'],
  '销售管理': ['市场/销售/媒介/公关/项目管理', '销售', '销售经理'],
  '测试工程师': ['计算机/互联网/通信', '测试/运维/技术支持', '测试工程师'],
  '运维支持': ['计算机/互联网/通信', '测试/运维/技术支持', '其他测试/运维/技术支持职位'],
  '售前售后工程师': ['计算机/互联网/通信', '测试/运维/技术支持', '其他测试/运维/技术支持职位'],
  '物业/安保': ['生活服务/医疗护理', '居民/社区/家政', '其他居民/社区/家政职位'],
  '餐饮服务': ['生活服务/医疗护理', '酒店/娱乐管理/服务', '其他酒店/娱乐管理/服务职位'],
  '酒店服务': ['生活服务/医疗护理', '酒店/娱乐管理/服务', '其他酒店/娱乐管理/服务职位'],
  '旅游服务': ['生活服务/医疗护理', '旅游/出入境服务', '其他旅游/出入境服务职位 '],
  '健康/美容': ['生活服务/医疗护理', '保健/美容/美发/健身', '其他保健/美容/美发/健身职位'],
  '家政/维修': ['生活服务/医疗护理', '居民/社区/家政', '其他居民/社区/家政职位'],
  '专业服务': ['生活服务/医疗护理', '客服/售前/售后技术支持', '其他客服/售前/售后技术支持职位'],
  '商务服务': ['生活服务/医疗护理', '酒店/娱乐管理/服务', '其他酒店/娱乐管理/服务职位'],
  '运动健身': ['生活服务/医疗护理', '保健/美容/美发/健身', '其他保健/美容/美发/健身职位'],
  '零售百货': ['生活服务/医疗护理', '百货/购物中心/连锁/商超', '其他百货/购物中心/连锁/商超职位'],
  '管培生/储备干部': ['公务员/公益事业/科研/其他', '其他', '储备干部'],
  '社工': ['公务员/公益事业/科研/其他', '公务员/公益事业/科研', '其他公务员/公益事业/科研'],
  '政府及非盈利机构从业者': ['公务员/公益事业/科研/其他', '公务员/公益事业/科研', '其他公务员/公益事业/科研'],
  '电商运营': ['计算机/互联网/通信', '互联网产品/运营管理', '电商运营'],
  '新媒体运营': ['计算机/互联网/通信', '互联网产品/运营管理', '新媒体运营'],
  '业务运营': ['计算机/互联网/通信', '互联网产品/运营管理', '用户运营'],
  '运营管理': ['计算机/互联网/通信', '互联网产品/运营管理', '网络运营管理'],
  '专业分析': ['计算机/互联网/通信', '互联网产品/运营管理', '其他产品/运营岗位'],
  '客户服务': ['计算机/互联网/通信', '互联网产品/运营管理', '客服管理'],
  '机械设计/制造': ['生产/技术/安全/质量', '机械设计/制造/维修', '机械维修/保养'],
  '机械设备维修': ['生产/技术/安全/质量', '机械设计/制造/维修', '机械维修/保养'],
  '汽车制造': ['生产/技术/安全/质量', '汽车制造', '其他汽车制造职位'],
  '汽车销售与服务': ['生产/技术/安全/质量', '汽车销售/服务', '其他汽车销售/服务职位'],
  '普工/技工': ['生产/技术/安全/质量', '技工/普工', '其他普工/操作工'],
  '生产管理': ['生产/技术/安全/质量', '生产管理/营运', '生产运营管理'],
  '生产质量管理': ['生产/技术/安全/质量', '质量管理/安全防护', '其他质量管理/安全防护职位'],
  '服装/纺织/皮革': ['生产/技术/安全/质量', '服装/纺织/皮革', '其他服装/纺织/皮革职位'],
  '印刷包装': ['生产/技术/安全/质量', '化工', '造纸研发'],
  '化工': ['生产/技术/安全/质量', '化工', '其他化工职位'],
  '编辑/编校/作家': ['广告/传媒/设计', '编辑/出版/印刷', '编辑/撰稿 '],
  '翻译': ['法律/教育培训/管理咨询/翻译', '翻译', '其他语种翻译'],
  '记者/采编': ['广告/传媒/设计', '编辑/出版/印刷', '记者/采编'],
  '生物/医药': ['生活服务/医疗护理', '医院/医疗/护理', '其他医疗护理职位'],
  '医疗器械': ['生活服务/医疗护理', '医院/医疗/护理', '其他医疗护理职位'],
  '护士/医助': ['生活服务/医疗护理', '医院/医疗/护理', '其他医疗护理职位'],
  '医生/药剂师': ['生活服务/医疗护理', '医院/医疗/护理', '其他医疗护理职位'],
  '医务管理': ['生活服务/医疗护理', '医院/医疗/护理', '其他医疗护理职位'],
  '药店': ['生活服务/医疗护理', '医院/医疗/护理', '其他医疗护理职位'],
  '前端开发': ['计算机/互联网/通信', '前端/移动端', 'WEB前端开发'],
  '人工智能': ['计算机/互联网/通信', '数据/人工智能', '机器学习'],
  '软件研发': ['计算机/互联网/通信', '互联网开发/系统集成', '软件研发工程师'],
  '数据工程师': ['计算机/互联网/通信', '数据/人工智能', '数据分析师'],
  '移动研发': ['计算机/互联网/通信', '前端/移动端', '移动开发工程师'],
  '通信及硬件研发': ['计算机/互联网/通信', '电信/通信技术开发及应用', '其他电信/通信技术职位'],
  '电子/电器/半导体': ['计算机/互联网/通信', '互联网开发/系统集成', '其他互联网开发/系统集成职位'],
  '工程安全/工程质检': ['房产/建筑/物业管理', '土木/建筑/装修/市政工程', '工程监理/质量管理'],
  '工程管理': ['房产/建筑/物业管理', '土木/建筑/装修/市政工程', '工程总监'],
  '工程开发技术人员': ['房产/建筑/物业管理', '土木/建筑/装修/市政工程', '建筑设备工程师'],
  '施工员': ['房产/建筑/物业管理', '土木/建筑/装修/市政工程', '施工员'],
  '房地产规划开发': ['房产/建筑/物业管理', '房地产开发/交易/经济', '房地产项目策划经理/主管'],
  '房地产交易': ['房产/建筑/物业管理', '房地产开发/交易/经济', '房地产中介/交易'],
  '建筑/室内设计': ['房产/建筑/物业管理', '土木/建筑/装修/市政工程', '室内装潢设计'],
}

// 【映射】城市
const CITY_MAP:Record<string, string[]> = {
  '芜湖市': ['安徽','芜湖'],
  '北京市': ['北京','北京市'],
  '福州市': ['福建','福州'],
  '厦门市': ['福建','厦门'],
  '广州市': ['广东','广州'],
  '韶关市': ['广东','韶关'],
  '深圳市': ['广东','深圳'],
  '揭阳市': ['广东','揭阳'],
  '河源市': ['广东','河源'],
  '阳江市': ['广东','阳江'],
  '清远市': ['广东','清远'],
  '东莞市': ['广东','东莞'],
  '中山市': ['广东','中山'],
  '潮州市': ['广东','潮州'],
  '惠州市': ['广东','惠州'],
  '肇庆市': ['广东','肇庆'],
  '梅州市': ['广东','梅州'],
  '汕尾市': ['广东','汕尾'],
  '云浮市': ['广东','云浮'],
  '珠海市': ['广东','珠海'],
  '汕头市': ['广东','汕头'],
  '佛山市': ['广东','佛山'],
  '江门市': ['广东','江门'],
  '湛江市': ['广东','湛江'],
  '茂名市': ['广东','茂名'],
  '保定市': ['河北','保定'],
  '南阳市': ['河南','南阳'],
  '郑州市': ['河南','郑州'],
  '武汉市': ['湖北','武汉'],
  '长沙市': ['湖南','长沙'],
  '无锡市': ['江苏','无锡'],
  '抚州市': ['江西','抚州'],
  '大连市': ['辽宁','大连'],
  '济南市': ['山东','济南'],
  '青岛市': ['山东','青岛'],
  '聊城市': ['山东','聊城'],
  '西安市': ['陕西','西安'],
  '上海市': ['上海','上海市'],
  '成都市': ['四川','成都'],
  '杭州市': ['浙江','杭州'],
  '台州市': ['浙江','台州'],
  '金华市': ['浙江','金华'],
}

// 【映射】Element ID 和抢镜后端数据
const TITLE_TO_ELEMENT_ID_MAP: Record<string, keyof IFormat> = {
  'jobs_name': 'title', // 职位
  'jobs_num': 'code', // 编号（校招）
  'jobs_code':'code', // 编号（社招）
  'minwage':'salaryFrom', // 最低薪资
  'minwage_inter':'salaryFrom', // 最低薪资(实习)
  'maxwage':'salaryTo',// 最高薪资
  'maxwage_inter':'salaryTo',// 最高薪资（实习）
  'salmonths': 'salmonths', // 年薪
  'amount':'amount', // 在招人数
  'contents':'description', // 职位描述（校招）
  'contentsdesc':'description', // 职位描述(社招)
}

// 【映射】学历字段映射
const EDUCATION_MAP:Record<string, string> = {
  '博士': '博士研究生',
  '硕士': '硕士研究生',
  '本科': '大学本科',
  '专科': '大学专科',
  '高中': '中专',
  '中专中技':'中专',
  '中专/中技':'中专',
  '初中及以下':'其他',
  '不限':'无学历要求'
}

// 【映射】职位性质
const JOB_TYPE_MAP:Record<string, string> = {
  '校招': '应届生',
  '实习': '实习',
  '社招': '社招'
}

// 工作经验映射
const WORK_EXPERIENCE:Record<string, string> = {
  "经验不限":'不限',
  "无经验要求":'无经验',
}

/* —————————————————————————————— 公共方法 ———————————————————————————— */

// 获取元素错误处理
async function $$(select: string, errorText: string) {
  const JDom = $(select);
  if(JDom.length > 0){
    return JDom
  }else{
    // const index = await getJobLocalstory('multipleIndex') as unknown as number; // 批量发布的索引
    // const count = await getJobLocalstory('count') as unknown as number; // 批量发布的职位数量
    // chrome.runtime.sendMessage({
    //   result:'程序报错',
    //   reason: `填写【${ errorText }】失败！`,
    //   count: count,
    //   index: index + 1,
    //   time: getNowDate(new Date()),
    // }, res => {
    // })
    return null;
  }
}

// 获取 job 
const getJobLocalstory  = (type: string) => {
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

// input 输入文字
async function enterInput(id: string ,text: string){
  const jdom = await $$(id, text);
  jdom!.val(text);
}

// 获取【职位类别】二级 dom
function getSecondJobDom(title: string) : HTMLElement | null {
  let result = null;
  const JSecondJob = $('.modal_body_box > .item:nth-child(2) ul');
  $.each(JSecondJob, (index, item) =>{
    const lis = $(item).find('li');
    $.each(lis, (i, li) => {
      if($(li).text() === title){
        result = $(li)
      }
    })
  })
  return result;
}

// 设置【每周工作天数】
function setWeekCount(){
  $.each($('.J_listitme'), (index, el) => {
    if($(el).text() === '5天'){
      el.click()
    }
  })
}

// 千/万转数字
function formatNumber(value: string){
  if(value.indexOf('千') !== -1){
    return parseFloat(value) * 1000;
  }else if(value.indexOf('万') !== -1){
    return parseFloat(value) * 10000;
  }else{
    return value;
  }
}

// 处理数据格式
function formateData(job: IList){
  const city = job.officeLocation.split('-')[0];
  return {
    title: `${job.title}—${job.company.name}—${job.code}`, // 职位名
    code: job.code, // 职位编号
    type: JOB_TYPE_MAP[job.recruitmentTypeName], // 招聘类型
    salaryFrom: formatNumber(job.salaryFrom), // 最低薪资
    salaryTo: formatNumber(job.salaryTo), // 最高薪资
    amount: 3, // 在招人数
    salmonths: job.salaryTimes, // 薪资月数
    description: job.description, // 职位描述
    category: JOB_CATEGORIES_MAP[job.secondCategory.name], // 职位类别
    city: Object.keys(CITY_MAP).includes(city) ? CITY_MAP[city] : ['其他地区', '全国'], // 工作地区
    education: EDUCATION_MAP[job.educationFrom], // 学历
    specialized: ['其他', '不限'], // 专业
    experienceFrom: job.experienceFrom, // 工作年限
  }
}

// 清除缓存数据
const clearJobLocalstory  = (type: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.remove(type,()=>{
        console.log('🧹 Clear Job Success～');
      })
      resolve(1);
    } catch (error) {
      reject();
    }
  })
}

// 保存数据
const saveJobLocalStory = (key: string, value: number | string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.set({ [key]:  value}, function () {
        console.log('😄 [guopin_home.js]: Save Data Success～');
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  })
}

// 设置工作经验
const setWorkExperience = (experienceFrom: string) => {
  $.each($('.J_listitme'), (index, el) => {
    if(experienceFrom.indexOf('年') !== -1){
      if(experienceFrom === '1年' && $(el).text() === "1年以上"){
        el.click()
      }else if($(el).text().indexOf(experienceFrom) !== -1){
        el.click()
      }
    }else{
      if($(el).text() === WORK_EXPERIENCE[experienceFrom]){
        el.click()
      }
    }
  })
}

// 设置专业要求
const setSpecialized = (data: IFormat)=>{
  $('#J_showmodal_major').trigger('click');
  $(`li[data-title='${ data.specialized[0] }']`).trigger('click');
  $(`li[data-code="123"]`).trigger('click');
  $('#J_btnyes_major').trigger('click');
}

// 时间格式设置
function getNowDate(date: Date) { 
  let year = date.getFullYear() // 年
  let month = String(date.getMonth() + 1); // 月
  let day = String(date.getDate()); // 日
  // 给一位数的数据前面加 “0”
  if (Number(month) >= 1 && Number(month) <= 9) {
    month = "0" + month;
  }
  if (Number(day) >= 0 && Number(day) <= 9) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day + " " + '00:00';
}

// 自动设置校招职位
async function autoSetSchoolJob(data: IFormat){
  // => 1、ID 元素自动填写
  Object.keys(TITLE_TO_ELEMENT_ID_MAP).forEach(id => {
    const value = data[TITLE_TO_ELEMENT_ID_MAP[id]] as Exclude<IFormat[keyof IFormat], string[]>;
    enterInput(`#${ id }`, String(value));
  })

  // => 2、职位性质
  $(`.J_radioitme_jobs:contains(${data.type})`).trigger('click');

  switch(data.type){
    case '应届生':
    case '实习':{
      setWeekCount(); // 设置工作周期
      setSpecialized(data); // 设置专业要求
    }
    break;
    case '社招':
      setWorkExperience(data.experienceFrom); // 设置工作经验
    break;
  }

  // => 3、设置职位（弹窗）
  $('#J_showmodal_jobs').trigger('click');
  data.category.map((title, index)=>{
    if(index === 0){
      $(`label[name='${ title }']`).trigger('click');
    }else if(index === 1){
      const targetEle = getSecondJobDom(title);
      if(targetEle){
        targetEle.click();
      }else{
        throw Error('🙅 没有获取职位 DOM 元素')
      }
    }else{
      $(`label[data-title='${ title }']`).trigger('click');
    }
  })

  // => 4、设置工作地区（弹窗）
  $("div[data-title='请选择工作地区']").trigger('click');
  data.city.map((targetCity, index) => {
    if(index === 0){
      $.each($('.list_nav li'),(index, province)=>{
        if($(province).text() === targetCity){
          $(province).trigger('click');
        }
      })
    }else{
      $.each($('.J_list_city'), (index, city) => {
        if($(city).text() === targetCity){
          $(city).trigger('click');
        }
      })
    }
  })
  $('#J_btnyes_city').trigger('click');

  // => 5、设置学历要求（下拉框）
  $.each($('.J_listitme'), (index, el) => {
    if($(el).text() === data.education){
      el.click()
    }
  })

  // => 7、报名时间
  await new Promise((resolve, reject)=>{
    setTimeout(() => {
      if(['社招'].includes(data.type)){
        $('#start_date').val(getNowDate(new Date()))
        var now = new Date()
        var seconds = 60*60*24*30*1000;
        var timestamp = now.getTime();
        var newDate = timestamp+seconds;
        $('#end_date').val(getNowDate(new Date(newDate)))
      }else{
        $('#starttime').trigger('click');
        $('.laydate-btns-confirm').trigger('click');
        $('#endtime').trigger('click');
        $('.laydate-next-m').trigger('click');
        $('.laydate-btns-confirm').trigger('click');
      }
      resolve(1)
    }, 2000)
  })
  
  // => 8、所属部门
  await new Promise((resolve, reject)=>{
    setTimeout(()=>{
      $('#department').trigger('click');
      const time = setInterval(()=>{
        const dom = $("#layui-layer-iframe1").contents().find(".layui-tree-txt:contains('RPO')")
        if(dom.length > 0){
          dom.trigger('click');
          clearInterval(time)
          resolve(1)
        }
      }, 2000)
    }, 1000)
  })

  // 我已经阅读规则
  $('#check_protocal').trigger('click');
}

// 单个职位发布
const singleJobPublish = async () => {
  const data = await getJobLocalstory('job') as IList;
  console.log(data)
  // 转换数据格式
  const formate = formateData(data) as IFormat;
  console.table(formate);
  // 自动设置校招职位
  await autoSetSchoolJob(formate);
  // 发布
  $('#J_release').trigger('click');
  // 移除缓存数据
  await clearJobLocalstory('job');
}

// 批量职位发布
const multipleJobPublish = async () => {
  const index = await getJobLocalstory('multipleIndex') as number; // 批量发布的索引
  const count = await getJobLocalstory('count') as number; // 批量发布的数量
  const jobs = await getJobLocalstory('jobs') as IList[];
  if(index < count){
    const formate = formateData(jobs[index]) as IFormat;
    await autoSetSchoolJob(formate);
    $('#J_release').trigger('click');
    await saveJobLocalStory('multipleIndex', index + 1)
  }else{
    await clearJobLocalstory('jobs');
  }
}

// 初始化
async function init(){
  const type = await getJobLocalstory('type');
  switch(type){
    case 'single':
      singleJobPublish();
      break;
    case 'multiple':
      multipleJobPublish();
      break;
  }
}

// 执行主流程
init()

