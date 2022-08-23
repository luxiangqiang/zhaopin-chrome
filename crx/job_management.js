const getxPathElement = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    throw Error("\u{1F645} xPath: \u83B7\u53D6\u4E0D\u5230\u8BE5 dom \u8282\u70B9");
  }
};
getxPathElement("/html/body/div[3]/div[2]/div[3]/a[2]");
