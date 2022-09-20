export interface IMessage {
  channel: string;
  message: any;
  [prop: string]: any;
}
export type MessageSender = chrome.runtime.MessageSender;
export type TSendResponse = (response?: any) => void;
export type TMessageHandler = (message: IMessage, sender: MessageSender, sendResponse: TSendResponse) => void;

// 获取 token
export const getLocalstoryToken = async () => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.get(
        "token",
        (result) => {
          resolve(result['token']);
          console.log('😄 Get Token Success～');
        }
      );
    } catch (error) {
      reject(error);
    }
  })
}

/**
 * 功能：获取缓存数据
 * @param type 
 * @returns 
 */
export const getLocalstory  = (type: string) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.get(type, (result) => {
        console.log(`✅ Get ${ type } Success～`, result[type])
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  })
}

/**
 * 功能：保存数据
 * @param key 
 * @param value 
 * @returns 
 */
export const saveLocalStory = (key: string, value: any) => {
  return new Promise((resolve, reject)=>{
    try {
      chrome.storage.local.set({ [key]:  value}, function () {
        console.log(`✅ Save ${ key } Success～`, value);
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  })
}

/**
 * 功能：清除缓存数据
 * @param type 
 * @returns 
 */
export const clearLocalstory = (type: string) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove(type,() => {
        console.log(`🧹 Clear ${ type } Success～`);
      })
      resolve(1);
    } catch (error) {
      reject();
    }
  })
}

// SetBadgeText
export const setBadgeText = (text='0', color='#eb524a') => {
  chrome.action.setBadgeText({text: text});
  chrome.action.setBadgeBackgroundColor({color: color});
}