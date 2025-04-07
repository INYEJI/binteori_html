const email = "test!naver.com";
console.log(email.indexOf("@"));

const date = new Date(2025,3,4,11,17,20);
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${ date.getSeconds()}`;
console.log(dateFormat);