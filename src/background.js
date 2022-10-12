chrome.runtime.onInstalled.addListener(async () => {
  console.log('【🚀 发布职位】插件已安装完成～')
  // onMessage();
});

// 简历临时存储
// let resumeList = [];

// 保存数据
// const saveResumesLocalStory = (key, value) => {
//   return new Promise((resolve, reject)=>{
//     try {
//       chrome.storage.local.set({ [key]:  value}, function () {
//         console.log('✅ [background.js]: Save Resumes Success～');
//         resolve(1);
//       });
//     } catch (error) {
//       reject();
//     }
//   })
// }

// function onMessage(){
//   chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
//     chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//       switch(req.channel){
//         case "RESUME_DATA":
//           resumeList.push(...req.message);
//           saveResumesLocalStory('resumes', resumeList)
//           chrome.action.setBadgeText({text: String(resumeList.length) });
//           chrome.action.setBadgeBackgroundColor({color: '#74b9ff'})
//           break;
//         case "RESUME_DATA_ZHAO":
//           resumeList = req.message
//           saveResumesLocalStory('resumes', resumeList)
//           chrome.action.setBadgeText({text: String(resumeList.length) });
//           chrome.action.setBadgeBackgroundColor({color: '#74b9ff'})
//           break;
//         case "CLEAR_RESUME_LIST":
//           resumeList.length = 0;
//           break;
//       }
//       sendResponse('background 已接收～');
//     })
//   })
// }
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
// if(tab.ur‘≥–0 9=b.id, popup: "/popup.html" })
// let url = chrome.runtime.getURL("popup.html");
// chrome.windows.create({ 
//   url: url,
//   width: 768,
//   height: 685,
//   left: 500,
// });
// }
// })









