// function callBack(call){
//     call();
// }

function f1(){
    console.log("f1");
}
function f2(){
    console.log("f2");
}
function f3(){
    console.log("f3");
}
setTimeout(f1, 2000);
f2();
f3();
// function passed as argument will be executed later
function person(callBackFunction){
    setTimeout(function(){
        console.log("person function");
        callBackFunction();
    }, 3000);
}
function person2(){
    console.log("person2 function");
}
person(person2);