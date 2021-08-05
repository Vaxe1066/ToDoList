import loadPage from './load-page.js';
import contentLoad from './contents-load.js';
import {generateTable} from './generate-table.js';
//import {closeForm, formReset, removeAllChildNodes, replaceTaskObject,checkCondition, editListner } from './helper-functions.js';

import './style.css';



let mountains = [
  {  id:1, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-25"},
  {  id:2, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:3, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25" },
  {  id:4, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:5, projects:"Test", title: "Monte Amiata", details:"",date: "2021-08-25"  }
];

/*let mountains = [
    {  id:1, title: "Monte Falco", details:"", date: 1658},
    {  id:2, title: "Monte Falterona", details:"", date: 1654},
    {  id:3, title: "Poggio Scali", details:"", date: 1520 },
    {  id:4, title: "Pratomagno", details:"",date: 1592  },
    {  id:5, title: "Monte Amiata", details:"",date: "2021-08-25"  }
  ];*/
  
  
loadPage();

let projectLst=[]

const bar = document.querySelector(".dropdown-container");
bar.addEventListener("click", ()=>{
    const contents = document.querySelector(".dropdown-content");
    if(contents){
        //removeContents();
        contents.remove();
        const middleDiv = document.querySelector(".middle");
        middleDiv.setAttribute("style", "grid-column: 2/10");
    }
    else if(!contents){
        contentLoad();
        if(mountains.length>0){
          for(let element of mountains){
            if(!projectLst.includes(element["projects"])){
              projectLst.push(element["projects"]);
            }

            }
          }
        if(projectLst.length>0){
          for(let item of projectLst){
            const subProjDiv =document.querySelector(".subProjects");
            const newProjAnchor = document.createElement("a");
            newProjAnchor.classList.add(item);
            newProjAnchor.textContent = item;
            newProjAnchor.style.fontSize = "20px";
            newProjAnchor.style.paddingLeft = "40px";
            newProjAnchor.style.color = "rgb(47,85,151)";
            subProjDiv.appendChild(newProjAnchor);
          }
        }
        const subPrjocEl = document.querySelector(".subProjects");
        let subItems = subPrjocEl.querySelectorAll("a");
        subItems.forEach(item =>{
          item.addEventListener("click",()=>{
            console.log(item.textContent);
            let dataFilter = [];
            for(let element of mountains){
              if(element["projects"]==item.textContent){
                dataFilter.push(element);
                console.log(Date.parse(element["date"]))
              }
            }
            const containerRem = document.querySelector('.tableMain');
            removeAllChildNodes(containerRem);
            let table = document.querySelector("table");
            generateTable(table, dataFilter);
            formReset("");
            closeForm("");
            //checkTask();
            const checkEl = document.querySelectorAll("input[type=checkbox]");
            checkEl.forEach(box =>{
              checkCondition(box);
        
            });
            editListner();
            execDeleteTask(mountains);
            /*change subtitle*/
            const subTitle = document.querySelector("h3");
            subTitle.textContent=item.textContent
          })
        })
  
 
    }
    /*side bar event listners */

    const projectAddEl = document.querySelector(".projectAdd");
    if(projectAddEl){
      projectAddEl.addEventListener("click", ()=>{
        const subProjDiv =document.querySelector(".subProjects");
        const projPrompt = prompt("New Project Name");
        if(projPrompt && subProjDiv){
          const newProjAnchor = document.createElement("a");
          newProjAnchor.classList.add(projPrompt);
          newProjAnchor.textContent = projPrompt;
          newProjAnchor.style.fontSize = "20px";
          newProjAnchor.style.paddingLeft = "40px";
          newProjAnchor.style.color = "rgb(47,85,151)";

          subProjDiv.appendChild(newProjAnchor);
          
        };
        const subPrjocEl = document.querySelector(".subProjects");
        let subItems = subPrjocEl.querySelectorAll("a");
        subItems.forEach(item =>{
          item.addEventListener("click",()=>{
            console.log(item.textContent);
            let dataFilter = [];
            for(let element of mountains){
              if(element["projects"]==item.textContent){
                dataFilter.push(element);
                console.log(Date.parse(element["date"]))
              }
            }
            const containerRem = document.querySelector('.tableMain');
            removeAllChildNodes(containerRem);
            let table = document.querySelector("table");
            generateTable(table, dataFilter);
            formReset("");
            closeForm("");
            //checkTask();
            const checkEl = document.querySelectorAll("input[type=checkbox]");
            checkEl.forEach(box =>{
              checkCondition(box);
        
            });
            editListner();
            execDeleteTask(mountains);
            /*change subtitle*/
            const subTitle = document.querySelector("h3");
            subTitle.textContent=item.textContent
  
          })
        })
        


      })


    }



 
})






/*Create my book constructor here*/
function Task(id, title, details, date){
    this.id=id
    this.title = title
    this.details = details
    this.date=date
  }


  //let mountains = [];

  
  let table = document.querySelector("table");
  if (mountains.length >0) {
    let data = Object.keys(mountains[0]);
    generateTable(table, mountains); // generate the table first
    generateTableHead(table, data); // then the head
  }


const addItmEl = document.querySelector(".js-add-task");
const formEl = document.querySelector(".js-my-form");
addItmEl.addEventListener("click", () =>{
  formEl.style.display="block";
  
})

/* close function*/
function closeForm(type) {
  const formEl = document.querySelector(`.js-my-form${type}`);

  const closeBtn = document.querySelector(`.close${type}`);

  closeBtn.addEventListener("click", () =>{
      formEl.style.display = "none";
      let res = document.querySelector(`.js-the-form${type}`).reset();
  })  
}
/* reset and close form after display function */
function formReset(type){
  const formEl = document.querySelector(`.js-my-form${type}`);
  let res = document.querySelector(`.js-the-form${type}`).reset();
  formEl.style.display = "none";
}

/* remove all child nodes for table body - fresh for display */
function removeAllChildNodes(parent) {
  if(parent.firstChild){
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
  }
}

/* create submit button */
let maxId=mountains.length;
const submitBtn = document.querySelector(".js-submit-btn");
submitBtn.addEventListener("click", ()=>{
    let title = document.querySelector(".js-title-form").value;
    let details = document.querySelector(".details").value;
    let duedate = document.querySelector(".js-due-date").value;
    let item = new Task(maxId+1, title, details, duedate);
    mountains.push(item);
    console.log(mountains);
    const containerRem = document.querySelector('.tableMain');
    removeAllChildNodes(containerRem);

    let table = document.querySelector("table");
    //let data = Object.keys(mountains[0]);
    maxId++;
    generateTable(table, mountains);
    formReset("");
    closeForm("");
    //checkTask();
    const checkEl = document.querySelectorAll("input[type=checkbox]");
    checkEl.forEach(box =>{
      checkCondition(box);

    });
    editListner();
    execDeleteTask(mountains);
    

})

/*check button strike through*/
function checkCondition(box){
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
}

const checkEl = document.querySelectorAll("input[type=checkbox]");
checkEl.forEach(box =>{
  checkCondition(box);

})


/*helper */
function getClassIDOParent(element){
  let editParent = element.parentElement;
  let idx = Number(editParent.className.replace(/\D+/g, ''));
  console.log(idx);
  return idx;
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

/*edit form */
let indexSel ;
function editListner(){
  const editEl = document.querySelectorAll(".edit-btn");
  editEl.forEach(editItem =>{
    editItem.addEventListener("click", (e) =>{ 
        let idx = getClassIDOParent(editItem);
        const formEl = document.querySelector(".js-my-form-edit");
        formEl.style.display="block";     
        let taskSelected = findTaskObject(mountains, idx);
        console.log(taskSelected);
        populateEditForm(taskSelected);
        closeForm("-edit");
        indexSel=idx;
      
  })
})  
}

editListner();



/*do submit button on edit form */

const submitBtnEdit = document.querySelector(".js-submit-btn-edit");
submitBtnEdit.addEventListener("click", ()=>{
  let title = document.querySelector(".js-title-form-edit").value;
  let details = document.querySelector(".details-edit").value;
  let duedate = document.querySelector(".js-due-date-edit").value;
  replaceTaskObject(mountains, indexSel, title, details, duedate);
  const containerRem = document.querySelector('.tableMain');
  removeAllChildNodes(containerRem);
  let table = document.querySelector("table");
  generateTable(table, mountains);
  const formEl = document.querySelector(".js-my-form-edit")
  formEl.style.display = "none";
  formReset("-edit");
  editListner();
  const checkEl = document.querySelectorAll("input[type=checkbox]");
  checkEl.forEach(box =>{
    checkCondition(box);
  })
})


/* now do delete task */




function execDeleteTask(data){
  const deleteEl = document.querySelectorAll(".delete-btn");
  deleteEl.forEach(deleteItem =>{
    deleteItem.addEventListener("click", (e)=>{
      let deleteParent = deleteItem.parentElement;
      let idx = Number(deleteParent.className.replace(/\D+/g, ''));
      console.log(idx);
      data.splice(idx-1, 1);
      console.log(data);
      const containerRem = document.querySelector('.tableMain');
      removeAllChildNodes(containerRem);
      let table = document.querySelector("table");
      //let data = Object.keys(data[0]);
      generateTable(table, data);
      execDeleteTask(data);
    })
  })
}

execDeleteTask(mountains);


