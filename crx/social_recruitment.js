async function init() {
  const resumeCount = $(".J_allListBox > td:nth-child(4) > a").length;
  $.each($(".J_allListBox > td:nth-child(4) > a"), (index, el) => {
    setTimeout(() => {
      el.click();
    }, index * 500);
  });
  setTimeout(() => {
    $.each($(".qspage > a"), (index, el) => {
      if ($(el).text() === "\u4E0B\u4E00\u9875") {
        if ($(el).attr("href") && $(el).attr("href") !== "") {
          window.open($(el).attr("href"));
        }
      }
    });
  }, resumeCount * 500);
}
init();
