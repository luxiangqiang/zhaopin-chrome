function enterInput(id, text) {
  console.log($(id));
  $(id).text(text);
}
function init() {
  setTimeout(() => {
    enterInput("#username", "13779930651");
    enterInput("#password", "qiangjing888");
  }, 2e3);
}
init();
