const btnnn=document.querySelector("#wedo");
const we=document.querySelector("#wecan");
let b=true;
btnnn.addEventListener("click",()=>{
    if (b)
    {
        b=false;
        we.style.display="inline";
    }
    else{
        b=true;
        we.style.display="none";
    }
    })
