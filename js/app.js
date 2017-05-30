//Model
var state = {
	itemsList: ["Blueberries", "Coffee", "Apples"];

};


function addItems(state, item) {
	state.itemsList.push(item);
};

function removeItems(state, item) {
	state.itemsList.splice();	
};









//View
function renderList() {
	var buildHtml = "<ol>"
	  //Build HTML output for list// 
	  for(var i=0;i < listItems.length;i++) {
	    
	    buildHtml+="<li>" + listItems[i] + "</li>"
	    
	  } 
	  //render results of list to the DOM
	  document.getElementById("listItems").innerHTML=buildHtml; 
	  
	};











//Controller
























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
