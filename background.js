//保存选中内容
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === "addContent") {
        // 保存内容到插件
        chrome.storage.sync.set({content: request.content});
  
        // 成功添加提示
        sendResponse({result: "你已成功添加！！！"});
    }
  });
  
  // 获取保存的内容
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getContent") {
      chrome.storage.sync.get(['content'], (result) => {
        if (result.content) {
          sendResponse({ content: result.content });
        } else {
          sendResponse({ error: '没有保存的文本！！！' });
        }
      });
    }
  });