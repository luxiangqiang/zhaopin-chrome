
// window.$ = window.jQuery;
// window.open('https://www.iguopin.com/')
// $('body').css('background-color', 'yellow')

const jobs = [{
  title: 'java 工程师',
  code:'A002',
  salaryFrom:'200',
  salaryTo:'300',
  amount:'100',
  description:'岗位职责：\n1.根据产品开发进度和任务分配，独立开发相应的界面与界面逻辑；\n2.协助测试人员完成软件系统及模块的测试；'
}]

const titleToElementXPathMap = {
  '//*[@id="jobs_form"]/div[1]/div[2]/div[2]/div/div[1]': 'recruitmentTypeName',
  '':'',
  '':'',
  '':'',
  '':'',
}
const titleToElementIdMap = {
  'jobs_name': 'title', // 职位
  'jobs_num': 'code', // 编号
  'minwage':'salaryFrom', // 最低薪资
  'maxwage':'salaryTo',// 最高薪资
  'amount':'amount', // 在招人数
  'contents':'description', // 职位描述
}

// input 输入文字
function enterInput(id ,text){
  $(id).val(text)
}

// xPath 定位元素
function getxPathElement(xpath) {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  return result.iterateNext()
}

// 获取【职位类别】二级 dom
function getSecondJob(title){
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

// 自动设置校招职位
function autoSetSchoolJob(){
  const titles = ['财务/人事/行政/后勤', '财务/审计/税务', '财务总监'];
  const citys = ['河北', '沧州'];

  // ID 元素自动填写
  Object.keys(titleToElementIdMap).forEach(id => {
    enterInput(`#${ id }`, jobs[0][titleToElementIdMap[id]]);
  })
  // 设置职位
  $('#J_showmodal_jobs').click();
  titles.map((title, index)=>{
    if(index === 0){
      $(`label[name='${ title }']`).click()
    }else if(index === 1){
      const targetEle = getSecondJob(title);
      targetEle.click();
    }else{
      $(`label[data-title='${ title }']`).click()
    }
  })
  // 设置工作地区
  $("div[data-title='请选择工作地区']").click();
  citys.map((targetCity, index) => {
    if(index === 0){
      $.each($('.list_nav li'),(index, province)=>{
        if($(province).text() === targetCity){
          $(province).click()
        }
      })
    }else{
      $.each($('.J_list_city'), (index, city) => {
        if($(city).text() === targetCity){
          $(city).click()
        }
      })
    }
  })
  $('#J_btnyes_city').click();
}

// 初始化
function init(){
  // 自动设置校招职位
  autoSetSchoolJob();
}

// 执行主流程
init()

