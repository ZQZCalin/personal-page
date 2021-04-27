import {UISearchNews} from "./News.js"
import {UIFilterProjects} from "./Projects.js"

export {userInteraction}

function userInteraction(data) {
    // search news
    document.querySelector(".search input[name='news']")
    .addEventListener("input", () => {UISearchNews(data.news)});
    // filter projects
    document.querySelectorAll(".filter input[name='projects']")
    .forEach(box => {
        box.addEventListener("change", () => {UIFilterProjects(box, data.projects)});
    });
}