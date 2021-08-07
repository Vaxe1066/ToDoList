import loadPage from './load-page.js';
import contentLoad from './contents-load.js';
import {generateTableHead, generateTable} from './generate-table.js';
//import {closeForm, formReset, removeAllChildNodes, replaceTaskObject,checkCondition, editListner } from './helper-functions.js';

import './style.css';



/*let mountains = [
  {  id:1, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-01", check:0},
  {  id:2, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-07-25", check:0},
  {  id:3, projects:"Test",title: "Poggio Scali", details:"", date: "2010-08-25",check:0 },
  {  id:4, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25", check:0  },
  {  id:5, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25", check:0},
  {  id:6, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25", check:0 },
  {  id:7, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:8, projects:"Chores", title: "Monte Falco", details:"", date: "2021-08-25"},
  {  id:9, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:10, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25" },
  {  id:11, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:12, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:13, projects:"Test",title: "Poggio Scali", details:"", date: "2021-08-25" },
  {  id:14, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:15, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:16, projects:"Chores", title: "Monte Falterona", details:"", date: "2021-08-25"},
  {  id:17, projects:"Test",title: "Poggio Scali", details:"", date: "2009-08-16" },
  {  id:18, projects:"Test",title: "Pratomagno", details:"", date: "2021-08-25"  },
  {  id:19, projects:"Test", title: "Monte Amiata", details:"",date: "2021-08-05"  }
];*/

//let mountains=[];
//localStorage.setItem("alltasks", JSON.stringify(mountains));
let mountains =[];
mountains  = JSON.parse(localStorage.getItem("alltasks"));





function changeDateFormat(date){
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();
  date = yyyy + '-' + mm + '-' + dd;
  return date;
}

function strToDate(strDate) {
  let elementDate = new Date(strDate);
  elementDate = changeDateFormat(elementDate);
  elementDate = Date.parse(elementDate);
  return elementDate;
}

function setToMonday( date ) {
  let day = date.getDay() || 7;  
  if( day !== 1 ) 
      date.setHours(-24 * (day - 1)); 
  return date;
}

function setToSunday( date ) {
  let day = date.getDay() || 7;  
  if( day !== 1 ) 
      date.setHours(-24 * (day - 7)); 
  return date;
}

let today = new Date();
console.log(changeDateFormat(today));
let mon = new Date();
let sun = new Date();
today = Date.parse(changeDateFormat(today));
mon = Date.parse(changeDateFormat(setToMonday(mon)));
sun = Date.parse(changeDateFormat(setToSunday(sun)));




loadPage();

function todayTab(todayDate){
  const todayBtn = document.querySelector(".today-btn");
  todayBtn.addEventListener("click", ()=>{
    console.log(changeDateFormat(new Date()));
    let dataFilter = [];
    for(let element of mountains){
      if(strToDate(element["date"])==todayDate){
        dataFilter.push(element);
      }
    }
    console.log(dataFilter);
    execTableAllButtons(dataFilter,"");
    //openPopUpBox(dataFilter);
    subProjectTitleChange("Today");
  })
}

function weekTab(mondayDate, sundayDate){
  const weekBtn = document.querySelector(".week-btn");
  weekBtn.addEventListener("click", ()=>{
    //console.log(todayDate);
    let dataFilter = [];
    for(let element of mountains){
      let elementDate = strToDate(element["date"]);
      if((elementDate>=mondayDate) && (elementDate<=sundayDate)){
        dataFilter.push(element);
      }
    }
    execTableAllButtons(dataFilter,"");
    //openPopUpBox(dataFilter);
    subProjectTitleChange("Week");

  })
}

function execTableAllButtons(data, type){
    const containerRem = document.querySelector('.tableMain');
    if(containerRem){
      removeAllChildNodes(containerRem);
    }
    let table = document.querySelector("table");
    //let dataHead = Object.keys(mountains[0]);
    generateTable(table, data); // generate the table first
    //generateTableHead(table, dataHead); // then the head
    formReset(type);
    closeForm(type);
    const checkEl = document.querySelectorAll("input[type=checkbox]");
    checkEl.forEach(box =>{
      checkCondition(box);

    });
    editListner();
    openPopUpBox(data);
    execDeleteTask(data);
}

function subProjectTitleChange(text){
  const subTitle = document.querySelector("h3");
  subTitle.textContent=text;
}


function createProjectAnchor(subProjectElement, text){
  const newProjAnchor = document.createElement("a");
  let arrText = text.split(" ");
  let newText = arrText.join("-");
  newProjAnchor.classList.add(newText);
  newProjAnchor.textContent = text;
  newProjAnchor.style.fontSize = "20px";
  newProjAnchor.style.paddingLeft = "40px";
  newProjAnchor.style.color = "rgb(47,85,151)";

  subProjectElement.appendChild(newProjAnchor);
}

function filterData(title){
  //const checkSubTitle = document.querySelector("h3");
  let dataFilter = [];
  if(title.textContent!="Home"){
    for(let element of mountains){
      if(element["projects"]==title.textContent){
        dataFilter.push(element);
      }
    }
    return dataFilter;
  }
  else{
    return mountains;
  }

}



//let projectLst=["ToDoList"]
let projectLst=[];
if(mountains.length>0){
  for(let element of mountains){
    if(!projectLst.includes(element["projects"])){
      projectLst.push(element["projects"]);
    }

    }
  }

const bar = document.querySelector(".dropdown-container");
bar.addEventListener("click", ()=>{
    const contents = document.querySelector(".dropdown-content");
    const addNewConts = document.querySelector(".addProjectDiv")
    if((contents) && (addNewConts)){
        //removeContents();
        contents.remove();
        addNewConts.remove();
        const middleDiv = document.querySelector(".middle");
        middleDiv.setAttribute("style", "grid-column: 2/10");
    }
    else if(!contents){
        contentLoad();
        /*if(mountains.length>0){
          for(let element of mountains){
            if(!projectLst.includes(element["projects"])){
              projectLst.push(element["projects"]);
            }

            }
          }*/
        if(projectLst.length>0){
          for(let item of projectLst){
            const subProjDiv =document.querySelector(".subProjects");
            createProjectAnchor(subProjDiv, item);
          }
        }
        const subPrjocEl = document.querySelector(".subProjects");
        let subItems = subPrjocEl.querySelectorAll("a");
        subItems.forEach(item =>{
          item.addEventListener("click",()=>{
            console.log(item.textContent);
            let dataFilter = filterData(item);
            execTableAllButtons(dataFilter,"");
            subProjectTitleChange(item.textContent);
          })
        })

        todayTab(today);
        weekTab(mon, sun);
        const homeButton=document.querySelector(".home-btn");
        homeButton.addEventListener("click", ()=>{
          execTableAllButtons(mountains,"");
          //openPopUpBox(mountains);
          subProjectTitleChange("Home");
        })
  
 
    }
    /*side bar event listners */

    const projectAddEl = document.querySelector(".projectAdd");
    if(projectAddEl){
      projectAddEl.addEventListener("click", ()=>{
        const subProjDiv =document.querySelector(".subProjects");
        const projPrompt = prompt("New Project Name");
        if(projPrompt && subProjDiv){
          createProjectAnchor(subProjDiv, projPrompt);
          projectLst.push(projPrompt);
          
        };
        const subPrjocEl = document.querySelector(".subProjects");
        let subItems = subPrjocEl.querySelectorAll("a");
        subItems.forEach(item =>{
          item.addEventListener("click",()=>{
            console.log(item.textContent);
            let dataFilter = filterData(item);
            execTableAllButtons(dataFilter);
            /*change subtitle*/
            subProjectTitleChange(item.textContent);
  
          })
        })
        


      })


    }


})





/*Create my book constructor here*/
function Task(id, projects, title, details, date){
    this.id=id
    this.projects = projects
    this.title = title
    this.details = details
    this.date=date
  }


  //let mountains = [];

  
  let table = document.querySelector("table");
  if (mountains.length >0) {
    //let data = Object.keys(mountains[0]);
    generateTable(table, mountains); // generate the table first
    //generateTableHead(table, data); // then the head
  }


const addItmEl = document.querySelector(".js-add-task");
const formEl = document.querySelector(".js-my-form");
addItmEl.addEventListener("click", () =>{
  createDropDownList(".projects");
  formEl.style.display="block";
  
})
closeForm("");

/* close function*/
function closeForm(type) {
  const formEl = document.querySelector(`.js-my-form${type}`);

  const closeBtn = document.querySelector(`.close${type}`);
  if(closeBtn){
    closeBtn.addEventListener("click", () =>{
      formEl.style.display = "none";
      let res = document.querySelector(`.js-the-form${type}`).reset();
  })  
  }


}
/* reset and close form after display function */
function formReset(type){
  const formEl = document.querySelector(`.js-my-form${type}`);
  if(formEl){
    let res = document.querySelector(`.js-the-form${type}`).reset();
    formEl.style.display = "none";
  }
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
    let project = document.querySelector(".projects").value
    let details = document.querySelector(".details").value;
    let duedate = document.querySelector(".js-due-date").value;
    let item = new Task(maxId+1, project, title, details, duedate);
    mountains.push(item);
    console.log(mountains);
    maxId++;
    const checkSubTitle = document.querySelector("h3");
    let dataFilter =  filterData(checkSubTitle);
    execTableAllButtons(dataFilter,"");
    localStorage.setItem("alltasks", JSON.stringify(mountains));
    

})

function changeCheckFlag(flag, idx){

  for(let element of mountains){
    if(element["id"]==idx){
      if(flag==1){
        element["check"] = 1;
      }
      else if(flag==flag){
        element["check"] = 0;
      }
    }
  }
  

}

/*check button strike through*/
function checkCondition(box){
  box.addEventListener('change', function(e){
    if(box.checked){
      let radioParent = box.parentElement;
      let rowParent = radioParent.parentElement;
      rowParent.style.textDecoration = "line-through";
      rowParent.style.textDecorationColor = "red";
      let idx = getClassIDOParent(radioParent);
      changeCheckFlag(1, idx);
      localStorage.setItem("alltasks", JSON.stringify(mountains));
    }
    else if(!box.checked){
      let radioParent = box.parentElement;
      let rowParent = radioParent.parentElement;
      rowParent.style.textDecoration = "none";
      let idx = getClassIDOParent(radioParent);
      changeCheckFlag(0, idx);
      localStorage.setItem("alltasks", JSON.stringify(mountains));

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

  let projectsEl = document.querySelector(".projects-edit");
  projectsEl.value = task["projects"];

  let dateEl = document.querySelector(".js-due-date-edit");
  dateEl.value = task["date"];


}

function replaceTaskObject(data, idx, newProject, newTitle, newDetails, newDate){
  for(let element of data){
    if(element["id"]==idx){
      element["projects"]=newProject;
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
        createDropDownList(".projects-edit");
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
  let project = document.querySelector(".projects-edit").value;
  let details = document.querySelector(".details-edit").value;
  let duedate = document.querySelector(".js-due-date-edit").value;
  replaceTaskObject(mountains, indexSel, project, title, details, duedate);
  console.log(mountains);
  const checkSubTitle = document.querySelector("h3");
  let dataFilter = filterData(checkSubTitle);
  execTableAllButtons(dataFilter,"-edit");
  localStorage.setItem("alltasks", JSON.stringify(mountains));

})


/* now do delete task */




function execDeleteTask(){
  const deleteEl = document.querySelectorAll(".delete-btn");
  deleteEl.forEach(deleteItem =>{
    deleteItem.addEventListener("click", (e)=>{
      let deleteParent = deleteItem.parentElement;
      let idx = Number(deleteParent.className.replace(/\D+/g, ''));
      console.log(idx);
      let iKeep;
      for(let element of mountains){;
        if(element["id"]==idx){
          iKeep=mountains.indexOf(element);
        }
      }
      mountains.splice(iKeep, 1);
      console.log(mountains);
      const containerRem = document.querySelector('.tableMain');
      removeAllChildNodes(containerRem);
      let table = document.querySelector("table");
      const checkSubTitle = document.querySelector("h3");
      let  dataFilter = filterData(checkSubTitle);
      //let data = Object.keys(data[0]);
      generateTable(table, dataFilter);
      localStorage.setItem("alltasks", JSON.stringify(mountains));
      //openPopUpBox(data);
      execDeleteTask();
    })
  })
}

execDeleteTask();





/* sort button */

let asc=1;
const sortButton = document.querySelector(".sort");
  sortButton.addEventListener("click",()=>{
    const checkSubTitle = document.querySelector("h3");
    let  dataFilter = filterData(checkSubTitle);
    dataFilter.sort(function(a, b) {
      if(asc==1){
        return parseFloat(strToDate(a.date)) - parseFloat(strToDate(b.date));
      }
      else if(asc==(-1)){
        return   parseFloat(strToDate(b.date)) - parseFloat(strToDate(a.date));
      }


    });
    asc*=(-1);
    execTableAllButtons(dataFilter,"");

  })


  /*get details by click function*/
  function closeBox(data) {
    const formEl = document.querySelector(".overlay");
  
    const closeBtn = document.querySelector(".closePop");
    if(closeBtn){
      closeBtn.addEventListener("click", () =>{
        formEl.style.display = "none";
    })  
    }
  }

function openPopUpBox(data){
  const cellEl = document.querySelectorAll(".titleCell");
  cellEl.forEach(cell =>{
    cell.addEventListener("click", ()=>{
      
      let idx=getClassIDOParent(cell);
      const popupEl = document.querySelector(".overlay");
      popupEl.style.display="block";
      const allH4 = document.querySelectorAll(".divH4")
      allH4.forEach(item=>{
        if(item.firstElementChild.className=="taskH4"){
          let pChild = item.lastElementChild;
          pChild.textContent = cell.textContent;
        }
        else if(item.firstElementChild.className=="projectH4"){
          let text;
          for(let element of data){
            if(element["id"]==idx){
              text=element["projects"]
            }
          }
          let pChild = item.lastElementChild;
          pChild.textContent = text;
        }
        else if(item.firstElementChild.className=="detailsH4"){
          let text;
          for(let element of data){
            if(element["id"]==idx){
              text=element["details"]
            }
          }
          let pChild = item.lastElementChild;
          pChild.textContent = text;
        }
        else if(item.firstElementChild.className=="dateH4"){
          let text;
          for(let element of data){
            if(element["id"]==idx){
              text=element["date"]
            }
          }
          let pChild = item.lastElementChild;
          pChild.textContent = text;
        }

      })

      closeBox(data);
    })

  })
  
}

  


openPopUpBox(mountains);

function clearDropDown(){
  const selectEl=  document.querySelectorAll("select");
  selectEl.forEach(selectItem =>{
    while (selectItem.firstChild) {
      selectItem.removeChild(selectItem.lastChild);
    }
  })

}
  function createDropDownList(classname){
    //let DropDownProjectLst=[]
    let DropDownProjectLst=projectLst;
    /*if(mountains.length>0){
      for(let element of mountains){
        if(!DropDownProjectLst.includes(element["projects"])){
          DropDownProjectLst.push(element["projects"]);
        }
  
        }
      }*/
    clearDropDown();
    for(let item of DropDownProjectLst){
      console.log(item);
      const selectEl = document.querySelector(classname)
      const optionEl = document.createElement("option");
      optionEl.setAttribute("value",item);
      optionEl.textContent = item;
      selectEl.appendChild(optionEl);
    }
  }