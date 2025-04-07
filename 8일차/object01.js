const person = {
    name : ["Hong", "Gildong"],
    age : 20,
};

console.log(person.name[0])
console.log(person.age)

const person1 = {
    name:{
        firstName : "Gildong",
        lastName : "Hong"
    },
    likes:["apple","samsung"],
    printHello:function() {
        return "Hello";
    }
};
console.log(person1["name"]);
console.log(person1["name"]["firstName"]);

const person2 = {};
person2.name = {firstName : "Gildong", lastName : "Hong"};
person2.likes = ["apple","samsung"];
person2.printHello = function(){ return "hello"; }