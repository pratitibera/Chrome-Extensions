chrome.runtime.sendMessage({
	todo: "showPageAction"
});

var dataval = [document.getElementById('avalue').value, document.getElementById('bvalue').value, document.getElementById('cvalue').value, document.getElementById('dvalue').value];
chrome.runtime.sendMessage({
	todo: "insertvalues",
	data: dataval
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "changeColor") {
		var addColor = request.clickedColor;
		var elementselected = request.clickedElement;
		$('#' + elementselected + 'value').val(addColor);
	}
});