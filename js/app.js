var newText=document.getElementById("add-item").value;
	var listArray= [];
	//Submit button performs action
	document.getElementById("submit-button").onclick=function() {
	    //Value is taken from input field and sent to newtext
	    newText=document.getElementById("add-item").value;
	    listArray.push(newText)
	    renderList()
	}
	      
	function renderList() {
	var buildHtml = "<ul>"
	  //Build HTML output for list// 
	  for(var i=0;i < listArray.length;i++) {
	    
	    buildHtml+="<li>" + listArray[i] + "</li>"
	    
	  } 
	  //render results of list to the DOM
	  document.getElementById("list-items").innerHTML=buildHtml;  
	};


