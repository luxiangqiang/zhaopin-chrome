
async function init() {
  $.each($('.J_allListBox > td:nth-child(4) > a'), (index, el) => {
    setTimeout(()=>{
      el.click()
    }, index * 500)
  })

  setTimeout(()=>{
    $.each($('.qspage > a'), (index, el) => {
      if($(el).text() === "下一页"){
        window.open($(el).attr('href'));
      }
    })
    window.close();
  }, 25000);
}

init();