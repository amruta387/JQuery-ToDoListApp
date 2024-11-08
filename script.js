function newItem(){

    //jQuery
    //add new item in the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

     // Crossing out an done items
    function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
    $('#list').sortable();
    
     // Delete button "X": 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
        li.addClass("delete")
    }
    
}