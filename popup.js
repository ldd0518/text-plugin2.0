// 将保存的内容添加到弹出窗口中
chrome.runtime.sendMessage({ action: "getContent" }, (response) => {
    const savedContent = document.querySelector('#savedContent');
    savedContent.innerHTML = response.result;
});

// 添加内容到插件
const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', () => {
    const textInput = document.querySelector('#textInput');
    const content = textInput.value;

    //发送数据到background.js页面
    chrome.runtime.sendMessage({ action: "addContent", content }, (response) => {
        alert(response.result);
    });

    textInput.value = '';
});

// 显示保存的内容
const showButton = document.querySelector('#showButton');
showButton.addEventListener('click', () => {
    const result = document.querySelector('.result');
    result.style.display = 'block';

    chrome.runtime.sendMessage({ action: "getContent" }, (response) => {
        result.innerHTML = response.result;
    });
});
const result = document.querySelector('.result');
result.style.display = 'block';

chrome.runtime.sendMessage({ action: "getContent" }, (response) => {
    result.innerText = response.result ? response.result : "No saved content yet.";
});