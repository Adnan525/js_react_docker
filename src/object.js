//literal object
var car = {
    make : "Alfa Romeo",
    model : "Giulia",
    price : 90000,

    //method
    engineType : function(){
        return "V6";
    }
}
document.write(car.engineType());

// object constructor
function carObjCons(make, model, price)
{
    this.make = make;
    this.model = model;
    this.price = price;
    this.engineType = function(){
        return "V6";
    }
}
var car2 = new carObjCons("Alfa Romeo", "Giulia", 90000)
document.write("<br>")
document.write(car2.make);

// can add object property after object creation
car2.color = "red";
document.write("<br>")
document.write(car2.color);
