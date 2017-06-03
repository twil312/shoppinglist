//Model
var state = {
	itemsList: [""]

};


function addItems(state, item) {
	state.itemsList[""].push(item);
};

function removeItems(state, item) {
	state.itemsList.splice();	
};









//View
function renderList() {
	var buildHtml = "<ol>"
	  //Build HTML output for list// 
	  for(var i=0;i < itemsList.length;i++) {
	    
	    buildHtml+="<li>" + itemsList[i] + "</li>"
	    
	  } 
	  //render results of list to the DOM
	  document.getElementsByClassName("itemsList")[0].innerHTML=buildHtml; 
	  
	};











//Controller

document.getElementById("submitButton").addEventListener("click", function() {
	event.preventDefault();
	addItems();
});



document.getElementById("clearButton").addEventListener("click", function() {
	 
});





















/*	var listArray= [];
	//Submit button performs action
	document.getElementById("submit-button").onclick=function() {
	    //Value is taken from input field and sent to newtext
	    newText=document.getElementById("add-item").value;
	    listArray.push(newText)
	    renderList()
	    newText=document.getElementById("add-item").value=null;
	}

	document.getElementById("clear-button").onclick=function() {
	     document.getElementById("list-items").innerHTML=null;
	}
	      
	function renderList() {
	var buildHtml = "<ol>"
	  //Build HTML output for list// 
	  for(var i=0;i < listArray.length;i++) {
	    
	    buildHtml+="<li>" + listArray[i] + "</li>"
	    
	  } 
	  //render results of list to the DOM
	  document.getElementById("list-items").innerHTML=buildHtml; 
	  
	};


    
    function myFunction() {
    var str = "";
    var result = str.strike();
    document.getElementById("list-items").innerHTML = result;
} */
