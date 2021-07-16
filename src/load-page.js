import profileIcon from './profileImg.png';

const loadPage = () => {
    console.log("hello world - again okay lies")

    const myIcon = new Image();
    myIcon.src = profileIcon;
    myIcon.classList.add("profile-img");

    const  profilDiv = document.querySelector(".profile-icon");
    profilDiv.appendChild(myIcon);






}








export default loadPage