var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class API {
  constructor() {
    __publicField(this, "handlers", {});
    this.init();
  }
  init() {
    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
      const { type, payload } = request;
      const handler = this.handlers[type];
      if (handler) {
        const res = await handler({
          data: payload,
          sender
        });
        sendResponse({
          data: res
        });
      } else {
        sendResponse({ data: "\u6CA1\u627E\u5230\u51FD\u6570" });
      }
      return true;
    });
  }
  sendMessage(messageName, data) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ type: messageName, payload: data }, (response) => {
        console.log(response);
        resolve({
          data: response
        });
      });
    });
  }
  async sendTabMessage(messageName, data) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return new Promise((resolve) => {
      chrome.tabs.sendMessage(tab.id, { type: messageName, payload: data }, (response) => {
        resolve({
          data: response
        });
      });
    });
  }
  onMessage(messageName, handler) {
    const handlers = this.handlers;
    handlers[messageName] = handler;
  }
}
const message = new API();
globalThis.message = message;
chrome.runtime.onInstalled.addListener(() => {
  console.log("\u3010\u{1F680} \u53D1\u5E03\u804C\u4F4D\u3011\u63D2\u4EF6\u5DF2\u5B89\u88C5\u5B8C\u6210\uFF5E ");
});
