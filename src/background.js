import message from '@/utils/api';

globalThis.message = message;

chrome.runtime.onInstalled.addListener(() => {
  console.log('【🚀 发布职位】插件已安装完成～ ')

});

// var popup = chrome.extension.getViews({ type: "popup" })[0]
// popup.GetMessageFromBackground("给我的兄弟popup点东西~")

function GetMessageFromPopup(data){
  console.log("popup给我的东西~",data)
}