import {renderMainPage} from "./components/MainPage.js"
import {renderProjectPage} from "./components/ProjectPage.js"
import {userInteraction} from "./components/UserInteraction.js"

import "./static/index.css"
import "./static/main_page.css"
import data from "./assets/data.json"

/* No longer needs to fetch json
// fetch JSON
fetch(Data)
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
})
*/

// create container
var container = document.createElement("div");
container.className = "container";
container.id = "home-container";
document.body.appendChild(container);

// render page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("project")) {
    // TO DO: render project detail (use a separate JSON)
    let project = data.projects.find(item => item.id===urlParams.get("project"));
    renderProjectPage(project);
} else {
    renderMainPage(data);
    userInteraction(data);
}

// test purpose
console.log("Hello World!");