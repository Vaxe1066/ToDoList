


const checkButton = (cell) => {
    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "checkbox");
    cell.appendChild(radioBtn);

}




const editButton = (cell, icon) =>{
    //let cellEdit = row.insertCell();
    let editBtn = document.createElement("input");
    editBtn.setAttribute("type", "image");
    editBtn.setAttribute("height", "20px");
    editBtn.setAttribute("width", "20px");
    editBtn.src = icon;

    cell.appendChild(editBtn)
}


const deleteButton = (cell, icon) =>{
    //let cellEdit = row.insertCell();
    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "image");
    deleteBtn.setAttribute("height", "20px");
    deleteBtn.setAttribute("width", "20px");
    deleteBtn.src = icon;

    cell.appendChild(deleteBtn);
}









export {checkButton, editButton, deleteButton};
