var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
var colors = document.getElementById('colors');

    
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div style="color:'+ colors.value +' " >' + text + '</div>';
  evt.preventDefault();
}, false);
//the if and then makes it to strike the firsr time then earse it when you click it the second time

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  if(tar.style.textDecoration === "line-through"){
   tar.parentNode.removeChild(tar);
}else{
    tar.style.textDecoration = "line-through"
}
  evt.preventDefault();
}, false);

