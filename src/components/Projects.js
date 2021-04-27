import {renderExternalLinks, materialIcon} from "./ExternalLink.js"

export {renderProjects, renderProjectItems, UIFilterProjects, renderProjectSingleItem}

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

        <!-- Project List -->
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
        <!-- Mandatory: Title (Optional: ID) -->
        ${renderProjectTitle(project.title, project.id)}
        <hr class="solid project-dividor">
        <!-- Mandatory: Author -->
        ${renderProjectAuthor(project.author)} <br>
        <!-- Optional: Publication -->
        ${renderProjectPublication(project.publication)}
        <!-- Optional: Tag -->
        ${renderProjectTag(project.tag)}
        <!-- Optional: External Links -->
        ${renderExternalLinks(project.externalLink)}
    </section>
    `
}

function renderProjectTitle(title, id) {
    return `
    <div class="project-title">
        <Strong>${title}</Strong>
        ${(id != undefined) ? `
        <a href="?project=${id}" class="project-link">
            ${materialIcon("link")}
        </a>
        ` : ""}
    </div>
    `;
}

function renderProjectAuthor(author) {
    // single author (String)
    return (typeof author == "string") ? author : 
        // multiple authors (Array): e1, e2, ...
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

// User Interaction: filter checkbox
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
        // render selected
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