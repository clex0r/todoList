// toggle style for done todos
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
//delete todo with X
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  //stop all other events
  event.stopPropagation();
});
//ad To-Do
$("input[type='text']").on("keypress", function(event){
  if (event.which === 13) {
  //grab input
  var todoText = $(this).val();
  //reset input field
  $(this).val("");
  //create new li and add to ul
  $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ todoText + "</li>")
  }
});
