import {generateTableHead, generateTable} from './generate-table.js';

/* reset and close form after display function */
function formReset(myForm){
    let res = document.querySelector(".js-the-form").reset();
    myForm.style.display = "none";
  }

  /* remove all child nodes for table body - fresh for display */
function removeAllChildNodes(parent) {
    if(parent.firstChild){
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
     }
    }
  }

let maxId=5;

const submitEvent = (Obj, mountains, myForm) => {
    const submitBtn = document.querySelector(".js-submit-btn");
    submitBtn.addEventListener("click", ()=>{
        let title = document.querySelector(".js-title-form").value;
        let details = document.querySelector(".details").value;
        let duedate = document.querySelector(".js-due-date").value;
        let item = new Obj(maxId+1, title, details, duedate);
        mountains.push(item)

        const containerRem = document.querySelector('.tableMain');
        removeAllChildNodes(containerRem);

        let table = document.querySelector("table");
        let data = Object.keys(mountains[0]);
        generateTable(table, mountains);
        formReset(myForm);
        console.log(mountains);


    })
}




export {submitEvent, formReset}