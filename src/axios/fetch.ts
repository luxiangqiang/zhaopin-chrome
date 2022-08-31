
// 发送报警信息
export const sendMessage = async (content: string) => {
  const DINGDING_URL = 'https://oapi.dingtalk.com/robot/send?access_token=4b5c35cb0da73bff59ae79cfeffcaa24093bd4713b48f23ab0a48d9435c4b318';
  const message = {
    "msgtype": "markdown",
    "markdown": {
      "title":"监控报警",
      "text": content
    },
    "at": {
      "atMobiles": [
        "13779930651",
        "17853583272",
      ],
      "isAtAll": false
    }
  }
  try {
    let response = await fetch(DINGDING_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      mode: "cors", 
      body: JSON.stringify(message) 
    });
    const result =  await response.json();
    console.log('通知发送结果：', result)
  } catch (error) {
    console.log('Request Failed', error);
  }
}