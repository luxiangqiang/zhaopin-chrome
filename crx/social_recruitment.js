async function init() {
  $.each($(".J_allListBox > td:nth-child(4) > a"), (index, el) => {
    setTimeout(() => {
      el.click();
    }, index * 500);
  });
  setTimeout(() => {
    $.each($(".qspage > a"), (index, el) => {
      if ($(el).text() === "\u4E0B\u4E00\u9875") {
        window.open($(el).attr("href"));
      }
    });
    window.close();
  }, 25e3);
}
init();
