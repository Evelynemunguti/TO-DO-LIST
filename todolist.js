const cont = document.getElementsByClassName("container");
const type = document.getElementsByClassName("type");
const dataEl = document.getElementById("data-el");
const saveEl = document.getElementById("save-el");
const listEl = document.getElementById("list-el");


saveEl.addEventListener("click",function(){
    let todo=dataEl.value;
    

    if(todo===""){
        alert("Please enter a ask");
    }
    else{
        console.log(todo);
    }

})
    


