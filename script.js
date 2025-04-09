(function(){
const spanEl = document.querySelector("main h2 span");
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer','UX Designer','Back-End Developer'];
let index=0;
let currenTxt = txtArr[index].split('');

function writeTxt(){
    spanEl.textContent += currenTxt.shift();
    if(currenTxt.length !==0){
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    }else{
        currenTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    currenTxt.pop();
    spanEl.textContent = currenTxt.join("");
    if(currenTxt.length !==0 ){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));
    }else{
        index = (index + 1) % txtArr.length;
        currenTxt = txtArr[index].split("");
        writeTxt();
    }
}
writeTxt();
})();

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollY = this.window.pageYOffset;
    if(browerScrollY > 0){
        headerE1.classList.add("active");
    }else{
        headerE1.classList.remove("active");
    }
});

const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerE1.classList.add("active");
    }else{
        headerE1.classList.remove("active");
    }
}

const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browerScrollY = window.pageYOffset;
    const targetScrolly = targetEl.getBoundingClientRect().top + browerScrollY;
    window.scrollTo({ top: targetScrolly, behavior: 'smooth'});
}

const scrollMoveEl = document.querySelectorAll("[data-animatioin-scroll='true']");
for(let i=0; i<scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}