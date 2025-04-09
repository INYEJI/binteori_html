//동기방식 (순서대로)

console.log("========동기방식=======");
console.log("1.라면 장보기");
console.log("2.물 끓이기");
console.log("3. 끓는 물에 라면, 스프 넣고 익히기");
console.log("4. 완성");



//비동기방식
console.log("=====비동기방식=====");
setTimeout(()=>{
    console.log("1.라면 장보기")
} , 3000);
console.log("2.물 끓이기");
console.log("3. 끓는 물에 라면, 스프 넣고 익히기");
console.log("4. 완성");



//1.callback 콜백함수 = 비동기함수수
function getData(callback){
    setTimeout(()=> {callback('콜백으로 처리한 데이터')},1000)
}

getData( (result) => {console.log(result);})
console.log("두 번째 문장.....")

/*
프로미스(promis) - 비동기 작업을 더욱 깔끔하게 처리할 수 있도록 해준다.
성공시 .then(), 실패시 .catch()로 처리한다! 
*/
function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
            resolve('Promise로 처리한 데이터');
        },1000);
    })
}
getData().then( (result)=> console.log(result));
getData().catch( (error) => console.log(error));

/*
async/await :
프로미스를 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법
비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다.
*/
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ 
            resolve('async/await로 처리한 데이터');

        },1000);
    })
}

async function fetchData() {
    try{
        const result = await getData();
        console.log(result);
    } catch(error){
        console.log(error)
    }
}
fetchData();

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example(){
    console.log("시작!");
    await wait(3000);
    console.log("3초 후 실행 됩니다.");
}
example()

function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "홍길동" }), 1000);
    });
}

async function loadUser() {
    console.log("시작");
    const user = await getData();
    console.log("사용자 정보: " + user);
}
loadUser();