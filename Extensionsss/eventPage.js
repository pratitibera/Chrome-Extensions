// for whiteboard

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

// for bug template

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "showPageAction") {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function (tabs) {
			chrome.pageAction.show(tabs[0].id);
		});
	}
});

chrome.runtime.onConnect.addListener(function (port) {
	if (port.name === "popup") {
		port.onDisconnect.addListener(function () {
			chrome.tabs.query({
				active: true
			}, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {
					"todo": 'unhideButton'
				});
			})

		});
	}
});


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message === 'pageActionClicked') {
		chrome.tabs.query({
			active: true
		}, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				"todo": 'hideButton'
			});
		})
	}
});

var selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "insertvalues") {
		selector1 = request.selector1;
		selector2 = request.selector2;
		selector3 = request.selector3;
		selector4 = request.selector4;
		selector5 = request.selector5;
		selector6 = request.selector6;
		selector7 = request.selector7;
		selector8 = request.selector8;
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.method == "getStatus") {
		sendResponse({
			selector1: selector1,
			selector2: selector2,
			selector3: selector3,
			selector4: selector4,
			selector5: selector5,
			selector6: selector6,
			selector7: selector7,
			selector8: selector8
		})
	}
});