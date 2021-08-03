import {checkButton, editButton, deleteButton} from './table-buttons.js';
import editIcon from './edit.svg';
import deleteIcon from './trash.svg';

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        row.classList.add("r_"+ element["id"]);
        let cell = row.insertCell();
        cell.classList.add("radio-btn"+element["id"]);
        checkButton(cell);
      for (let key in element) {
        if(key!="id"){
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
  }


  export {generateTableHead, generateTable};