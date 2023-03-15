let nums=document.querySelectorAll(".stats  .number");
let section=document.querySelector(".stats");
let strated=false;// function is ? no

window.onscroll=function(){
    if(window.scrollY >= section.offsetTop )
    {
        if(!strated){
            nums.forEach((num)=> stratcount(num));
        }
        strated=true;
    }
};


function stratcount(el){
    let goal=el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal)
        {
            clearInterval(count);
        }
    },4000/goal);
};
