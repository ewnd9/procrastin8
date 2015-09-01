var bads = ['twitter.com', 'vk.com'];
var good = 'http://www.memrise.com/home/';

var check = function(tab) {
  var el = document.createElement('a');
  el.href = tab.url;
  var host = el.hostname;

  if (bads.indexOf(host) > -1) {
    chrome.tabs.update(tab.id, { url: 'http://www.memrise.com/home/' }, function() {

    });
  }
};

chrome.tabs.onCreated.addListener(check);
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  check(tab);
});