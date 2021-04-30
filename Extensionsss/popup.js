chrome.runtime.connect({
  name: "popup"
});


$(function () {

  $('#popup-handler1').click(function () {
    $('#popup-handler1-content').css('display', 'block');
    $('#popup-handler2-content').css('display', 'none');
  });

  $('#popup-handler2').click(function () {
    $('#popup-handler2-content').css('display', 'block');
    $('#popup-handler1-content').css('display', 'none');

    chrome.tabs.getSelected(null, function (tab) {

      chrome.tabs.sendRequest(tab.id, {
        action: 'getSummary'
      }, function (response) {
        if (response == null) {
        } else {
          var wbVar = response.wb;
          var rdateVar = response.rd;
          var bugagevar = response.ba;

          document.getElementById('pagetitle').innerText = wbVar;
          document.getElementById('bugage').innerHTML = bugagevar;

        }
      });
    });
  });

  chrome.runtime.sendMessage('pageActionClicked');

   var selectedSubCategory;

  chrome.runtime.sendMessage({
    method: "getStatus"
  }, function (res) {
    selectedSubCategory = res.selector3;

    document.getElementById("cf_department").selectedIndex = res.selector1;
    document.getElementById("cf_rca_categories").selectedIndex = res.selector2;
    //document.getElementById("cf_rca_sub_categories").selectedIndex = res.selector3;
    document.getElementById("cf_workflow_status").selectedIndex = res.selector5;
    document.getElementById("cf_bug_status").selectedIndex = res.selector6;
    document.getElementById("cf_resolution").selectedIndex = res.selector7;
    for (i = 0; i < (res.selector4).length; i++) {
      $("option[value|='" + res.selector4[i] + "']").attr('selected', 'selected');
    }
    document.getElementById("hinput").value = res.selector8;
    return true;
  });

  var Attachments, ForceRefreshed;

  $("input[name='Attachments']").click(function () {

    var checkbox = $(this).attr('value');

    var checkboxes = document.getElementsByName("Attachments");
    checkboxes.forEach((item) => {
      if (item.value !== checkbox) {
        item.checked = false;
      } else {
        Attachments = item.value;
      }
    });
  });

  $("input[name='ForceRefreshed']").click(function () {

    var checkbox = $(this).attr('value');

    var checkboxes = document.getElementsByName("ForceRefreshed");
    checkboxes.forEach((item) => {
      if (item.value !== checkbox) {
        item.checked = false;
      } else {
        ForceRefreshed = item.value;
      }
    });
  });

  var selectedArrayInputs = [];

  $('#cf_iae_resolution').click(function () {
    selectedArrayInputs = Array.from(this.selectedOptions).map(option => option.value);
  });

  $('#cf_rca_categories').change(function () {
    showSubCategories();
  });


  $('#cf_rca_sub_categories').focus(function () {
    showSubCategories();
  });

  function showSubCategories(){
    $("#cf_rca_sub_categories option").css('display', 'block');
    var selectedIndexx = document.getElementById("cf_rca_categories").selectedIndex;
    selectedIndexx = selectedIndexx + 1;
    if (selectedIndexx == 3 || selectedIndexx == 1 || selectedIndexx == 4 || selectedIndexx == 7 || selectedIndexx == 8 || selectedIndexx == 11 || selectedIndexx == 12 || selectedIndexx > 17) {
        var val = [];
    }
    if (selectedIndexx == 2) {
        var val = [3,12,27,31,34];
    }
    if (selectedIndexx == 5) {
        var val = [9];
    }
    if (selectedIndexx == 6) {
        var val = [4,14,21];
    }
    if (selectedIndexx == 9) {
        var val = [2,13];
    }
    if (selectedIndexx == 10) {
        var val = [7,17];
    }
    if (selectedIndexx == 13) {
        var val = [11,20,24,29,35,36,37];
    }
    if (selectedIndexx == 14) {
        var val = [8,18,25];
    }
    if (selectedIndexx == 15) {
        var val = [5,15,22];
    }
    if (selectedIndexx == 16) {
        var val = [6,16,23,28,33];
    }
    if (selectedIndexx == 17) {
        var val = [10,19,26,30,32];
    }

    showValue(val);
  }

  function showValue(val){


    for(i = 1; i < 38; i++){
            var flag = 0;

            for(j = 0; j < val.length; j++){
                if(i == val[j]){
                    flag = 1;
                }
            }
            if (flag==0) {
                var value = $("#cf_rca_sub_categories option")[i].value;

                $("#cf_rca_sub_categories option[value|='" + value + "']").css('display', 'none');
            }
        }

        $("#cf_rca_sub_categories option[value|='" + selectedSubCategory + "']").attr('selected', 'selected');
  }

  $('#saveInputs').click(function () {
    var comment, department, categories, subcategories, resolution, workflow, bugstatus1, bugstatus2;
    var probstatement = listofreportemitems = analysis = firementLink = currentStatus = 'NA'
    var hoursWorked = 0.0;

    if (Attachments == undefined) {
      Attachments = 'No';
    }
    if (ForceRefreshed == undefined) {
      ForceRefreshed = 'No';
    }

    probstatement = $('#ainput').val();
    listofreportemitems = $('#binput').val();
    analysis = $('#cinput').val();
    firementLink = $('#dinput').val();
    currentStatus = $('#ginput').val();
    hoursWorked = $('#hinput').val();

    comment = "Problem Statement - " + probstatement + "\nList all reported items - " + listofreportemitems + "\nAnalysis - " + analysis + "\nFiremem Link - " + firementLink + "\nItems force refreshed? " + ForceRefreshed + "\nAttachments as required - " + Attachments + "\nCurrent production status - " + currentStatus;
    department = $('#cf_department').val();
    categories = $('#cf_rca_categories').val();
    subcategories = $('#cf_rca_sub_categories').val();
    workflow = $('#cf_workflow_status').val();
    bugstatus1 = $('#cf_bug_status').val();
    bugstatus2 = $('#cf_resolution').val();

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeStatus",
        enteredComment: comment,
        enteredDepartment: department,
        enteredCategories: categories,
        enteredSubCategories: subcategories,
        enteredWorkflow: workflow,
        enteredBugstatus1: bugstatus1,
        enteredBugstatus2: bugstatus2,
        hoursWorked: hoursWorked,
        clickedSubcategories: selectedArrayInputs,
      });
    });
  });
});


function checkFormSubmited() {
     var component = document.changeform.component.value;

     if (component == 'IAE-Data Agent' || component == 'IAE - MFA' || component == 'IAE') {

         var yodleeWrkFlow = document.changeform.cf_workflow.value;
         if (yodleeWrkFlow == '---') {
             document.changeform.cf_workflow.value = 'IAE';
         }
         var wrkFlow = document.changeform.cf_workflow_status.value;
         var agentStatus = document.changeform.cf_agent_status.value;
         var agentType = document.changeform.cf_agent_type.value;
         var resolution = document.changeform.cf_resolution1.value;
     var resolutionIAE = document.changeform.cf_iae_resolution.value;
         var rcaEAE = document.changeform.cf_rca.value;
     var rcaParent_IAE = document.changeform.cf_rca_categories.value;
     var rcaChild_IAE = document.changeform.cf_rca_sub_categories.value;
         var analysisEffort = document.changeform.cf_analyst.value;
         var bugComplexity = document.changeform.cf_bug_complexity1.value;
         var description = document.changeform.comment.value;
         var dept = document.changeform.cf_department.value;
         var source = document.changeform.cf_backend_frontend.value;



         var tempMesaage = '';

     if (agentStatus == '---') {
             tempMesaage = 'Agent Status';
         }
         if (agentType == '---') {
             if (tempMesaage == '') {
                 tempMesaage = 'Agent Type';
             } else {
                 tempMesaage = tempMesaage + ", " + 'Agent Type';
             }
         }
         if (description == '') {
             if (tempMesaage == '') {
                 tempMesaage = 'Additional Comments';
             } else {
                 tempMesaage = tempMesaage + ", " + 'Additional Comments';
             }
         }
     
     
         if (wrkFlow == '---') {
             tempMesaage = 'Workflow Status';
             if (description == '') {
                 tempMesaage = tempMesaage + ", " + 'Additional Comments';
             }
             alert('Please provide the following fields: \n' + tempMesaage);
             return false;
         } else if (wrkFlow == 'Waiting - Code Review 1') {
             var whiteBoard = document.changeform.status_whiteboard.value;


             if (whiteBoard == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Whiteboard';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Whiteboard';
                 }
             }

             if (resolutionIAE == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Resolution';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Resolution';
                 }
             }
       
             if (rcaParent_IAE == '---') {
                 if (tempMesaage == '') {
                     tempMesaage = 'RCA Categories';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'RCA Categories';
                 }
      }else if((rcaParent_IAE=='IAE - Account Issue' || rcaParent_IAE=='IAE - Holding Issue' || rcaParent_IAE=='IAE - MFA Issue' 
         || rcaParent_IAE=='IAE - Site Variation' || rcaParent_IAE=='IAE - Site Temporary Issue' || rcaParent_IAE=='IAE - Statement Issue' 
         || rcaParent_IAE=='IAE - Transaction Issue' || rcaParent_IAE=='IAE - User Specific Issue' || rcaParent_IAE=='IAE - New Site Request'
         || rcaParent_IAE=='IAE - Data Quality') && rcaChild_IAE=='---'){
         if (tempMesaage == '') {
                     tempMesaage = 'RCA Sub Categories';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'RCA Sub Categories';
                 }
             }

             if (tempMesaage != '') {
                 alert('Please provide the following fields: \n' + tempMesaage);
                 return false;
             }
         } else if (wrkFlow == 'Waiting - Code Review 2') {
             var orgest = document.changeform.estimated_time.value;
             var reviewEfort = document.changeform.cf_reviewer.value;
             var reviewComment = document.changeform.cf_code_review_comments.value;
             if (reviewEfort == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Review Effort';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Review Effort';
                 }
             }
             if (reviewComment == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'TCR Comments';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'TCR Comments';
                 }
             }
             if (bugComplexity == '---') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Bug Complexity';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Bug Complexity';
                 }
             }
             if (orgest == '0.0') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Orig. Est';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Orig. Est';
                 }
             }
             if (tempMesaage != '') {
                 alert('Please provide the following fields: \n' + tempMesaage);
                 return false;
             }
         } else if (wrkFlow == 'Reviewed') {
             var reviewComment = document.changeform.cf_recomented_action.value;

             if (reviewComment == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'FCR Comments';
                 } else {
                     tempMesaage = tempMesaage + ", " + ' FCR Comments';
                 }
             }
             if (bugComplexity == '---') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Bug Complexity';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Bug Complexity';
                 }
             }
             if (tempMesaage != '') {
                 alert('Please provide the following fields: \n' + tempMesaage);
                 return false;
             }
         } else if (wrkFlow == 'Tools Not Working' || wrkFlow == 'Waiting - Verification') {
             if (tempMesaage != '') {
                 alert('Please provide the following fields: \n' + tempMesaage);
                 return false;
             }
         } else if (wrkFlow == 'Reviewed by Analyst') {
             tempMesaage = '';
             if (description == '') {
                 tempMesaage = 'Additional Comments';
             }
             if (analysisEffort == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Analysis Effort';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Analysis Effort';
                 }
             }
             if (tempMesaage != '') {
                 alert('Please provide the following fields: \n' + tempMesaage);
                 return false;
             }
         } else if (wrkFlow == 'Dependent on other teams' || wrkFlow == 'Reassigned' || wrkFlow == 'Closed') {
             var whiteBoard = document.changeform.status_whiteboard.value;


      if (resolutionIAE == ''){
        if (tempMesaage == '') {
                     tempMesaage = 'Resolution';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Resolution';
                 }
       }

             if (rcaParent_IAE == '---') {
                 if (tempMesaage == '') {
                     tempMesaage = 'RCA Categories';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'RCA Categories';
                 }
      }else if((rcaParent_IAE=='IAE - Account Issue' || rcaParent_IAE=='IAE - Holding Issue' || rcaParent_IAE=='IAE - MFA Issue' 
         || rcaParent_IAE=='IAE - Site Variation' || rcaParent_IAE=='IAE - Site Temporary Issue' || rcaParent_IAE=='IAE - Statement Issue' 
         || rcaParent_IAE=='IAE - Transaction Issue' || rcaParent_IAE=='IAE - User Specific Issue' || rcaParent_IAE=='IAE - New Site Request'
         || rcaParent_IAE=='IAE - Data Quality') && rcaChild_IAE=='---'){
         if (tempMesaage == '') {
           tempMesaage = 'RCA Sub Categories';
         } else {
           tempMesaage = tempMesaage + ", " + 'RCA Sub Categories';
         }
      }
       
             if (whiteBoard == '') {
                 if (tempMesaage == '') {
                     tempMesaage = 'Whiteboard';
                 } else {
                     tempMesaage = tempMesaage + ", " + 'Whiteboard';
                 }
             }


             if (tempMesaage != '') {
                 alert('Please provide the following fields: \n' + tempMesaage);
                 return false;
             }
         } else if (wrkFlow != '---') {
             if (description == '') {
                 alert('Please provide the following fields : \n' + 'Additional Comments');
                 return false;
             }
         }

         if (wrkFlow == 'Closed' || wrkFlow == 'Reassigned' || wrkFlow == 'Duplicate - Already Fixed' || wrkFlow == 'Dependent on other teams') {
             var confirmBox = 'If Workflow Status is ' + wrkFlow;
             if (source != 'Preventive Fixes' && dept == 'IAE') {
                 confirmBox = confirmBox + ' then Department should be CS.\r\n';
                 confirmBox = confirmBox + 'Do you want to proceed without updating Department?';
                 return confirm(confirmBox);
             }
         }

         var bugStat = document.changeform.bug_status.value;
         if (bugStat == 'RESOLVED') {
             var confirmBox = 'If BUG Status is ' + bugStat;
             if (source != 'Preventive Fixes' && dept == 'IAE') {
                 confirmBox = confirmBox + ' then Department should be CS.\r\n';
                 confirmBox = confirmBox + 'Do you want to proceed without updating Department?';
                 return confirm(confirmBox);
             }

             if (wrkFlow != 'Closed' && wrkFlow != 'Reassigned' && wrkFlow != 'Duplicate - Already Fixed' && wrkFlow != 'Dependent on other teams') {
                 confirmBox = confirmBox + ' then Workflow Status shouldn\'t be ' + wrkFlow + '.\r\n';
                 confirmBox = confirmBox + 'Do you want to proceed without updating Workflow Status?';
                 return confirm(confirmBox);
             }
         } else if ((wrkFlow == 'Closed' || wrkFlow == 'Duplicate - Already Fixed') && (bugStat != 'RESOLVED' && bugStat != 'CLOSED')) {
             alert('If Workflow Status is ' + wrkFlow + ' then BUG Status shouldn\'t be ' + bugStat + '.');
             return false;
         }
         var priority = document.getElementById('priority').value;
         var bugSeverity = document.getElementById('bug_severity').value;

         if (priority == 'P1' || bugSeverity == 'blocker') {
             var select = document.getElementById('cc');
             var txt;
             var i;
             for (i = 0; i < select.length; i++) {
                 txt = txt + "\n" + select.options[i].value;
             }

             if (txt.indexOf("praj") < 0) {
                 document.getElementById("newcc").value = 'praj';
                 var r = confirm("Please click on OK to send mail to YI Escalation Managers If you are changing the bug Priority or Serverity");

                 if (r == true) {
                     var url = 'mailto:YI-Escalations@yodlee.com?subject=!High Importance, The Bug Serverity changed to Blocker for ';
                     var id = document.getElementById('title').innerText;
                     if (id.indexOf("undefined") < 0) {
                         url = url + id;
                     }
                     window.open(url, "_blank");
                 }
             }
         }
     }

     var bugStatus = document.changeform.bug_status.value;
     if (bugStatus == 'RESOLVED') {
         var bugFixedDate = document.changeform.cf_bug_fixed_on.value;
         if (bugFixedDate == '') {
             var d = new Date();
             var curr_date = d.getDate();
             var curr_month = d.getMonth() + 1;
             var curr_year = d.getFullYear();
             var date = curr_year + '-' + curr_month + '-' + curr_date;
             document.changeform.cf_bug_fixed_on.value = date;
         }
     } else if (bugStatus == 'REOPENED') {
         document.changeform.cf_bug_fixed_on.value = '';
     }

     if (document.changeform.cf_department.value == "---" && document.getElementById('bug_status').value == 'RESOLVED') {
         alert('Department Field is Mandatory Please select the Valid Value');
         return false;
     }
     if (document.changeform.cf_release_notes.value == 'Yes' && document.changeform.cf_comments_release_notes.value == '') {
         alert('Please Add Comments for Release Notes');
         return false;
     }
     if (document.changeform.cf_build_fixed_new.value == "---" && document.getElementById('bug_status').value == 'RESOLVED') {
         alert('Build Fixed is mandatory if STATUS=RESOLVED');
         return false;
     }

   // commenting below code as this will not be used henceforth with new RCA categories introduced - 28-11-2016.
     //if (document.changeform.cf_rca.value == 'IAE-Information Only' && document.changeform.cf_resolution1.value != 'Information Only') {
         //alert("Resolution provided must be Information Only, when the RCA IAE is IAE-Information Only");
         //return false;
     //}
   
     return true;
 }
