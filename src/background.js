import message from '@/utils/api';
globalThis.message = message;

chrome.runtime.onInstalled.addListener(() => {
  console.log('【🚀 发布职位】插件已安装完成～')
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    console.log(req);
  })
});

const notification = () => {
  chrome.notifications.create(
    'notify_alert1', // notifyId
    {
      type: "basic", 
      iconUrl: chrome.runtime.getURL('logo.png'), 
      title: "更新完成！", 
      message: "请查看页面数据是否已更新。"
    }, 
    function(notifyId){
      console.log(notifyId, JSON.stringify(chrome.runtime.lastError));
      //不用移除该消息，否者不会显示
      // chrome.notifications.clear(notifyId, function(){ });
    }
  );
}
