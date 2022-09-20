const sendMessage = async (content) => {
  const DINGDING_URL = "https://oapi.dingtalk.com/robot/send?access_token=4b5c35cb0da73bff59ae79cfeffcaa24093bd4713b48f23ab0a48d9435c4b318";
  const message = {
    "msgtype": "markdown",
    "markdown": {
      "title": "\u76D1\u63A7\u62A5\u8B66",
      "text": content
    },
    "at": {
      "atMobiles": [
        "13779930651",
        "17853583272"
      ],
      "isAtAll": false
    }
  };
  try {
    let response = await fetch(DINGDING_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      mode: "cors",
      body: JSON.stringify(message)
    });
    const result = await response.json();
    console.log("\u901A\u77E5\u53D1\u9001\u7ED3\u679C\uFF1A", result);
  } catch (error) {
    console.log("Request Failed", error);
  }
};
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
chrome.runtime.onInstalled.addListener(async () => {
  console.log("\u3010\u{1F680} \u53D1\u5E03\u804C\u4F4D\u3011\u63D2\u4EF6\u5DF2\u5B89\u88C5\u5B8C\u6210\uFF5E");
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    switch (req.channel) {
      case "RESUME_DATA":
        resumeList.push(req.message);
        console.error(resumeList);
        saveResumesLocalStory("resumes", resumeList);
        chrome.action.setBadgeText({ text: String(resumeList.length) });
        chrome.action.setBadgeBackgroundColor({ color: "#eb524a" });
        break;
      case "NOTIFICATION":
        sendMessage(`### \u56FD\u8058\u804C\u4F4D\u52A9\u624B 

 > \u5BFC\u5165\u7ED3\u679C\uFF1A **${req.result}** 

 > \u5BFC\u5165\u65F6\u95F4\uFF1A **${req.time}** 

  > \u6210\u529F\u6570\u91CF: **${req.index}** \u6761 

 > \u5931\u8D25\u6570\u91CF: **${req.count - req.index}** \u6761 

 \u5931\u8D25\u539F\u56E0\uFF1A**${req.reason || "\u6682\u65E0"}** @13779930651`);
        break;
      case "CLEAR_RESUME_LIST":
        resumeList.length = 0;
        break;
    }
    return true;
  });
});
