//promises are objects
//promises are used to handle asynchronous operations
//promises are in 3 states
//pending
//fulfilled
//rejected

// will print whatever is passed to resolve and reject
var temp = new Promise(function(resolve, reject) {
    var learnDrive = true;
    if (learnDrive) {
        resolve("promise is fulfilled");
    }
    else {
        reject("promise is rejected");
    }
});
temp.then(function(resolve) {
    console.log(resolve);
}).catch(function(reject) {
    console.log(reject);
});

//example 2
var functions = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + "Learnt functions")
    });
}
var callBacks = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + "Learnt callbacks")
    });
}
var promises = function(message){
    return new Promise(function(resolve, reject){
        resolve(message + "Learnt promises")
    });
}
functions().then(function(result){
    return callBacks(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("good to go" + result);
});