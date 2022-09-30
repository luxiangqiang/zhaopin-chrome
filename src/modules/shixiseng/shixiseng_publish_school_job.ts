import { IList } from "@/axios/apis/types";
import { IFormat } from "../guopin/types";

// 【映射】学历字段映射
const EDUCATION_MAP:Record<string, string> = {
  '博士': '博士',
  '硕士': '硕士',
  '本科': '本科',
  '专科': '不限',
  '高中': '不限',
  '中专中技':'不限',
  '中专/中技':'不限',
  '初中及以下':'不限',
  '不限':'不限'
}

// 【映射】职位类型映射
const JOB_CATEGORIES_MAP:Record<string, string[]> = {
  "场务/剧务":["设计/传媒","影视传媒", "影视传媒"],
  "演艺人员/经纪人":["设计/传媒","影视传媒", "经纪人"],
  "影视制作":["设计/传媒","影视传媒", "后期制作"],
  "舞美设计":["设计/传媒","影视传媒", "后期制作"],
  "广告":["设计/传媒","广告", "广告"],
  "IT培训":["教育培训","职业培训", "拓展培训"],
  "才艺特长培训":["教育培训","特长培训", "特长培训"],
  "教务管理":["教育培训","教务行政", "教务行政"],
  "考研辅导":["教育培训","教师", "其他教育培训职位"],
  "留学辅导":["教育培训","教师", "其他教育培训职位"],
  "特殊教育":["教育培训","教师", "其他教育培训职位"],
  "语言培训":["教育培训","教师", "其他教育培训职位"],
  "早教/幼教":["教育培训","教师", "幼教"],
  "职业培训":["教育培训","职业培训", "拓展培训"],
  "中小学课程辅导":["教育培训","教师", "其他教育培训职位"],
  "高等教育":["教育培训","教师", "其他教育培训职位"],
  "科研/学术研究":["教育培训","教师", "其他教育培训职位"],
  "保险":["金融/法务","保险", "保险"],
  "投融资":["金融/法务","投融资", "投融资"],
  "证券/基金/期货":["金融/法务","证券/基金/期货", "证券/基金/期货基金经理"],
  "信托/担保/拍卖/典当":["金融/法务","证券/基金/期货", "证券/基金/期货基金经理"],
  "银行及金融服务":["金融/法务","银行", "银行"],
  "农/林/牧/渔":["环境/资源利用","农牧渔林", "农牧渔林"],
  "环境科学/环保":["环境/资源利用","环境科学", "环境科学"],
  "能源/矿产/地质":["环境/资源利用","能源/矿产/地质", "能源/矿产/地质"],
  "陈列展示设计":["设计/传媒","非视觉设计", "陈列设计"],
  "动画动效设计":["设计/传媒","视觉/交互设计", "动画设计"],
  "工业设计":["设计/传媒","非视觉设计", "工业设计"],
  "视觉/交互设计":["设计/传媒","视觉/交互设计", "视觉/交互设计"],
  "产品经理":["互联网IT","产品", "产品经理"],
  "高级管理":["互联网IT","技术管理", "技术管理"],
  "项目管理":["互联网IT","产品", "产品项目管理"],
  "策划":["贸易商务","市场/营销", "市场策划"],
  "发行":["贸易商务","市场/营销", "市场/营销"],
  "公关媒介":["贸易商务","公关媒介", "公关媒介"],
  "会展会务":["贸易商务","会务会展", "会务会展"],
  "市场/品牌推广":["贸易商务","品牌推广", "品牌推广"],
  "市场调研":["贸易商务","市场/营销", "市场/营销"],
  "采购/供应链/材料管理":["贸易商务","采购", "采购"],
  "仓储管理":["贸易商务","供应链/物流", "仓储经理"],
  "交通运输":["贸易商务","供应链/物流", "供应链/物流"],
  "配送理货":["贸易商务","供应链/物流", "供应链/物流"],
  "物流管理":["贸易商务","供应链/物流", "供应链/物流"],
  "关务":["贸易商务","进出口贸易", "报关/报检员"],
  "财务":["人事行政财务","财会", "财会"],
  "档案管理":["人事行政财务","行政", "行政"],
  "行政":["人事行政财务","行政", "行政"],
  "合规风控/法务/律师":["金融/法务","法务", "法务"],
  "人事":["人事行政财务","人力资源", "人力资源"],
  "文员/助理":["人事行政财务","行政", "行政"],
  "销售顾问":["贸易商务","销售", "销售"],
  "商务拓展":["贸易商务","销售", "销售"],
  "销售管理":["贸易商务","销售", "销售"],
  "测试工程师":["互联网IT","测试", "测试"],
  "运维支持":["互联网IT","运维/技术支持", "运维/技术支持"],
  "售前售后工程师":["互联网IT","运维/技术支持", "运维/技术支持"],
  "物业/安保":["服务业","服务业", "服务业"],
  "餐饮服务":["服务业","服务业", "服务业"],
  "酒店服务":["服务业","服务业", "服务业"],
  "旅游服务":["服务业","服务业", "服务业"],
  "健康/美容":["服务业","服务业", "服务业"],
  "家政/维修":["服务业","服务业", "服务业"],
  "专业服务":["服务业","服务业", "服务业"],
  "商务服务":["服务业","服务业", "服务业"],
  "运动健身":["服务业","服务业", "服务业"],
  "零售百货":["服务业","服务业", "服务业"],
  "管培生/储备干部":["非盈利/其他","管培生", "管培生"],
  "社工":["非盈利/其他","公共事业", "社工"],
  "政府及非盈利机构从业者":["非盈利/其他","公共事业", "志愿者"],
  "电商运营":["互联网IT","运营", "电商运营"],
  "新媒体运营":["互联网IT","运营", "新媒体运营"],
  "业务运营":["互联网IT","运营", "产品运营"],
  "运营管理":["互联网IT","运营", "运营"],
  "专业分析":["互联网IT","运营", "运营"],
  "客户服务":["互联网IT","运营", "用户运营"],
  "机械设计/制造":["生产制造","机械设计/制造", "机械设计/制造"],
  "机械设备维修":["生产制造","机械设计/制造", "机械设计/制造"],
  "汽车制造":["生产制造","机械设计/制造", "机械设计/制造"],
  "汽车销售与服务":["贸易商务","销售", "销售"],
  "普工/技工":["生产制造","生产营运", "生产员"],
  "生产管理":["生产制造","生产营运", "生产员"],
  "生产质量管理":["生产制造","生产营运", "生产员"],
  "服装/纺织/皮革":["生产制造","生产营运", "生产员"],
  "印刷包装":["生产制造","生产营运", "生产员"],
  "化工":["生产制造","生产营运", "生产员"],
  "编辑/编校/作家":["设计/传媒","采编/写作/出版", "采编/写作/出版"],
  "翻译":["教育培训","翻译", "翻译"],
  "记者/采编":["设计/传媒","采编/写作/出版", "采编/写作/出版"],
  "生物/医药":["生物医疗","生物制药", "生物制药"],
  "医疗器械":["生物医疗","生物制药", "生物制药"],
  "护士/医助":["生物医疗","护士/护理", "护士/护理"],
  "医生/药剂师":["生物医疗","医生/医技", "医生/医技"],
  "医务管理":["生物医疗","医生/医技", "医生/医技"],
  "药店":["生物医疗","药店", "药店"],
  "前端开发":["互联网IT","前端开发", "前端开发"],
  "人工智能":["互联网IT","人工智能", "人工智能"],
  "软件研发":["互联网IT","前端开发", "前端开发"],
  "数据工程师":["互联网IT","数据", "数据分析师"],
  "移动研发":["互联网IT","移动开发", "移动开发"],
  "通信及硬件研发":["通信/硬件","硬件开发", "硬件开发"],
  "电子/电器/半导体":["通信/硬件","电子/半导体", "电子/半导体"],
  "工程安全/工程质检":["房产/建筑","设计装修与市政建设", "建筑工程师"],
  "工程管理":["房产/建筑","设计装修与市政建设", "建筑工程师"],
  "工程开发技术人员":["房产/建筑","设计装修与市政建设", "建筑工程师"],
  "施工员":["房产/建筑","设计装修与市政建设", "施工员"],
  "房地产规划开发":["房产/建筑","房地产规划开发", "房地产规划开发"],
  "房地产交易":["","房地产销售/招商", "房地产销售/招商"],
  "建筑/室内设计":["设计/传媒","非视觉设计", "室内设计"],
}

// 格式化数据
function formateData(job: IList){
  return {
    title: `${job.title}(${job.code})`, // 职位名
    code: job.code, // 职位编号
    // type: JOB_TYPE_MAP[job.recruitmentTypeName], // 招聘类型
    salaryFrom: job.salaryFrom, // 最低薪资
    salaryTo: job.salaryTo, // 最高薪资
    amount: 5, // 在招人数
    salmonths: job.salaryTimes + '个月', // 薪资月数
    description: job.description, // 职位描述
    category: JOB_CATEGORIES_MAP[job.secondCategory.name], // 职位类别
    // city: Object.keys(CITY_MAP).includes(city) ? CITY_MAP[city] : ['其他地区', '全国'], // 工作地区
    education: EDUCATION_MAP[job.educationFrom], // 学历
    specialized: ['其他', '不限'], // 专业
    experienceFrom: job.experienceFrom, // 工作年限
  }
}

/**
 * 功能：通过 xPath 获取 dom 元素
 * @param xpath 
 * @returns 
 */
 const getxPath = (xpath:string) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom: Node | null = result.iterateNext();
  if(dom){
    return dom;
  }else{
    return null;
  }
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

// 自动匹配职位
function autoSetJob(data: IFormat){
  console.log(data);
  const timeId = setInterval(() => {
    // 职位名称
    const titleELe = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[1]/div/div/div/div/div/input')
    if(titleELe){
      clearInterval(timeId);
      if(titleELe){
        $(titleELe).val(data.title);
        titleELe.dispatchEvent(new CustomEvent('input'))
      }

      // 职位类别
      const categoryEle = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[2]/div/div/div/input');
      categoryEle && $(categoryEle).trigger('click')
      setTimeout(async () => {
        $.each($('.fist-item'), (index, ele) => {
          if ($(ele).text() === data.category[0]) {
            $(ele).trigger('click');
          }
        })
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('ok');
          }, 1000)
        });
        $.each($('.second-item'), (index, ele) => {
          if ($(ele).text() === data.category[1]) {
            $(ele).trigger('click');
          }
        })
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('ok');
          }, 1000)
        });
        $.each($('.last-level span'), (index, ele) => {
          if ($(ele).text() === data.category[2]) {
            $(ele).trigger('click');
          }
        })
      }, 1000)

      // 学历要求
      $.each($('.el-select-dropdown__item'), (index, ele) => {
        if($(ele).text() === data.education) {
          $(ele).trigger('click');
        }
      })

      // 设置岗位
      const jobDescEle = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[4]/div/div/div/textarea');
      if(jobDescEle){
        $(jobDescEle).val(data.description);
        jobDescEle.dispatchEvent(new CustomEvent('input'))
      }
      
      // 职位亮点
      const tagsTimeId = setInterval(() => {
        if($('.recommend-tags').length > 0){
          clearInterval(tagsTimeId)
          $.each($('.recommend-tags'), (index, ele) => {
            if([1,2,3].includes(index)){
              $(ele).trigger('click')
            }
          })
        }
      }, 1000);

      // 地点
      const addressTimeId = setInterval(() => {
        const adressEle = $('.job-address__item');
        if(adressEle){
          clearInterval(addressTimeId);
          $(adressEle).trigger('click');
        }
      }, 1000);

      // 日薪范围
      $.each($('.el-select-dropdown__item'), (index, ele) => {
        if($(ele).text() === data.salaryFrom){
          console.error($(ele).text())
          $(ele).trigger('click');
        }
        // if($(ele).text() === data.salaryTo){
        //   $(ele).trigger('click');
        // }
      });

      // 招聘人数
      const countEle = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[9]/div/div/div/input')
      if(countEle){
        $(countEle).val(data.amount);
        countEle.dispatchEvent(new CustomEvent('input'))
      }
    }
  }, 1000)
}

const singleJobPublish = async () => {
  const job = await getJobs('job') as IList;
  const formate = formateData(job) as any;
  autoSetJob(formate);
}

async function init(){
  singleJobPublish();
}

init();