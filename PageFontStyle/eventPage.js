
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});

var dataval;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "insertvalues")
    {
        dataval = request.data;
        alert(dataval);
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method == "getStatus") {

        sendResponse({ method: "peepee", data: dataval })
    }
});
