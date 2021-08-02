import loadPage from './load-page.js';
import contentLoad from './contents-load.js';
import {generateTableHead, generateTable} from './generate-table.js';
import {submitEvent, formReset} from './form-functions.js'
import removeContents from './removeContents.js';
import './style.css';




loadPage();


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
    }
    
   
})

/*Create my book constructor here*/
function Task(id, title, details, date){
    this.id=id
    this.title = title
    this.details = details
    this.date=date
  }


let mountains = [
    {  id:1, title: "Monte Falco",details:"", date: 1658},
    {  id:2, title: "Monte Falterona", details:"", date: 1654},
    {  id:3, title: "Poggio Scali", details:"", date: 1520 },
    {  id:4, title: "Pratomagno", details:"",date: 1592  },
    {  id:5, title: "Monte Amiata", details:"",date: 1738  }
  ];
  


  
  let table = document.querySelector("table");
  let data = Object.keys(mountains[0]);
  generateTable(table, mountains); // generate the table first
  //generateTableHead(table, data); // then the head


  const addItmEl = document.querySelector(".js-add-task");
  const formEl = document.querySelector(".js-my-form");

  addItmEl.addEventListener("click", () =>{
    formEl.style.display="block";
      
  })

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () =>{
    formEl.style.display = "none";
})


submitEvent(Task, mountains, formEl);









