var taskList = [];

function add(){
  //variable that stores current length of array before adding
  
  var taskListLength = taskList.length;
  
  var task = document.getElementById("task").value;
  if (task != ""){
    taskList.push(task);
  }

  //reset input area to blank
  document.getElementById("task").value = "";
  
  var ul = document.getElementById("list");
  for(var i = taskListLength; i < taskList.length; i++){
     var node = document.createElement("li");
     node.style.listStyle = "none";
    var textnode = document.createTextNode("Reference id " +i + ": " + taskList[i]);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    
    document.getElementsByTagName("LI")[i].setAttribute("id", i);
  };
};

function delete_item() {
  
  var index = prompt("What ref id do you want to delete?");
  if (index != "") {
     document.getElementById("list").children[index].innerHTML = "";
  } else {
    var index = prompt("Cannot be blank, What number do you want to delete?"); 
  }
}

