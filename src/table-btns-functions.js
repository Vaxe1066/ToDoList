import {removeAllChildNodes,formReset} from './form-functions.js';


function checkTask() {
    const checkEl = document.querySelectorAll("input[type=checkbox]");
    checkEl.forEach(box =>{
      box.addEventListener('change', function(e){
        if(box.checked){
          let radioParent = box.parentElement;
          let rowParent = radioParent.parentElement;
          rowParent.style.textDecoration = "line-through";
          rowParent.style.textDecorationColor = "red";
          //console.log(neighbour.textContent);
        }
        else if(!box.checked){
          let radioParent = box.parentElement;
          let rowParent = radioParent.parentElement;
          rowParent.style.textDecoration = "none";
  
        }
      })
  
    })
    
  }

  function closeForm() {
    const formEl = document.querySelector(".js-my-form");

    const closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", () =>{
        formEl.style.display = "none";
        let res = document.querySelector(".js-the-form").reset();
    }) 
    
    
  }

  function findTaskObject(data, idx) {
    let taskSelected;
    for(let element of data){
        for(let key in element){
            if (key=="id" && element[key]==idx){
                taskSelected = element;
                break;
            }
        }
    }
    return taskSelected;
  }

  function populateEditForm(task){
      let titleEl = document.querySelector(".js-title-form");
      titleEl.value = task["title"];

      let detailsEl = document.querySelector(".details");
      detailsEl.value = task["details"];

      let dateEl = document.querySelector(".js-due-date");
      dateEl.value = task["date"];


  }




  function execEditTask(data) {
      const editEl = document.querySelectorAll(".edit-btn");
      editEl.forEach(editItem =>{
        editItem.addEventListener("click", (e)=>{
            let editParent = editItem.parentElement;
            //let rowParent = editParent.parentElement;
            let idx = Number(editParent.className.replace(/\D+/g, ''));
            console.log(idx);
            const formEl = document.querySelector(".js-my-form");
            formEl.style.display="block";
            let taskSelected = findTaskObject(data, idx);
            populateEditForm(taskSelected);
            closeForm();
            
        })
      })
  }


  export {checkTask,execEditTask, closeForm}