import {projectMenu, renderNavBar} from "./NavBar.js"
import {renderProjectSingleItem} from "./Projects.js"

export {renderProjectPage}

function renderProjectPage(project) {
    document.getElementById("home-container").innerHTML = `
        ${renderNavBar(projectMenu)}
        ${renderProjectSingleItem(project)}
    `;
}