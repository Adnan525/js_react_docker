// sinngle class can be used by multiple html elements
function inputFun()
{
    var x = document.getElementsByClassName("c1");
    for(var i = 0; i < x.length; i++){
        x[i].style.color = "red";
    }
}