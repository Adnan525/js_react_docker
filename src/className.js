// sinngle class can be used by multiple html elements
function inputFun()
{
    var x = document.getElementsByClassName("c1");
    for(var i = 0; i < x.length; i++){
        x[i].style.color = "red";
    }
}

// id to access a since element
// tag name to access all elements of a tag
// class name to access all elements of a class