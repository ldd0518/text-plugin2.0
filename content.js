// 添加右键菜单
chrome.contextMenus.create({
    title: "保存选中的内容",
    contexts: ["selection"],
    onclick: (info, tab) => {
        const content = info.selectionText;
  
        //发送数据到background.js页面
        chrome.runtime.sendMessage({action: "addContent", content}, (response) => {
            console.log(response);
        });
    }
  });