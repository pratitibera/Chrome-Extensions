chrome.runtime.sendMessage({
	todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == 'hideButton') {
		$('#saveValue').attr('disabled', true);
		$('#saveValueLink').css('pointer-events', 'none');
	}
	if (request.todo == 'unhideButton') {
		$('#saveValue').attr('disabled', false);
		$('#saveValueLink').css('pointer-events', 'auto');
	}
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "changeStatus") {
		$('#comments').val(request.enteredComment);
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "changeOptions") {
		$("option[value|='" + request.clickedInput + "']").attr('selected', 'selected');
	}
	if (request.todo == "changeMultipleOptions") {
		for (i = 0; i < (request.clickedInput).length; i++) {
			$("option[value|='" + request.clickedInput[i] + "']").attr('selected', 'selected');
		}
	}
});

document.getElementById('cf_agent_status').onchange = function () {
	sendMsg();
};
document.getElementById('cf_agent_type').onchange = function () {
	sendMsg();
};
document.getElementById('cf_rca_categories').onchange = function () {
	sendMsg();
};

var arrayOfSelecedIDs = [];

document.getElementById('cf_iae_resolution').onchange = function () {
	var elements = document.getElementById('cf_iae_resolution').childNodes;
	arrayOfSelecedIDs = []
	for (i = 0; i < elements.length; i++) {
		if (elements[i].selected) {
			arrayOfSelecedIDs.push(elements[i].value)
		}
	}
	sendMsg()
};


function sendMsg() {
	var selector1 = document.getElementById('cf_agent_status').value
	var selector2 = document.getElementById('cf_agent_type').value
	var selector3 = document.getElementById('cf_rca_categories').value
	var selector4 = arrayOfSelecedIDs

	chrome.runtime.sendMessage({
		todo: "insertvalues",
		selector1: selector1,
		selector2: selector2,
		selector3: selector3,
		selector4: selector4
	});
}