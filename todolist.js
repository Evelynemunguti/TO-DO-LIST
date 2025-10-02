const cont = document.getElementsByClassName("container");
const type = document.getElementsByClassName("type");
const dataEl = document.getElementById("data-el");
const saveEl = document.getElementById("save-el");
const listEl = document.querySelector(".list-el");


saveEl.addEventListener("click",function(){
    let todo=dataEl.value;
    

    if(todo===""){
        alert("Please enter a ask");
    }
   else{
    listEl.innerHTML += `<div style ="
    padding:7px;
    margin: 5px 0;
    border: none;
    border-radius: 10px;
    background-color: rgb(204, 226, 245);">
    ${todo} 
    </div>`;

    dataEl.value="";
   }
    

})
    


