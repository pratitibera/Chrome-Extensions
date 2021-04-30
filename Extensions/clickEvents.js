$(function(){
	$('#JN_VERIFIED_EXTRA').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_VERIFIED_EXTRA") && !pagetitlevar.includes("JN_VERIFIED"))
            pagetitlevar+= " JN_VERIFIED_EXTRA ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})

$(function(){
	$('#JN_VERIFIED').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_VERIFIED"))
            pagetitlevar+= " JN_VERIFIED ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})

$(function(){
	$('#JN_TRIAGED').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_TRIAGED"))
            pagetitlevar+= " JN_TRIAGED ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})

$(function(){
	$('#ERROR_CODE').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("ERROR_CODE"))
            pagetitlevar+= " ERROR_CODE ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})

$(function(){
	$('#JN_COULD_NOT_ANALYSE').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_COULD_NOT_ANALYSE"))
            pagetitlevar+= " JN_COULD_NOT_ANALYSE ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_INCORRECT_ANALYSIS').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_INCORRECT_ANALYSIS"))
            pagetitlevar+= " JN_INCORRECT_ANALYSIS ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_FILED_BUG_TTR_RAISED').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_FILED_BUG_TTR_RAISED"))
            pagetitlevar+= " JN_FILED_BUG_TTR_RAISED ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_DUPLICATE_BUGS').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_DUPLICATE_BUGS"))
            pagetitlevar+= " JN_DUPLICATE_BUGS ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})

$(function(){
	$('#JN_NO_DQ').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_NO_DQ"))
            pagetitlevar+= " JN_NO_DQ ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_OUT_OF_SCOPE').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_OUT_OF_SCOPE"))
            pagetitlevar+= " JN_OUT_OF_SCOPE ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_DQ_OK').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_DQ_OK"))
            pagetitlevar+= " JN_DQ_OK ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_NO_DQ_DUP_TX').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_NO_DQ_DUP_TX"))
            pagetitlevar+= " JN_NO_DQ_DUP_TX ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_NO_DQ_INCORRECT_BAL').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_NO_DQ_INCORRECT_BAL"))
            pagetitlevar+= " JN_NO_DQ_INCORRECT_BAL ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_NO_DQ_MISSING_ACCT_DTLS').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_NO_DQ_MISSING_ACCT_DTLS"))
            pagetitlevar+= " JN_NO_DQ_MISSING_ACCT_DTLS ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_NO_DQ_MISSING_TX').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_NO_DQ_MISSING_TX"))
            pagetitlevar+= " JN_NO_DQ_MISSING_TX ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#JN_OUT_OF_SCOPE').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
            if(!pagetitlevar.includes("JN_OUT_OF_SCOPE"))
            pagetitlevar+= " JN_OUT_OF_SCOPE ";

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#execute').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
			var pagetitlevar=document.getElementById('pagetitle').innerText;
			if(!pagetitlevar.toUpperCase().includes("JN_TRIAGED")){
				$('#errmsg').text('Keyword JN_TRIAGED is absent!!');
			}else{
			chrome.tabs.executeScript(null,
                {code:"document.getElementById('status_whiteboard').value='"+pagetitlevar+"'"})
			}
				})
	})

})

$(function(){
	$('#date5').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,5);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date0').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,0);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date1').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,1);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date2').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,2);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date3').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+=  " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,3);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date4').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,4);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date6').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,6);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date7').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,7);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
$(function(){
	$('#date8').click(function(){
		chrome.storage.local.get('pagetitle',function(bug){
            var pagetitlevar=document.getElementById('pagetitle').innerText;
            var currdate=new Date();
            if(!pagetitlevar.includes("ETA")){
                pagetitlevar+= " Triaged:"+formatDate(currdate,0)+",ETA:"+formatDate(currdate,8);
            }
            

			chrome.storage.local.set({'pagetitle':pagetitlevar})
			$('#pagetitle').text(pagetitlevar);
		})
	})

})
function formatDate(today,days)
{
    var count = 0;
    while (count < days) {
        today.setDate(today.getDate() + 1);
        if (today.getDay() != 0 && today.getDay() != 6) // Skip weekends
            count++;
    }
    
	var dd = today.getDate();
	//The value returned by getMonth is an integer between 0 and 11, referring 0 to January, 1 to February, and so on.
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	if(dd<10) 
	{
		dd='0'+dd;
	} 
	if(mm<10) 
	{
		mm='0'+mm;
	} 
	today = dd+'-'+mm+'-'+yyyy;
	return today;
}