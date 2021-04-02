chrome.runtime.connect({
  name: "popup"
});


$(function () {

  chrome.runtime.sendMessage('pageActionClicked');

  chrome.runtime.sendMessage({
    method: "getStatus"
  }, function (res) {
    $("option[value|='" + res.selector1 + "']").attr('selected', 'selected');
    $("option[value|='" + res.selector2 + "']").attr('selected', 'selected');
    $("option[value|='" + res.selector3 + "']").attr('selected', 'selected');
    for (i = 0; i < (res.selector4).length; i++) {
      $("option[value|='" + res.selector4[i] + "']").attr('selected', 'selected');
    }
    return true;
  });


  $('#saveInputs').click(function () {
    var comment;
    comment = "Problem Statement - " + $('#ainput').val() + ", " + "List all reported items - " + $('#binput').val() + ", " + "Analysis - " + $('#cinput').val() + ", " + "Firemem Link - " + $('#dinput').val() + ", " + "Items force refreshed? " + $('#einput').val() + ", " + "Attachments as required - " + $('#finput').val() + ", " + "Current production status - " + $('#ginput').val();

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeStatus",
        enteredComment: comment
      });
    });
  });

  var arrayOfSelecedIDs = [];

  $('.btn2').click(function () {
    var element = $(this).attr('id');
    if (element == '_iae_resolution') {
      var elements = document.getElementById('cf_iae_resolution').childNodes;
      for (i = 0; i < elements.length; i++) {
        if (elements[i].selected) {
          arrayOfSelecedIDs.push(elements[i].value)
        }
      }
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          todo: "changeMultipleOptions",
          clickedInput: arrayOfSelecedIDs,
          clickedButton: element,
        });
      });
    } else {
      color = $('#' + 'cf' + element).val();
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          todo: "changeOptions",
          clickedInput: color,
          clickedButton: element,
        });
      });
    }
  });
});