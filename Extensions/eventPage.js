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

var dataval;
var attachment;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "insertvalues") {
		dataval = request.data;
		attachment = request.attachment;
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.method == "getStatus") {
		sendResponse({
			method: "peepee",
			data: dataval,
			attachment: attachment
		})
	}
});