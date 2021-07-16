const contentLoad = () => {

    const wrapper = document.querySelector(".content");

    let createInputBtn = function(className, href, value) {
        const inputTag = document.createElement("a");
        inputTag.classList.add(className);
        inputTag.setAttribute("href", href);
        inputTag.textContent = value;
        

        return inputTag

    }

    let homeBtn = createInputBtn("home-btn", "#", "Home");
    let todayBtn = createInputBtn("today-btn", "#", "Today");
    let weekBtn = createInputBtn("week-btn", "#", "Week");
    let projectsBtn = createInputBtn("projects-btn", "#", "Projects");


    const dropdownDiv = document.createElement("div");
    dropdownDiv.classList.add("dropdown-content");
    wrapper.appendChild(dropdownDiv);


    const dropdownDivEl = document.querySelector(".dropdown-content")
    
    dropdownDivEl.appendChild(homeBtn);
    dropdownDivEl.appendChild(todayBtn);
    dropdownDivEl.appendChild(weekBtn);
    dropdownDivEl.appendChild(projectsBtn);

    
    const middleDiv = document.querySelector(".middle");
    middleDiv.setAttribute("style", "grid-column: 4/10");

}

export default contentLoad;

