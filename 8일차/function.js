(function init() {
    console.log("initialized!");
})();

(function sum(a,b) {
    console.log(a+b);
}) (10,20);

const result = (function (a,b ){
    function init(){
        return doSum(a,b);
    }
    function doSum(a,b){
        return a+b;
    }
    return init();
}) (10,20);
console.log(result)