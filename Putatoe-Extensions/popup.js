$(function(){

	var dataval = ["", "", "", ""];

	chrome.runtime.sendMessage({ method: "getStatus", data: dataval }, function (res) {
		//alert(res.method);
		$('#ainput').val(res.data[0]);
		$('#binput').val(res.data[1]);
        $('#cinput').val(res.data[2]);
		$('#dinput').val(res.data[3]);
return true;
});

    
   $('.changebtn').click(function(){ 
   	var element = $(this).attr('id');

   color = $('#'+ element + 'input').val();

    
         chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color, clickedElement: element });
        });
   });
});