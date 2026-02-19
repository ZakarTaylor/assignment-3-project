var x;
if (x == undefined){
    console.log("creating value...");
    x = 5;
    console.log("x's new value set to: " + x)
}
var company = {
    name: "YouTube",
    stats: {
        channels: 405034,
        videos: 170500340,
    },
    owner: {
        name: "susian",
        age: 36,
        hourlyPay: 5,
        workTime: 8
    },
};

console.log(company.owner)

function dialougueMaker(name){
    var func = function(dialougue){
        return name+": " + dialougue
    };
    
    return func
}

var dialougue = dialougueMaker("Bill");
console.log(dialougue("is my stove still on?"))

function Dog(name) {
  this.name = name;
}

Dog.prototype = function(){
    console.log(Dog(sam) + " likes barking! Bark!");
}


