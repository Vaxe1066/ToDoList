import loadPage from './load-page.js';
import contentLoad from './contents-load.js';
import removeContents from './removeContents.js';
import './style.css';


loadPage();


const bar = document.querySelector(".dropdown-container");
bar.addEventListener("click", ()=>{
    const contents = document.querySelector(".dropdown-content");
    if(contents){
        removeContents();
        const middleDiv = document.querySelector(".middle");
        middleDiv.setAttribute("style", "grid-column: 2/10");
    }
    else if(!contents){
        contentLoad();
    }
    
   
})