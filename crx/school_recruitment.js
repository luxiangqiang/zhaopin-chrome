async function init() {
  const resumeCount = $(".resume_receive .td3 > a").length;
  $.each($(".resume_receive .td3 > a"), (index, el) => {
    setTimeout(() => {
      el.click();
    }, index * 1e3);
  });
  setTimeout(() => {
    $.each($(".qspage > a"), (index, el) => {
      if ($(el).text() === "\u4E0B\u4E00\u9875") {
        window.open($(el).attr("href"));
      }
    });
    window.close();
  }, resumeCount * 1e3);
}
init();
