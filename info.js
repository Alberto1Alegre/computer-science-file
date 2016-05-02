var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

item1.addEventListener("click", function(){
    info1.innerHTML = "<li>Soccer</li> <li>playing with ball</li> <li>kick the ball</li> <li>soccor has been banned</li>";
    
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "<li>fastest car in the world</li> <li>it goes 270.49 mph</li> <li>it is the 5th most expensive car</li> <li>The brakes can withstand heat of up to 1800°C</li>";

});
item3.addEventListener("click", function(){
    info1.innerHTML = "<li>it is a south asian tiger</li> <li>350 tiger left in the world</li> <li>Tiger are cool</li>";
   
   
});
item4.addEventListener("click", function(){ 
    info1.innerHTML = "<li>cute cat</li> <li>cats have nine lives</li> <li>cats land on there feet</li> <li>cats have the same DNA as lions and tigers</li>";
    
});