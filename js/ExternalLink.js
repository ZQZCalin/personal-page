export {renderExternalLinks, materialIcon}

function renderExternalLinks(links) {
    // undefined link
    if (links == undefined) return "";

    return `
    <div class="external-links">
        ${
            links.map(item => `
            <a href="${item.link}" ${
                // link to external page
                (item.link.slice(0,5)==="https") ? "target=_blank":""
            } class="normal-link">
                ${materialIcon(item.name.toLowerCase())}
                <span>${item.name}</span>
            </a>
            `).join("")
        }
    </div>
    `;
}

function materialIcon(name) {
    switch (name.toLowerCase()) {
        case "paper":
            return `<i class="far fa-file-alt"></i>`;
        case "video":
            return `<i class="fas fa-video"></i>`;
        case "demo":
            return `<i class="fas fa-desktop"></i>`;
        case "link":
            return `<i class="fas fa-external-link-alt"></i>`;
        case "resume":
            return `<i class="far fa-file-alt"></i>`;
        case "github":
            return `<i class="fab fa-github"></i>`;
        case "facebook":
            return `<i class="fab fa-facebook-square"></i>`;
        case "twitter":
            return `<i class="fab fa-twitter-square"></i>`;
        case "linkedin":
            return `<i class="fab fa-linkedin"></i>`;
        default:
            return "";
    }
}