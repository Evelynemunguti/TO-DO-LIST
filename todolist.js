const cont = document.getElementsByClassName("container");
const type = document.getElementsByClassName("type");
const dataEl = document.getElementById("data-el");
const saveEl = document.getElementById("save-el");
const listEl = document.querySelector(".list-el");

let todos= JSON.parse(localStorage.getItem("todos")) ||[];

function renderTodos() {
    listEl.innerHTML = ""; 
    todos.forEach(todo => {
        listEl.innerHTML += `
            <div style="
                padding:7px;
                margin: 5px 0;
                border: none;
                border-radius: 10px;
                background-color: rgb(204, 226, 245);">
                ${todo} 
            </div>
        `;
    });
}

// Load existing todos on page load
renderTodos();



saveEl.addEventListener("click",function(){
    let todo=dataEl.value;
    

    if(todo===""){
        alert("Please enter a task");
    }
   else{
    todos.push(todo); // add new todo
    localStorage.setItem("todos", JSON.stringify(todos)); // save updated array
    renderTodos(); // re-render list
    dataEl.value = ""; 
    
    
   }
})


    


