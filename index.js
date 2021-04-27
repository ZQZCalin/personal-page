import {renderMainPage} from "./js/MainPage.js"
import {renderProjectPage} from "./js/ProjectPage.js"
import {userInteraction} from "./js/UserInteraction.js"

// fetch JSON
fetch("data.json")
.then(response => {
    // fetch json data
    return response.json();
})
.then(data => {
    // received fetch data
    // // 1. Render Page
    // renderMainPage(data);

    // // 2. User Interaction
    // userInteraction(data);

    // check url parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("project")) {
        // TO DO: render project detail (use a separate JSON)
        let project = data.projects.find(item => item.id===urlParams.get("project"));
        renderProjectPage(project);
    } else {
        renderMainPage(data);
        userInteraction(data);
    }
})