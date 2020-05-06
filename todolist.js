const todobutton=document.querySelector(".todo-button");
const todolist=document.querySelector(".todo-list");
const todoinput=document.querySelector(".todo-input");
const filtertodo=document.querySelector(".filter-todo");


document.addEventListener("DOMContentLoaded",getfromstorage);
todobutton.addEventListener("click",addtodo);
todolist.addEventListener("click",deletetodo);
filtertodo.addEventListener("click",filtertl);



function addtodo(e){
    
    
    e.preventDefault();
    const newdiv=document.createElement("div");
    newdiv.classList.add("todo");

    const thelist=document.createElement("li");
    thelist.classList.add("todo-item");
    thelist.innerText=todoinput.value;
    newdiv.appendChild(thelist);
    savetlstorage(todoinput.value);
  
    const checkbuton=document.createElement("button");
    checkbuton.classList.add("complete-btn");
    checkbuton.innerHTML='<i class="fas fa-check"></i>';
    newdiv.appendChild(checkbuton);
    
    
    const trushbuton=document.createElement("button");
    trushbuton.classList.add("trash-btn");
    trushbuton.innerHTML='<i class="fas fa-trash"></i>';
    newdiv.append(trushbuton);
    
    todolist.appendChild(newdiv);
    todoinput.value="";
   

};

function deletetodo(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
     const todo=item.parentElement;
      todo.classList.add("fall");
       todo.addEventListener("transitionend",function(){
           todo.remove();
           const v=e.target.parentElement;
           const b=v.childNodes;
           const cn=b[0].textContent;
           removeFS(cn);
        });
    }
    
     if(item.classList[0]==="complete-btn"){
         const todo=item.parentElement;
         todo.classList.toggle("completed");
    }
    
    
    
}

function filtertl(e){
    const todos=todolist.childNodes;
    todos.forEach(function(t){
        switch(e.target.value){
            case "all":
                t.style.display="flex";
                break;
            case "uncompleted":
                if(t.classList.contains("completed")){
                    t.style.display="none"
                }else{
                    t.style.display="flex";
                }
                break;
                case "completed":
                if(t.classList.contains("completed")){
                    t.style.display="flexs"
                }else{
                    t.style.display="none";
                }
                break;
        }
        
        
    });
}


function savetlstorage(todo){
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }else{
          todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}



function savetlstorage(todo){
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}


function getfromstorage(todo){
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }else{
          todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(to){
         const newdiv=document.createElement("div");
    newdiv.classList.add("todo");

    const thelist=document.createElement("li");
    thelist.classList.add("todo-item");
    thelist.innerText=to;
    newdiv.appendChild(thelist);
    const checkbuton=document.createElement("button");
    checkbuton.classList.add("complete-btn");
    checkbuton.innerHTML='<i class="fas fa-check"></i>';
    newdiv.appendChild(checkbuton);
   const trushbuton=document.createElement("button");
    trushbuton.classList.add("trash-btn");
    trushbuton.innerHTML='<i class="fas fa-trash"></i>';
    newdiv.append(trushbuton);
    todolist.appendChild(newdiv);
    
   

        
    })
    
}

function removeFS(cn){
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    localStorage.removeItem("todos");
    let i=0;
    todos.forEach(function(el){
        
        if(el===cn){
            todos.splice(i,1);
        }
        i++;
    })
    localStorage.setItem("todos",JSON.stringify(todos));
    
}
