import {materialIcon} from "./ExternalLink.js"
import Resume from "../assets/Resume.pdf"
import Portfolio from "../assets/Qinzi_Peilin.jpg"

export {renderAbout}

function renderAbout(about) {
    return`
    <section id="section-about">
        <h1>About</h1>
        <div class="row">
            <div class="col-6 vertical-flex">
                <img id="portfolio" src="${Portfolio}" alt="Portfolio">
                <p>
                    <b>${about.position} @ ${about.institute}</b> <br>
                    e-mail: ${about.email} <br>
                    <a href="${Resume}" class="normal-link">
                        ${materialIcon("resume")}
                        Resume
                    </a> | 
                    <a href="${about.github}" target="_blank" class="normal-link">
                        ${materialIcon("github")}
                        Github
                    </a>
                    ${
                        // hide icon links
                        (false) ? ["facebook", "twitter", "linkedin", "github"]
                        .map(icon => `<a href="" class="icon-link">${materialIcon(icon)}</a>`)
                        .join("") : ""
                    }
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