

// togleImportant
let isImportant = false;
let isVisible = true;

function toggleImportant() {
    const nonImportantIcon = "fa-regular fa-face-rolling-eyes";
    const importantIcon = "fa-solid fa-face-grin-beam-sweat";

    if(!isImportant) {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
    
    }
    else {
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
    } 
}  



function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let duedate = $("#selDueDate").val();
    let status = $("#selStatus").val();
    let budget = $("#txtBudget").val();
    let color = $("#selColor").val();

    let taskToSave = new Task(isImportant, title, desc, duedate, status, budget, color);
    displayTask(taskToSave);
    clearForm();
}

function displayTask(task) {
    let syntax = `
    <div class='task gap-5'>
        <div class='details ps-2'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>

        <div class="stat d-flex align-items-center">
        <label>${task.status}</label>
        </div>

        <div class="budgetdate d-flex align-items-center">
        <label>$${task.budget}</label>
        <label>${task.dueDate}</label>
        </div>
    </div>
    `;

    $("#pending-tasks").append(syntax);
}

function init() {
    console.log("Task manager");

    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnHide").click(hideDetails);
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selDueDate").val("");
    $("#selStatus").val("");
    $("#txtBudget").val("");
    $("#selColor").val("");

}

function hideDetails(){
    const panel = $(".info");
    if(isVisible) {
        panel.hide();
        isVisible = false;
    }
    else {
        panel.show();
        isVisible = true;
    }
}


// load data
// hook events

window.onload = init;


// Suggestion Read:
// How to create objects in JS -> Object Literal, Obj constructor, classes;
// 