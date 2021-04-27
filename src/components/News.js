export {renderNews, renderNewsItems, UISearchNews}

const newsMaxLength = 10;

function renderNews(news) {
    return`
    <section id="section-news">
        <h1>News</h1>
        <!-- Search Bar -->
        <div class="search">
            <input type="search" name="news" placeholder="Search News...">
        </div>
        <!-- News List -->
        <div id="news-list" class="row">
            <!-- renderNewsItems(news) -->
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

function UISearchNews(news) {
    // filter news using title keyword
    let keyword = document.querySelector(".search input[name='news']").value;
    let filterNews = news.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    renderNewsItems(filterNews);
}