"use strict";

// fetch JSON
fetch("data.json")
.then(response => {
    // fetch json data
    return response.json();
})
.then(data => {
    // received fetch data, render page
    renderMainPage(data);
})

// =================
// Render Functions
// =================

function renderMainPage(data) {
    document.getElementById("home-container").innerHTML = `
        ${renderHeader()}
        ${renderNavBar()}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
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

function renderNavBar() {
    return`
    <nav class="">
        <ul>
            <li><a href="#section-about">About</a></li>
            <li><a href="#section-news">News</a></li>
            <li><a href="#section-projects">Projects</a></li>
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
                    <a href="${about.github}" class="normal-link">
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
    `;
}

function renderNews(news) {
    return`
    <section id="section-news">
        <h1>News</h1>
        <div class="row">
            ${renderNewsItems(news)}
        </div>
    </section>
    `;
}

function renderNewsItems(news) {
    return news.map(newsItem => `
        <p class="col-8 news-title">${newsItem.title}</p>
        <p class="col-4 news-date">${newsItem.date}</p>
    `).join("");
}

function renderProjects(projects) {
    return`
    <section id="section-projects">
        <h1>Projects</h1>
        <div id="project-container" class="row">
            <!-- Left Column -->
            <div class="col-6">
                ${renderProjectItems(projects, i => (i < projects.length/2))}
            </div>
            <!-- Right Column -->
            <div class="col-6">
                ${renderProjectItems(projects, i => (i >= projects.length/2))}
            </div>
        </div>
    </section>
    `;
}

// stack each item to either left of right
function renderProjectItems(projects, projectSelector) {
    return projects.map((project, i) => {
        if (projectSelector(i)) {
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
            renderProjectTitle(project.title, project.link)
        }
        <hr class="solid">
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

function renderProjectTitle(title, link) {
    if (link != undefined) {
        return `
        <a href="${link}" class="project-link">
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
    <a href="${paper}" class="normal-link">
        <i class="far fa-file-alt"></i>
        Paper
    </a>` : "";
    let videoIcon = (video != undefined) ? `
    <a href="${video}" class="normal-link">
        <i class="fas fa-video"></i>
        Video
    </a>` : "";
    let demoIcon = (demo != undefined) ? `
    <a href="${video}" class="normal-link">
        <i class="fas fa-desktop"></i>
        Demo
    </a>` : "";
    // dividors
    let barPaper = (paper != undefined && (video != undefined || demo != undefined)) ? "|" : "";
    let barVideo = (video != undefined && demo != undefined) ? "|" : "";
    return `${paperIcon}${barPaper}${videoIcon}${barVideo}${demoIcon}`
}