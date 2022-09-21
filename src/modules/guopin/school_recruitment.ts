
async function init() {
  const resumeCount = $('.resume_receive .td3 > a').length;
  $.each($('.resume_receive .td3 > a'), (index, el) => {
    setTimeout(()=>{
      el.click();
    }, index * 1000)
  })

  setTimeout(()=>{
    $.each($('.qspage > a'), (index, el) => {
      if($(el).text() === "下一页"){
        if($(el).attr('href') && $(el).attr('href') !== ''){
          window.open($(el).attr('href'));
        }
      }
    })
    // window.close();
  }, resumeCount * 1000);
}

init();