$(function(){
	var value = $('#avalue').val()
    
   $('.changebtn').click(function(){ 
   	alert(value);
   	var element = $(this).attr('id');

   color = $('#'+ element + 'input').val();

    
         chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color, clickedElement: element });
        });
   });
});