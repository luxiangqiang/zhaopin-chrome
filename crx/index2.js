const getLocalstoryToken = async () => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get("token", (result) => {
        resolve(result["token"]);
        console.log("\u{1F604} Get Token Success\uFF5E");
      });
    } catch (error) {
      reject(error);
    }
  });
};
const getLocalstory = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(type, (result) => {
        console.log(`\u2705 Get ${type} Success\uFF5E`, result[type]);
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  });
};
const saveLocalStory = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, function() {
        console.log(`\u2705 Save ${key} Success\uFF5E`, value);
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  });
};
const clearLocalstory = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove(type, () => {
        console.log(`\u{1F9F9} Clear ${type} Success\uFF5E`);
      });
      resolve(1);
    } catch (error) {
      reject();
    }
  });
};
const setBadgeText = (text = "0", color = "#74b9ff") => {
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color });
};
export { getLocalstory as a, setBadgeText as b, clearLocalstory as c, getLocalstoryToken as g, saveLocalStory as s };
