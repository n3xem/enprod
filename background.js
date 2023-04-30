function checkNowUrl() {
  let pattern = new RegExp('https://twitter.com/.*', 'g')
  if (location.href.match(pattern)) {
    location.href = "https://yahoo.co.jp"
  }
}

function checkActiveTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    console.log(tab[0].url)
    chrome.scripting.executeScript({
      target: { tabId: tab[0].id },
      func: checkNowUrl
    });
  });
}

// 5秒ごとにchangeTabColor() 関数を実行する
setInterval(checkActiveTab, 5000);
