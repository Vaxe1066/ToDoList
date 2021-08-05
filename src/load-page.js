import profileIcon from './profileImg.png';
import addIcon from './add.svg';


const loadPage = () => {
    console.log("hello world - again okay lies")

    const myIcon = new Image();
    myIcon.src = profileIcon;
    myIcon.classList.add("profile-img");

    const  profilDiv = document.querySelector(".profile-icon");
    profilDiv.appendChild(myIcon);


    const addInput = document.querySelector(".add-task");
    addInput.src = addIcon;
    addInput.setAttribute("width", "20px");
    addInput.setAttribute("height", "20px");






}








export default loadPage