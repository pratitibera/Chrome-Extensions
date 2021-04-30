// for bug template

chrome.runtime.sendMessage({
	todo: "showPageAction"
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == 'hideButton') {
		$('#commit').attr('disabled', true);
	}
	if (request.todo == 'unhideButton') {
		$('#commit').attr('disabled', false);
		sendMsg();
	}
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.todo == "changeStatus") {

		alert(request.enteredSubCategories);

		$('#comment').val(request.enteredComment);

		$('#work_time').val(request.hoursWorked);
		
		const textArea=document.evaluate("//*[@id='blankText']/div/div[2]/div/div[1]/textarea", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        textArea.value=request.enteredComment;
        //$('#comment').val(request.enteredComment);
        document.getElementById('submitComments').click();
       
		

		$("#cf_department option[value|='" + request.enteredDepartment + "']").attr('selected', 'selected');
		$("#cf_rca_categories option[value|='" + request.enteredCategories + "']").attr('selected', 'selected');
		$("#cf_rca_sub_categories option[value|='" + request.enteredSubCategories + "']").attr('selected', 'selected');
		$("#cf_workflow_status option[value|='" + request.enteredWorkflow + "']").attr('selected', 'selected');
		$("#bug_status option[value|='" + request.enteredBugstatus1 + "']").attr('selected', 'selected');
		$("#resolution option[value|='" + request.enteredBugstatus2 + "']").attr('selected', 'selected');

		if (request.clickedSubcategories != '') {
			for (i = 0; i < (request.clickedSubcategories).length; i++) {
			$("option[value|='" + request.clickedSubcategories[i] + "']").attr('selected', true);
		}

		$("#cf_iae_resolution option:selected").each(function () {
			var c = 0;
			for (i = 0; i < (request.clickedSubcategories).length; i++) {
				if (this.value == request.clickedSubcategories[i]) {
					c++;
				}
			}
			if (c == 0) {
				$("option[value|='" + this.value + "']").prop('selected', false);
				console.log(this.selected);
			}
		});
		}

	}
});

var arrayOfSelecedIDs = [];

window.onload = (function () {
	sendMsg();
})();

document.getElementById('cf_department').onchange = function () {
	sendMsg();
};

document.getElementById('cf_rca_categories').onchange = function () {
	sendMsg();
};

document.getElementById('cf_rca_sub_categories').onchange = function () {
	sendMsg();
};

document.getElementById('cf_iae_resolution').onchange = function () {
	sendMsg()
};

document.getElementById('cf_workflow_status').onchange = function () {
	sendMsg();
};

document.getElementById('bug_status').onchange = function () {
	sendMsg();
};

document.getElementById('resolution').onchange = function () {
	sendMsg();
};

document.getElementById('work_time').onchange = function () {
	sendMsg();
};


function sendMsg() {
	var selector1 = document.getElementById('cf_department').selectedIndex
	var selector2 = document.getElementById('cf_rca_categories').selectedIndex
	var selector3 = document.getElementById('cf_rca_sub_categories').value
	var selector5 = document.getElementById('cf_workflow_status').selectedIndex
	var selector6 = document.getElementById('bug_status').selectedIndex
	var selector7 = document.getElementById('resolution').selectedIndex
	var selector8 = document.getElementById('work_time').value;

	var elements = document.getElementById('cf_iae_resolution').childNodes;
	arrayOfSelecedIDs = []
	for (i = 0; i < elements.length; i++) {
		if (elements[i].selected) {
			arrayOfSelecedIDs.push(elements[i].value)
		}
	}

	var selector4 = arrayOfSelecedIDs

	chrome.runtime.sendMessage({
		todo: "insertvalues",
		selector1: selector1,
		selector2: selector2,
		selector3: selector3,
		selector4: selector4,
		selector5: selector5,
		selector6: selector6,
		selector7: selector7,
		selector8: selector8
	});
}


// for whiteboard
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
	//  alert('no respoccse');
	if (request.action == 'getSummary') {
		var wbVar = document.getElementById('status_whiteboard').value;
		var rdateVar = document.getElementsByClassName("bz_comment_time")[0].innerText;
		var bug_age = calcBugAge();


		sendResponse({
			wb: wbVar,
			rd: rdateVar,
			ba: bug_age,
			resp: "Test"
		});
	} else {
		sendResponse({
			resp: "Nothing"
		});

	}
});
document.addEventListener("click", function () {
	//document.getElementById("submitComments").addEventListener("click", functionNameClosure);
	var x = document.getElementById("primarySubmit");
	if (x != null) {
		x.addEventListener("click", functionNameClosure);
	}
	var y = document.getElementById("closure_submit");
	if (y != null) {
		y.addEventListener("click", functionNameClosure);
	}
	var z = document.getElementById("submitComments");
	if (z != null) {
		z.addEventListener("click", functionNameClosure);
	}
	//document.getElementById("primarySubmit").addEventListener("click", functionNameClosure);
	//document.getElementById("closure_submit").addEventListener("click", functionNameClosure);
}, false);


function functionNameClosure() {
	//alert('allerrtt');
	var cf_status_submit = document.getElementById('bug_status').value;
	var cf_recomented_action_submit = document.getElementById('cf_recomented_action').value;
	var cf_department_action_submit = document.getElementById('cf_department').value;
	var cf_backend_frontend_submit = document.getElementById('cf_backend_frontend').value;
	var iae_resolution_submit = document.getElementById("cf_iae_resolution").value;
	var whiteboard_input = document.getElementById("status_whiteboard").value;


	if (cf_backend_frontend_submit.toLowerCase() != 'preventive fixes' &&
		cf_department_action_submit.toLowerCase() != "iae") {
		if (whiteboard_input.toLowerCase().indexOf('jn_triaged') == -1) {
			alert("Bug is not JN Triaged. Please Check");
			document.getElementById("commit_top").disabled = true;
			document.getElementById("commit").disabled = true;
		} else if (iae_resolution_submit == "") {
			alert("IAE-Resolution is a mandatory field.");
			document.getElementById("commit_top").disabled = true;
			document.getElementById("commit").disabled = true;
		} else {
			document.getElementById("commit_top").disabled = false;
			document.getElementById("commit").disabled = false;
		}
	} else {
		if (cf_backend_frontend_submit.toLowerCase() == 'preventive fixes' &&
			cf_status_submit.toLowerCase() == 'resolved') {
			if (iae_resolution_submit == "") {
				alert("IAE-Resolution is a mandatory field.");
				document.getElementById("commit_top").disabled = true;
				document.getElementById("commit").disabled = true;
			} else if (cf_department_action_submit.toLowerCase() != "iae") {
				alert("For Internal Bugs department cannot be changed to any other than IAE");
				document.getElementById("commit_top").disabled = true;
				document.getElementById("commit").disabled = true;
			} else {
				document.getElementById("commit_top").disabled = false;
				document.getElementById("commit").disabled = false;
			}
		}
	}
}


function calcBugAge() {
	var deptIAE = document.getElementById("cf_department");
	var departmentIAE = deptIAE.options[deptIAE.selectedIndex].text;
	if (departmentIAE.indexOf('IAE') != 0) { //Age will only be correct when the bug is in IAE's plate

		return 'Bug Age can only be calculated when the bug is Assigned to IAE';
	}

	var BugOpenFeild = document.getElementsByClassName("bz_comment_time")[0];
	PDT = false;
	if (BugOpenFeild.innerText.includes("PDT")) { //if the bug has been filed in PDT, then the timezone calculations needs to be updated.
		PDT = true;
	}
	var BugOpen_time = BugOpenFeild.innerText.substring(0, 19);
	var BugOpenDate = new Date(BugOpen_time.replace(/-/gi, "/") + ":00 GMT+0530"); //javascript function will only work correctly if the timezone is local hence doing all calculations in local timezone by manipulating the date
	var idletime = document.getElementById('cf_idle_time').value;
	var CurrentDate = new Date(); //value shown will be converted to PST but preserving the time zone.
	var Current = CurrentDate.getTime();
	var localOffset = CurrentDate.getTimezoneOffset() * 60000;
	var utc = Current + localOffset;
	var offset = -8;
	if (PDT) offset = -7;
	var CurrentPST = utc + (offset * 3600000);
	var CurrentDatePST = new Date(CurrentPST);
	var BugOpenTime = BugOpenDate.getTime(); //BugOpenDateTime
	var CurrentTime = CurrentDatePST.getTime(); //CurrentDatePSTTime

	var BugOpenDay = BugOpenDate.getDay();
	var CurrentDay = CurrentDatePST.getDay();
	//To remove the weekend buffering. if the bug has been opened on weekend or current time is of weekend.
	var ODBuffer = (BugOpenDate.getHours() * 60 * 60 * 1000) + (BugOpenDate.getMinutes() * 60 * 1000) + (BugOpenDate.getSeconds() * 1000);
	var CDBuffer = (CurrentDatePST.getHours() * 60 * 60 * 1000) + (CurrentDatePST.getMinutes() * 60 * 1000) + (CurrentDatePST.getSeconds() * 1000);

	if (BugOpenDay === 6) {
		BugOpenTime = BugOpenTime - ODBuffer + 172800000; //saturday
	} else if (BugOpenDay === 0) {
		BugOpenTime = BugOpenTime - ODBuffer + 86400000; //sunday
	}
	CheckingAgeonWeekend = false;
	if (CurrentDay === 6) {
		CurrentTime = CurrentTime - CDBuffer - 60000; //saturday //-60000 to take the day behind
		CheckingAgeonWeekend = true;
	} else if (CurrentDay === 0) {
		CurrentTime = CurrentTime - CDBuffer - 86400000 - 60000; //sunday
		CheckingAgeonWeekend = true;
	}


	var Age3 = 0; //defined outside if as method call is required
	if (CurrentTime > BugOpenTime) {
		var Age1 = CurrentTime - BugOpenTime;
		var AgeInDays = Age1 / 86400000; //86400000 day in milliseconds
		var fullweeks = parseInt(AgeInDays / 7);
		var weekends = 2 * fullweeks;
		var Age2 = Age1 - (weekends * 86400000);
		//updating open day and currentday seems not to be required . -- old comment
		//updating open day and current day is required because when the bug is opened on weekend and we have updated it's open date to monday
		//and the day is still the old one then. it will go in to the below check because for the code there is a weekend between them. -- New comment
		BugOpenDay = new Date(BugOpenTime).getDay();
		CurrentDay = new Date(CurrentTime).getDay(); //keeping the day friday in case of weekend because it doesn't cause the value to go in to next check.
		var diffdays = CurrentTime - BugOpenTime;
		diffdays = diffdays / 86400000; //diffdays to check if the difference is less than a week.

		//Adding AgeInDays when both BugOpenDay and CurrentDay is same but from different week.
		if (BugOpenDay >= CurrentDay && diffdays % 7 > 1 && AgeInDays > 1 && !CheckingAgeonWeekend) { //as the value of days runs from 0 to 6 hence removing weekend check won't work correctly
			Age2 = Age2 - 172800000; //removing the weekend for the difference less than a week.
		}
		//Phase1- BugOpenDay>=CurrentDay removing the equals condition from this check as if the bug has been filed on saturday one week back then after adding idle time it is not working correctly.
		//Phase2- CurrentDay!==0 is because it is the only case where the check BugOpenDay>=CurrentDay won't work --Removing this check as CurrentDay won't ever be zero.
		//CheckingAgeonWeekend because if we are checking the age on weekend
		Age3 = Age2 - (idletime * 86400000);
	}

	var AgeString = VisibleAge(Age3);

	return ("Age: " + AgeString);

}

function VisibleAge(FinalAge) {
	var ageinseconds = FinalAge / 1000;
	var days = parseInt(ageinseconds / 86400);
	var hours = parseInt((ageinseconds % 86400) / 3600);
	var minutes = parseInt((ageinseconds % 3600) / 60);

	if (days === 0) {
		FinalAge = hours + " hours " + minutes + " minutes";
	} else {
		FinalAge = days + " days " + hours + " hours " + minutes + " minutes";
	}
	return FinalAge;
}


function ConverttoIST(TimeValue) {
	var PSToffset = 13.5;
	if (PDT) PSToffset = 12.5;
	var ETIME = TimeValue + (PSToffset * 3600000);
	var TimeIST = new Date(ETIME);
	return TimeIST;
}