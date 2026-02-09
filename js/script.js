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
