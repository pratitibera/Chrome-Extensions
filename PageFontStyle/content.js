chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = '#' + request.clickedColor;               
        $('.inputfield').css('font-style','italic');
         $('#avalue').val(addColor);

         // var v = $('.input').val(addColor);

         // console.log(v)
    }
});