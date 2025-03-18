const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === '')
        alert("Cool Dude, you must write something!");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // in order to display that li element ( NOTE: li should be displayed under the ul tag)

        // within the list we need to add a cross icon in order to delete the task
        // we'll add the icon within span tag
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // add some css for the cross icon later on
        li.appendChild(span); // display the span
    }
    inputBox.value = ""; // clear the input field swiftly once your to-do got added in list
    saveData(); // call savedata everytime you make any changes and wanna restore it to localStorage so that our to-dos can remain unchanged
}


listContainer.addEventListener("click", function(e){ // whenever we'll click in the list container (where we have stored all the task)
    if(e.target.tagName === "LI"){ // if we've clicked on 'LI' 
        e.target.classList.toggle("checked"); // checked className will get added and removed(toggle) in the classList
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ // if the clicked target element is 'SPAN' 
        e.target.parentElement.remove(); // it'll remove li(Parent Element) : task will be deleted
        saveData();
    } 
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //localStorage.setItem(save with name, value);
}

function showTask(){
     listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); // display the stored data whenever we refresh or reopen our app

