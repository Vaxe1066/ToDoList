import {checkButton, editButton, deleteButton} from './table-buttons.js';
import editIcon from './edit.svg';
import deleteIcon from './trash.svg';
import sortIcon from './sort.svg';

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      if(key=="date"){
        let th = document.createElement("th");
        //let anchorSort = doc.createElement("a");
        //anchorSort.setAttribute("title");
        let aSort = document.createElement("input");
        aSort.classList.add("sort");
        aSort.setAttribute("type", "image");
        aSort.src = sortIcon;
        aSort.setAttribute("width", "30px");
        aSort.setAttribute("height", "30px");
        aSort.setAttribute("title","Sort By Due Date");
        //let text = document.createTextNode(key);
        th.appendChild(aSort);
        row.appendChild(th);
      }

    }
    //console.log(key);
  }

  

function generateTable(table, data) {
  let missKeys = ["id", "projects", "details"]
  for (let element of data) {
      let row = table.insertRow();
      row.classList.add("r_"+ element["id"]);
      let cell = row.insertCell();
      cell.classList.add("radio-btn"+element["id"]);
      checkButton(cell);
    for (let key in element) {
      if(!missKeys.includes(key)){
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
      }
    }
      let cellEdit = row.insertCell();
      cellEdit.classList.add("edit-btn");
      editButton(cellEdit, editIcon);
      let cellDelete = row.insertCell();
      cellDelete.classList.add("delete-btn");
      deleteButton(cellDelete, deleteIcon);
  }
  //tbodyHeight();
}

/*function tbodyHeight(){
  const tbodyEl = document.querySelector("tbody");
  if(tbodyEl){
    let screenHeight = window.screen.availHeight;
    let newHeight = screenHeight*0.6;
    //tbodyEl.style.height = newHeight+"px"; 
    console.log(screenHeight); 
  }
}*/

  export {generateTableHead, generateTable};