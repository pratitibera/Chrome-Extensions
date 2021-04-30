chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var url = tab.url;
    if (isUrl(url)) {
        chrome.pageAction.show(tab.id);
       
    }

});

function isUrl(url) {
    if (url.includes('blrbugzilla.yodlee.com/show_bug.cgi?id'))
        return true;
    else
        return false;
}
