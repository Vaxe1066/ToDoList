

const removeContents = () => {

    const myNode = document.querySelector(".dropdown-content");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

    const middleDiv = document.querySelector(".middle");
    middleDiv.setAttribute("style", "grid-column: 2/10");
   



}

export default removeContents;