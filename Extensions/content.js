chrome.runtime.sendMessage({
	todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == 'hideButton') {
		$('#saveValue').attr('disabled', true);
	}
	if (request.todo == 'unhideButton') {
		$('#saveValue').attr('disabled', false);
	}
})

var dataval = [document.getElementById('avalue').value, document.getElementById('bvalue').value, document.getElementById('cvalue').value, document.getElementById('dvalue').value];
var attachment = false;

if (document.getElementById('evalue').value == 'File') {
	attachment = true;
}

chrome.runtime.sendMessage({
	todo: "insertvalues",
	data: dataval,
	attachment: attachment
});


document.getElementById('saveValue').onclick = function () {
	sendUpdate();
};

function sendUpdate() {
	var dataval = [document.getElementById('avalue').value, document.getElementById('bvalue').value, document.getElementById('cvalue').value, document.getElementById('dvalue').value];
	var attachment = false;

	if (document.getElementById('evalue').value == 'File') {
		attachment = true;
	}

	chrome.runtime.sendMessage({
		todo: "insertvalues",
		data: dataval,
		attachment: attachment
	});
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "changeStatus") {
		var addedInput = request.clickedInput;
		var elementselected = request.clickedButton;
		$('#' + elementselected + 'value').val(addedInput);
	}
});