// BACK END LOGIC
toDoNumber = 0;
var todoTaskList = [];
var pushToTaskList = function(taskName, taskDesc, taskWhere, taskWho)

function ToDoList(taskName, taskDesc, taskWhere, taskWho) {
  this.taskName = taskName;
  this.taskDesc = taskDesc;
  this.taskWhere = taskWhere;
  this.taskWho = taskWho;
  this.id = "todo" + toDoNumber;
  toDoNumber += 1;
}

ToDoList.prototype.todoDisplayName = function () {
  return this.taskName + ": " + this.taskWho;
};

$(document).ready(function() {
  $("form#toDo").submit(function(event) {
    event.preventDefault();
    var inputtedTaskName = $("input#newTask").val();
    var inputtedDescription = $("input#newDesc").val();
    var inputtedWhere = $("input#where").val();
    var inputtedWho = $("input#who").val();

    console.log(inputtedTaskName);

    var newToDoList = new ToDoList(inputtedTaskName, inputtedDescription, inputtedWhere, inputtedWho);



    $("ul#toDo").append("<li><span class='to-do' id='" + newToDoList.id + "'>" + newToDoList.todoDisplayName() + "</span></li>")

    $(".to-do").last().click(function() {
      $("#show-toDo-items").show();
      $("#show-toDo-items h2").text(newToDoList.todoDisplayName())
      $(".task-name").text(newToDoList.taskName);
      $(".where-name").text(newToDoList.taskWhere);
      $(".who-name").text(newToDoList.taskWho);
      $(".todo-number").text(newToDoList.id);



    }); //End of '.to-do' function.

    $("#removeToDo").click(function() {
      $("#" + )
    }); // End of 'removeToDo' click listener.

    // var inputtedTaskName = $("input#newTask").val("");
    // var inputtedDescription = $("input#newDesc").val("");
    // var inputtedWhere = $("input#where").val("");
    // var inputtedWho = $("input#who").val("");
  }); // End of 'form submit' event listener.
}); // End of 'document ready' function.
