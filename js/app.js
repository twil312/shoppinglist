
//var item = document.getElementById("addItem");
var check = document.getElementById("checkMark");

var state = {
	itemsList: ["milk", "cheese"]
};

var listItemID = 'data-list-item-id';

 
function handleItemAdds() {
	$("#submitButton").click(function() {
		event.preventDefault();
		var newItem = $("#addItem").val();
		console.log(newItem);
		addItems(state, newItem);
		renderList(state, item);
	});
};

function handleItemDeletes() {
	//deletes item from itemsList
	$(".deleteItem").click(function() {
		event.preventDefault();
		//use jquery to ID the data attribute for the item 
		removeItems(state, indexNumber);
		updateItem(state, itemIndex, newItemState);
		//another event listener functon
	};	
};

function addItems(state, item) {
	state.itemsList.push(item);
};

function removeItems(state, indexNumber) {
	state.itemsList.splice(indexNumber, 1);	
};

function updateItem(state, itemIndex, newItemState) {
	state.items[itemIndex] = newItemState;
}

function renderList(state, item) {
	var buildHtml = "<ul>";
	  //Build HTML output for list// 
	  for(var i=0;i < state.itemsList.length;i++) {
	    
	    buildHtml+="<div class='listCell'>" + "<li>" + "<button class='xButton'>" + "<i class='fa fa-check' aria-hidden='hidden'>" + "</button>" + "</i>" + state.itemsList[i] + "<button class='deleteItem'>" + "X" + 
	    "</button>" + "</li>" + "</div";
	    
	  } 
	  //render results of list to the DOM
	  document.getElementById("itemsList").innerHTML=buildHtml; 
	  
};




























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
