
 document.addEventListener('DOMContentLoaded', function() {  
 	 chrome.tabs.getSelected(null, function(tab) {
	   
        chrome.tabs.sendRequest(tab.id, {
            action: 'getSummary'
        }, function(response) {
            if (response == null) {
			//	alert('no respose');
               } else {
                var wbVar = response.wb;
                var rdateVar = response.rd;
                var bugagevar = response.ba;
                
				document.getElementById('pagetitle').innerText = wbVar;
				document.getElementById('bugage').innerHTML =bugagevar ;
                    
            }
        });
    });
});