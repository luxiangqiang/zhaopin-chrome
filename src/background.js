import { sendMessage } from "@/axios/fetch";

chrome.runtime.onInstalled.addListener(() => {
  console.log('【🚀 发布职位】插件已安装完成～')
  // sendMessage(`### 国聘职位助手 \n\n > 导入结果： **全部成功！** \n\n  导入时间： **8:10** \n\n  > 成功数量: **10** 条 \n\n > 失败数量: **0** 条 \n\n @17853583272`)
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    sendMessage(`### 国聘职位助手 \n\n > 导入结果： **${ req.result }** \n\n > 导入时间： **${ req.time }** \n\n  > 成功数量: **${ req.index }** 条 \n\n > 失败数量: **${ req.count - req.index }** 条 \n\n 失败原因：**${ req.reason || '暂无'}** @17853583272`)
    return true;
  })
});

// const notification = () => {
//   chrome.notifications.create(
//     'notify_alert1', // notifyId
//     {
//       type: "basic", 
//       iconUrl: chrome.runtime.getURL('logo.png'), 
//       title: "更新完成！", 
//       message: "请查看页面数据是否已更新。"
//     }, 
//     function(notifyId){
//       console.log(notifyId, JSON.stringify(chrome.runtime.lastError));
//       //不用移除该消息，否者不会显示
//       // chrome.notifications.clear(notifyId, function(){ });
//     }
//   );
// }