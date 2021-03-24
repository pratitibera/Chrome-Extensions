chrome.runtime.sendMessage({todo: "showPageAction"});

// let i = 0;

// var dataval;

// dataval[0] = document.getElementById('avalue').value;
// dataval[i++] = document.getElementById('bvalue').value;
// dataval[i++] = document.getElementById('cvalue').value;
// dataval[i++] = document.getElementById('dvalue').value;

//alert(document.getElementById('avalue').value);

var dataval = [document.getElementById('avalue').value, document.getElementById('bvalue').value, document.getElementById('cvalue').value, document.getElementById('dvalue').value];
chrome.runtime.sendMessage({todo: "insertvalues", data: dataval});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = request.clickedColor;
        var elementselected = request.clickedElement;               
        $('.inputfield').css('font-style','italic');
         $('#' + elementselected + 'value').val(addColor);

         // var v = $('.input').val(addColor);

         // console.log(v)
    }
});