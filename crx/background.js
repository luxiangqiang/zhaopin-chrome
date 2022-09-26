const resumeList = [];
const saveResumesLocalStory = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, function() {
        console.log("\u2705 [background.js]: Save Resumes Success\uFF5E");
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  });
};
function onMessage() {
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    switch (req.channel) {
      case "RESUME_DATA":
        resumeList.push(req.message);
        saveResumesLocalStory("resumes", resumeList);
        chrome.action.setBadgeText({ text: String(resumeList.length) });
        chrome.action.setBadgeBackgroundColor({ color: "#74b9ff" });
        break;
      case "CLEAR_RESUME_LIST":
        resumeList.length = 0;
        break;
    }
    sendResponse("background \u5DF2\u63A5\u6536\uFF5E");
  });
}
chrome.runtime.onInstalled.addListener(async () => {
  console.log("\u3010\u{1F680} \u53D1\u5E03\u804C\u4F4D\u3011\u63D2\u4EF6\u5DF2\u5B89\u88C5\u5B8C\u6210\uFF5E");
  onMessage();
});
