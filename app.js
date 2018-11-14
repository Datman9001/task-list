//define UI vars
const form = document.querySelector('#taskForm');
const taskList = document.querySelector('.collection');
const taskInput = document.getElementById('taskList');
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector('.clear-tasks')



//load add event listners
loadEventListeners();

//load all events
function loadEventListeners(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTask);
  //Dom loaded
  document.addEventListener('DOMContentLoaded', getTasks);
}

//Get Task from Localstorage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    //create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';
    
    //create text node and append to li
    li.appendChild(document.createTextNode(task));

   

    //create new link element to delete
     const link = document.createElement('a');
     //add href
     link.setAttribute('href', '#');
     //add class
     link.className = 'secondary-content delete-item';

     //add icon html
     link.innerHTML = '<i class="material-icons">close</i>';
     //append the liknk to li
     li.appendChild(link);

     //append the li to the ul
     taskList.appendChild(li);
  });

}

//add task
function addTask(e){
     if(taskInput.value === ''){
       alert('Please enter a task!');
     }

     //create li element
     const li = document.createElement('li');

     //add class
     li.className = 'collection-item';
     
     //create text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));

    

     //create new link element to delete
      const link = document.createElement('a');
      //add href
      link.setAttribute('href', '#');
      //add class
      link.className = 'secondary-content delete-item';

      //add icon html
      link.innerHTML = '<i class="material-icons">close</i>';
      //append the liknk to li
      li.appendChild(link);

      //append the li to the ul
      taskList.appendChild(li);

      //add to local storage.
      addToLocalStorage(taskInput.value);

      //clear input
      taskInput.value = '';


       

  e.preventDefault();
}

function addToLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
     tasks = JSON.parse(localStorage.getItem('tasks'));
  }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));


}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
      //remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
    
  }
  
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
     tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);

    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));


}

function clearTask(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  clearTaskFromLocalStorage();

}

function clearTaskFromLocalStorage(){
  localStorage.clear();
}

function filterTask(e){
   
   const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';

      } else {
        task.style.display = 'none';
      }

    }
  );
  
   
  
   

}



 












 





 




 
          
 
 
 
 
 
 
 
 
 
 
 
  
     
 


