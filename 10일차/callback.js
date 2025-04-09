/*
callback 함수
*/

//함수,익명함수,람다함수,즉시실행함수

function parentFunc(callback){
    console.log("parent");
    callback();
}
parentFunc(childFunc);

//매개변수 인자값을 함수자체로 전달

function repeat(count){
    for(let i=0; i<count; i++)
        console.log(i+1);
}
repeat(5);

function repeatDouble(count){
    for(let i=0; i<count; i++){
        console.log((i+2)*2);
    }
}
repeatDouble(5);

function repeatThree(count){
    for(let i=0; i<count; i++){
        console.log((i+2)*3);
    }
}
repeatThree(5);

console.log("----------------------------");

function repeatAll(count,callback){
    for(let i=0; i<count; i++){
        callback(i+1);
    }
}

function origin(count){
    console.log(count);
}
//repeatAll(5,count => console.log(count))
//=repeatAll(5,origin)

function double(count){
    console.log(count*2);
}

function three(count){
    console.log(count*3);
}