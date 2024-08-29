const addbtn = document.querySelector("#add-btn");
const newtaskinput = document.querySelector("#wrapper input");
const taskscontainer = document.querySelector("#tasks");

const error = document.getElementById("error");
const countvalue = document.querySelector(".count-value");
let taskcount = 0;

const displaycount = (taskcount) => {
    countvalue.innerHTML = taskcount;
};

const addtask = () => {
    const taskname = newtaskinput.value.trim();
    error.style.display =  "none";
    if (!taskname) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);q    
        return;
        }

        const task = `<div class="task"> 
        <input type="checkbox" class="task-check"><span class="taskname">${taskname}</span>
        <button class="edit">
        <i class="fa-solid fa-pen-to-square"></i>
           </button>
            <button class="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>`;

            taskscontainer.insertAdjacentHTML("beforeend", task);

            const deletebutton = document.querySelectorAll(".delete");
            deletebutton.forEach(button => {
                button.onclick = () => {
                    button.parentNode.remove();
                    taskcount -= 1;
                    displaycount(taskcount);
                }
            });
            const editbutton = document.querySelectorAll(".edit");
            editbutton.forEach((editbtn) => {
                editbtn.onclick = (e) => {
                    let targetElement = e.target;
                    if(!(e.target.classname == "edit")){
                        targetElement = e.target.parentElement;
                    }
                    newtaskinput.value = targetElement.previousElementSibling?.innerText;
                    targetElement.parentNode.remove();
                    taskcount -= 1;
                    displaycount(taskcount);
                };
            });
            const taskscheck = document.querySelectorAll(".task-check");
            taskscheck.forEach((checkBox) => {
                checkBox.onchange = () => {
                    checkBox.nextElementSibling.classList.toggle("completed");
                    if(checkBox.checked) {
                        taskcount -= 1;
                    }
                    else{
                        taskcount += 1;
                    }
                    displaycount(taskcount);

                };
            });
            taskcount += 1;
            displaycount(taskcount);
            newtaskinput.value = "";
        };
                    

    addbtn.addEventListener("click", addtask);

    window.onload = () => {
        taskcount = 0;
        displaycount(taskcount);
        newtaskinput.value = "";
    }

