var petName = "Dog";
function setPetname() {
    var petName = "cat";
    console.log("Inside functionpetname ::" + petName);
}
setPetname();
console.log("Outside functionpetname ::" + petName);
var index = 0;
for (index = 0; index <= 5; index++) {
    console.log("Index value inside for loop ::" + index);
}
console.log("Index value Outside for loop ::" + index);
var indexlet = 0;
for (var indexlet_1 = 0; indexlet_1 <= 5; indexlet_1++) {
    console.log("Index Let value inside for loop ::" + indexlet_1);
}
console.log("Index Let value Outside for loop ::" + indexlet);
function display() {
    var msg = "Hello Mageswaran";
    {
        var msg = "Welcome to California";
        console.log("Inside Block msg value:  " + msg);
    }
    console.log("Outside Block msg value:  " + msg);
}
display();
var person;
person = ["apple", "orange", "banana", 123, true];
console.log(person);
console.log(person[0]);
function wish(name, msg) {
    if (msg === void 0) { msg = "HI"; }
    return "Hello " + name + " " + msg;
}
console.log(wish("GA ", "Mageswaran"));
console.log(wish("GA "));
function greet(msg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return "Hello " + name + " " + msg;
}
greet("GA ", "Mageswaran", "Ram", "Raj", "Mageswaran");
greet("GA ", "Mageswaran", "Ram", "Raj", "Mageswaran", "Mageswaran1", "Mageswaran2", "Mageswaran3", "Mageswaran4", "Mageswaran5");
