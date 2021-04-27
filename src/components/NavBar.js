export {mainMenu, projectMenu, renderNavBar}

var mainMenu = [
    {
        name: "About",
        link: "#section-about"
    },
    {
        name: "News",
        link: "$section-news"
    },
    {
        name: "Projects",
        link: "#section-projects"
    }
];

var projectMenu = [
    {
        name: "go back",
        link: "."
    }
]

function renderNavBar(menu) {
    return`
    <nav>
        <ul>
            ${
                menu.map(section => `
                    <li><a href="${section.link}">
                        ${section.name}
                    </a></li>
                `).join("")
            }
        </ul>
    </nav>
    `;
}