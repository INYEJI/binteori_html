console.log('확장 프로그램으로 출력하기')

var a = 10;
var b = 20;
var add = a+b;

console.log(add);

let str = 10.2;
console.log(typeof(str))

let studentScore = {
    kor : 90,
    eng : 80,
    math : 88
}

console.log(studentScore.kor);

console.log("---------------------------------")


let score = 65;
let grade = score>=90 ? 'A' : (score>=80 ? 'B' :(score>=70) ? 'c' :'d');
console.log(score);
console.log(grade);

console.log("---------------------------------")

let sum = 0;
for(let i = 0 ; i<=100; i++){
    sum += i;
}
console.log(sum)

console.log("--------------------------------")


for (let num = 100; num <= 999; num++) {
    let n1 = Math.floor(num / 100);          
    let n2 = Math.floor((num % 100) / 10);    
    let n3 = num % 10;                          

    if ((n1 ** 3 + n2 ** 3 + n3 ** 3) === num) {
        console.log(num); 
    }
}
