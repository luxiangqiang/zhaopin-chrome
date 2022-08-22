const jobs:any = [{
  title: 'java 工程师',
  code:'A002',
  salaryFrom:'200',
  salaryTo:'300',
  amount:'100',
  salmonths:'3',
  description:'岗位职责：\n1.根据产品开发进度和任务分配，独立开发相应的界面与界面逻辑；\n2.协助测试人员完成软件系统及模块的测试；'
}]

const titleToElementIdMap: Record<string, string> = {
  'jobs_name': 'title', // 职位
  'jobs_num': 'code', // 编号
  'minwage':'salaryFrom', // 最低薪资
  'maxwage':'salaryTo',// 最高薪资
  'salmonths': 'salmonths', // 年薪
  'amount':'amount', // 在招人数
  'contents':'description', // 职位描述
}

// input 输入文字
function enterInput(id: string ,text: string){
  $(id).val(text)
}

// xPath 定位元素
function getxPathElement(xpath:string) {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  return result.iterateNext()
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

// 自动设置校招职位
function autoSetSchoolJob(){
  const titles = ['财务/人事/行政/后勤', '财务/审计/税务', '财务总监'];
  const citys = ['河北', '沧州'];
  const specialized = ['教育学', '科学教育']

  // ID 元素自动填写
  Object.keys(titleToElementIdMap).forEach(id => {
    enterInput(`#${ id }`, jobs[0][titleToElementIdMap[id]]);
  })

  // 职位性质
  $(".J_radioitme_jobs:contains('应届生')").click();

  // 设置职位（弹窗）
  $('#J_showmodal_jobs').click();
  titles.map((title, index)=>{
    if(index === 0){
      $(`label[name='${ title }']`).click()
    }else if(index === 1){
      const targetEle = getSecondJobDom(title);
      if(targetEle){
        targetEle.click();
      }else{
        throw Error('🙅 没有获取职位 DOM 元素')
      }
    }else{
      $(`label[data-title='${ title }']`).click()
    }
  })

  // 设置工作地区（弹窗）
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

  // 设置学历要求（下拉框）
  const dom: HTMLElement | null = $("a[data-code='1163']")[0];
  if(dom){
    dom.click()
  }else{
    throw Error('🙅 没有获取学历 DOM 元素')
  }

  // 设置专业要求
  $('#J_showmodal_major').click();
  $(`li[data-title='${ specialized[0] }']`).click();
  $(`li[data-title='${ specialized[1] }']`).click();
  $('#J_btnyes_major').click();

  // 所属部门
  setTimeout(()=>{
    $('#department').click();
    setTimeout(()=>{
      $("#layui-layer-iframe1").contents().find(".layui-tree-txt:contains('抢镜')").click();
    }, 4000);
  }, 1000)

  // 报名时间
  $('#starttime').click();
  $("td[lay-ymd='2022-8-18']").click();
  $('.laydate-btns-confirm').click();
  $('#endtime').click();
  $("td[lay-ymd='2022-8-31']").click();
  $('.laydate-btns-confirm').click();

  // 我已经阅读规则
  $('#check_protocal').click();
}

// 初始化
function init(){
  // 自动设置校招职位
  autoSetSchoolJob();
}

// 执行主流程
init()

