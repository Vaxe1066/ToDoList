

const removeContents = () => {

    const myNode = document.querySelector(".dropdown-content");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

    
   



}

export default removeContents;