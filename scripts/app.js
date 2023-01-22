var importantIcon = "fa-solid fa-arrow-up important";
var nonImportantIcon = "fa-solid fa-arrow-down";
var isImportant = false;



function toggleImportant(){
// console.log("Icon Clicked!");
if(isImportant){
    //change to non important
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant=false;
}else{
    //change to important
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant=true;
}

// $("#iImportant").removeClass(nonImportant);
// $("#iImportant").addClass(importantIcon);

}

function hideForm(){
    console.log("BTN CLICKED!")
    $(".form-container").toggle();
}

function saveTask(){

    console.log("Task Saved");
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let dueDate = $("#txtDueDate").val();
    let category = $("#selCategory").val();
    let status = $("#selStatus").val();

    // console.log(title,description,dueDate,category,status);

    let task= new Task(title,description,dueDate,category,status,isImportant);
    displayTask(task);
}

function displayTask(task){
    let syntax= `
    <div class="task">
    <div>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        </div>
    <div>   
        <label>${task.dueDate}</label>
        <label>${task.category}</label>
    </div>
    <div>
        <label>${task.status}</label>
        <button onclick>Delete</button>
    </div>`;

    $(".list-container").append(syntax);
}

   



function init(){
    console.log("Task Manager");

    $("#iImportant").click(toggleImportant);
    $("#btn-hide").click(hideForm);
    $("#btn-save").click(saveTask);

}

window.onload = init;