

var counter =0;
function printValue(divId, value){
document .getElementById(divId).innerHTML = value;
}

printValue("counter", 0);

document. getElementById("inc").addEventListener("click",
increment,decrement);

function increment (){
counter++;
printValue("counter", counter) ;

}

function decrement (){
counter--;
printValue("counter", counter) ;

}
