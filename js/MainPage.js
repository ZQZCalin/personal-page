import {renderHeader} from "./Header.js"
import {mainMenu, renderNavBar} from "./NavBar.js"
import {renderAbout} from "./About.js"
import {renderNews, renderNewsItems} from "./News.js"
import {renderProjects, renderProjectItems} from "./Projects.js"

function renderMainPage(data) {
    document.getElementById("home-container").innerHTML = `
        ${renderHeader()}
        ${renderNavBar(mainMenu)}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
    // fill in blanks (news, projects)
    renderNewsItems(data.news);
    renderProjectItems(data.projects);
}

export {renderMainPage}