import { sendMessage } from "@/axios/fetch";

// 简历临时存储
const resumeList = [];

// 保存数据
const saveResumesLocalStory = (key, value) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.set({ [key]:  value}, function () {
        console.log('✅ [background.js]: Save Resumes Success～');
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  })
}

function onMessage(){
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    switch(req.channel){
      case "RESUME_DATA":
        resumeList.push(req.message);
        saveResumesLocalStory('resumes', resumeList)
        chrome.action.setBadgeText({text: String(resumeList.length) });
        chrome.action.setBadgeBackgroundColor({color: '#74b9ff'})
        break;
      case "NOTIFICATION":
        sendMessage(`### 国聘职位助手 \n\n > 导入结果： **${ req.result }** \n\n > 导入时间： **${ req.time }** \n\n  > 成功数量: **${ req.index }** 条 \n\n > 失败数量: **${ req.count - req.index }** 条 \n\n 失败原因：**${ req.reason || '暂无'}** @13779930651`)
        break;
      case "CLEAR_RESUME_LIST":
        resumeList.length = 0;
        break;
    }
  })
}

chrome.runtime.onInstalled.addListener(async () => {
  console.log('【🚀 发布职位】插件已安装完成～')
  onMessage();
});





