/*
스프레드 연산자 ...
*/

let arrA = [1,2,3];
let arrB = [4,5,6,...arrA]; //그냥 arrA를 넣는 경우, 4,5,6,[1,2,3]이 출력
console.log(arrB);

let objA = {
    a:1,
    b:2,
};

let objB = {
    ...objA,
    c:3,
};
console.log(objB);

let func = (a,b,c) =>  console.log(a,b,c);
let arr =[10,20,30];
func(...arr);

/*
rest 매개변수
*/
let func2 = (...rest) => console.log(rest);
func2(1,2,3);
func2(1,2,3,4);
func2(1,2,3,4,5);



let func3 =(...rest) =>{
    let sum =0;
    rest.forEach(i => sum += i);
    console.log(sum);

}

let func4 = (param, ...rest) => console.log(param,rest);

func4(1,2,3);
func4(1,2,3,4);
func4(1,2,3,4,5,6);