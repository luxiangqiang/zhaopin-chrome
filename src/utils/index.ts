
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