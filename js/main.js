"use strict";

// global meta
var newsMaxLength = 10;

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
    }
    userInteraction(data);
})

// =================
// Render Main Page
// =================

function renderMainPage(data) {
    document.getElementById("home-container").innerHTML = `
        ${renderHeader()}
        ${renderNavBar(["About", "News", "Projects"], ["#section-about", "#section-news", "#section-projects"])}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
    renderProjectItems(data.projects);
}

function renderHeader() {
    return`
    <header>
        <h1 class="animate__animated animate__bounce">
            Welcome to Qinzi's Personal Website!
        </h1>
    </header>
    `;
}

function renderNavBar(menu, link) {
    return`
    <nav class="">
        <ul>
            ${
                menu.map((section, i) => `
                    <li><a href="${link[i]}">
                        ${section}
                    </a></li>
                `).join("")
            }
        </ul>
    </nav>
    `;
}

function renderAbout(about) {
    return`
    <section id="section-about">
        <h1>About</h1>
        <div class="row">
            <div class="col-6 vertical-flex">
                <img id="portfolio" src="${about.portfolio}" alt="A picture of me and Peilin">
                <p>
                    <b>${about.position} @ ${about.institute}</b> <br>
                    e-mail: ${about.email} <br>
                    <a href="${about.resume}" class="normal-link">
                        <i class="far fa-file-alt"></i>
                        Resume
                    </a> | 
                    <a href="${about.github}" target="_blank" class="normal-link">
                        <i class="fab fa-github"></i>
                        Github
                    </a>
                </p>
            </div>
            <p class="col-6">
                ${about.description}
            </p>
        </div>
    </section>
    <hr class="solid">
    `;
}

function renderNews(news) {
    return`
    <section id="section-news">
        <h1>News</h1>
        <div class="search">
            <input type="search" name="news" placeholder="Search News...">
        </div>
        <div id="news-list" class="row">
            ${
                news.map(newsItem => `
                    <p class="col-8 news-title">${newsItem.title}</p>
                    <p class="col-4 news-date">${newsItem.date}</p>
                `).slice(0,newsMaxLength).join("")
            }
        </div>
        <p></p>
    </section>
    <hr class="solid">
    `;
}

function renderNewsItems(news) {
    document.getElementById("news-list").innerHTML = news.map(newsItem => `
        <p class="col-8 news-title">${newsItem.title}</p>
        <p class="col-4 news-date">${newsItem.date}</p>
    `).slice(0,newsMaxLength).join("");
}

function renderProjects(projects) {
    return`
    <section id="section-projects">
        <h1>Projects</h1>
        <!-- Filter Bar -->
        <div class="filter">
            ${
                ["all", "distributed systems", "machine learning"].map((tag, i) => `
                <label>
                    <input type="checkbox" name="projects" value="${tag}" ${(i==0)?"checked":""}>
                    ${
                        // String formatting: Uppercase Initials
                        tag.split(" ")
                        .map(word => word[0].toUpperCase()+word.slice(1).toLowerCase())
                        .reduce((prev, word) => prev+" "+word)
                    }
                </label>
                `).join("")
            }
        </div>
        <div id="project-container" class="row">
            <!-- Left Column -->
            <div id="left-column" class="col-6">

            </div>
            <!-- Right Column -->
            <div id="right-column" class="col-6">

            </div>
        </div>
    </section>
    `;
}

// stack each item to either left of right
function renderProjectItems(projects) {
    // threshold function
    let threshold = i => i < projects.length / 2;
    // left column
    document.getElementById("left-column").innerHTML = 
    projects.map((project, i) => {
        if (threshold(i)) {
            return renderProjectSingleItem(project);
        }
    }).join("");
    // right column
    document.getElementById("right-column").innerHTML = 
    projects.map((project, i) => {
        if (! threshold(i)) {
            return renderProjectSingleItem(project);
        }
    }).join("");
}

function renderProjectSingleItem(project) {
    return`
    <section class="project">
        <!-- Title -->
        ${
            // Mandatory: title
            renderProjectTitle(project.title, project.id)
        }
        <hr class="solid project-dividor">
        <!-- Author -->
        ${
            // Mandatory: either String or Array
            renderProjectAuthor(project.author)
        } <br>
        <!-- Publication -->
        ${
            // Optional: publication
            renderProjectPublication(project.publication)
        }
        <!-- Tag -->
        ${
            // Optional: tags
            renderProjectTag(project.tag)
        }
        <!-- External Links -->
        ${
            // Optional: external links
            renderProjectExternalLink(project.externalLink)
        }
    </section>
    `
}

function renderProjectTitle(title, id) {
    if (id != undefined) {
        return `
        <a href="?project=${id}" class="project-link">
            ${title}
        </a> <br>
        `;  
    } else {
        return `
        <span class="project-link">
            ${title}
        </span>
        `;
    }
}

function renderProjectAuthor(author) {
    return (typeof author == "string") ? author : 
        // print array: e1, e2, ...
        author.reduce((str, element) => `${str}, ${element}`)
}

function renderProjectPublication(publication) {
    return (publication != undefined) ? `
        <i>${publication}</i> <br>
    ` : ""
}

function renderProjectTag(tag) {
    return (tag != undefined) ? `
    ${
        // print all tags, convert space into "-" as class name
        tag.map(tagName => `
            <span class="tag ${tagName.replace(" ", "-")}">${tagName}</span>
        `).join("")
    } <br>
    ` : ""
}

function renderProjectExternalLink(link) {
    // undefined link
    if (link == undefined) return "";
    // define each icon
    let paper = link.paper, video = link.video, demo = link.demo;
    let paperIcon = (paper != undefined) ? `
    <a href="${paper}" target="_blank" class="normal-link">
        <i class="far fa-file-alt"></i>
        Paper
    </a>` : "";
    let videoIcon = (video != undefined) ? `
    <a href="${video}" target="_blank" class="normal-link">
        <i class="fas fa-video"></i>
        Video
    </a>` : "";
    let demoIcon = (demo != undefined) ? `
    <a href="${video}" target="_blank" class="normal-link">
        <i class="fas fa-desktop"></i>
        Demo
    </a>` : "";
    // dividors
    let barPaper = (paper != undefined && (video != undefined || demo != undefined)) ? "|" : "";
    let barVideo = (video != undefined && demo != undefined) ? "|" : "";
    return `${paperIcon}${barPaper}${videoIcon}${barVideo}${demoIcon}`
}

// =================
// Render Project
// =================

function renderProjectPage(project) {
    document.getElementById("home-container").innerHTML = `
        ${renderNavBar(["go back"], ["."])}
        ${renderProjectSingleItem(project)}
    `;
}

// =================
// User Interaction
// =================

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

function UISearchNews(news) {
    // filter news using title keyword
    let keyword = document.querySelector(".search input[name='news']").value;
    let filterNews = news.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    renderNewsItems(filterNews);
}

function UIFilterProjects(checkbox, projects){
    // convert Nodelist to Array
    let filter = Array.from(document.querySelectorAll(".filter input[name='projects']"));
    let checkBoxAll = document.querySelector(".filter input[value='all']");
    // Checkbox Logic
    if (checkbox.value === "all" && checkbox.checked) {
        // if "all" is selected, uncheck all other tags
        filter.forEach((item, i) => {
            if (i > 0) item.checked = false;
        });
    } else if (checkbox.checked) {
        // if checked other tag, uncheck "all"
        checkBoxAll.checked = false;
    } else if (filter.every(tag => tag.checked==false)) {
        // if no box is checked, check "all"
        checkBoxAll.checked = true;
    }
    // Render
    let selected = [];
    filter.forEach(item => {
        if (item.checked) selected.push(item.value);
    });
    if (selected.includes("all")) {
        // render all
        renderProjectItems(projects);
    } else {
        console.log(selected);
        renderProjectItems(projects.filter(project => {
            // check if a projected is tagged and contains any selected tag
            if (project.tag != undefined && selected.length != 0) {
                return selected.reduce((prev, tag) => {
                    return prev || project.tag.includes(tag);
                }, false);
            } else {
                return false;
            }
        }));
    }
}