var fail = $('<span>You will must enter something</span>');
var button = $("<button class = 'button__delete'>Delete all items</button>");
function todoList(){
	var text = $('input').val();
	var elem = $("<li></li>").text(text);
	if(text!==""&&text!==" "){
		$('ul').append(elem);
		fail.remove();
		$('ul').after(button);
		function del(){
			$('ul').empty();
			button.remove();
		}
		button.on("click",del);
	}
	else{
		$('ul').before(fail);
	}
}
$('button').eq(0).on("click",todoList);