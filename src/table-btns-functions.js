import {removeAllChildNodes,formReset} from './form-functions.js';
import {generateTableHead, generateTable} from './generate-table.js';


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
    const formEl = document.querySelector(".js-my-form-edit");

    const closeBtn = document.querySelector(".js-close-edit");

    closeBtn.addEventListener("click", () =>{
        formEl.style.display = "none";
        let res = document.querySelector(".js-the-form-edit").reset();
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
      let titleEl = document.querySelector(".js-title-form-edit");
      titleEl.value = task["title"];

      let detailsEl = document.querySelector(".js-details-edit");
      detailsEl.value = task["details"];

      let dateEl = document.querySelector(".js-due-date-edit");
      dateEl.value = task["date"];


  }

  function replaceTaskObject(data, idx, newTitle, newDetails, newDate){
    for(let element of data){
      if(element["id"]==idx){
        element["title"]=newTitle;
        element["details"]=newDetails;
        element["date"]=newDate;
      }
    }
    console.log(data);
  }


  function reSubmitForm(data, idx){
    const submitBtn = document.querySelector(".js-submit-btn-edit");
    submitBtn.addEventListener("click", ()=>{
        let title = document.querySelector(".js-title-form-edit").value;
        let details = document.querySelector(".details-edit").value;
        let duedate = document.querySelector(".js-due-date-edit").value;
        replaceTaskObject(data, idx, title, details, duedate);
        const containerRem = document.querySelector('.tableMain');
        removeAllChildNodes(containerRem);
        let table = document.querySelector("table");
        //let data = Object.keys(data[0]);
        generateTable(table, data);
        const formEl = document.querySelector(".js-my-form-edit")
        formEl.style.display = "none";


    })
  }




  function execEditTask(data) {
      const editEl = document.querySelectorAll(".edit-btn");
      editEl.forEach(editItem =>{
        editItem.addEventListener("click", (e)=>{
            let editParent = editItem.parentElement;
            let idx = Number(editParent.className.replace(/\D+/g, ''));
            console.log(idx);
            const formEl = document.querySelector(".js-my-form-edit");
            formEl.style.display="block";
            let taskSelected = findTaskObject(data, idx);
            console.log(taskSelected);
            populateEditForm(taskSelected);
            reSubmitForm(data, idx);
            console.log(data);
            closeForm();
            
        })
      })
  }


  export {checkTask,execEditTask, closeForm}