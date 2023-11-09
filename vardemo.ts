var petName:string = "Dog";
function setPetname(){
    var petName:string = "cat";
    console.log("Inside functionpetname ::" + petName);
}
setPetname();
console.log("Outside functionpetname ::" + petName);

var index=0;
for(index=0;index<=5;index++){
    console.log("Index value inside for loop ::" +index);
}
console.log("Index value Outside for loop ::" +index);

var indexlet=0;
for(let indexlet=0;indexlet<=5;indexlet++){
    console.log("Index Let value inside for loop ::" +indexlet);
}
console.log("Index Let value Outside for loop ::" +indexlet);


function display(){
    var msg:string = "Hello Mageswaran";

    {
        var msg:string ="Welcome to California";
        console.log("Inside Block msg value:  " +msg);
    }
    
    console.log("Outside Block msg value:  " +msg);
}

display();

let person:Array<string| number|any>;
person = ["apple", "orange", "banana",123, true];
console.log(person);
console.log(person[0]);

function wish(name:string, msg:string="HI"):string{
    return "Hello " + name + " " + msg;
}
console.log(wish("GA ","Mageswaran"));
console.log(wish("GA "));

function greet(msg:string, ...name:string[]):string{
   
    return "Hello " + name + " " + msg;
}
greet("GA ", "Mageswaran","Ram","Raj","Mageswaran");
greet("GA ", "Mageswaran","Ram","Raj","Mageswaran","Mageswaran1","Mageswaran2","Mageswaran3","Mageswaran4","Mageswaran5");

function wish1(name:string, msg:string="HI"):string{
    return "Hello " + name + " " + msg;
}
console.log (wish1("GA ", "Mageswaran"));