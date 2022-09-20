
async function init() {
  console.error($('.resume_receive .td3 > a'))
  $.each($('.resume_receive .td3 > a'), (index, el) => {
    setTimeout(()=>{
      el.click();
    }, index * 1000)
  })

  setTimeout(()=>{
    $.each($('.qspage > a'), (index, el) => {
      if($(el).text() === "下一页"){
        window.open($(el).attr('href'));
      }
    })
    window.close();
  }, 50000);
}

init();