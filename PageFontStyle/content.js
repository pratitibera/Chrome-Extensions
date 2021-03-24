chrome.runtime.sendMessage({todo: "showPageAction"});
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