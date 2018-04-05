let url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";

const home = document.querySelector("#home");
const business = document.querySelector("#business");
const technology = document.querySelector("#technology");
const sports = document.querySelector("#sports");
const science = document.querySelector("#science");
const entertainment = document.querySelector("#entertainment");
const listSpace = document.querySelector("#listSpace");

const fetchArticles = () => {
    fetch(url)
        .then(r => {
            return r.json();
        })
        .then(data => {
            let articles = data.articles;
            let listSpace = document.querySelector("#listSpace");
            listSpace.innerHTML = "";
            let articleList = document.createElement("ul");
            articleList.classList = "ui stackable divided items";
            listSpace.appendChild(articleList);
            articles.map(story => {
                let individualStory = document.createElement("li");
                individualStory.className = "item";
                let imageDiv = document.createElement("div");
                imageDiv.className = "ui small bordered fluid image";
                let imageSource = document.createElement("img");
                let imageURL = "";
                if (story.urlToImage === null) {
                    imageURL = "no-image-box.png";
                } else {
                    imageURL = story.urlToImage;
                }
                imageSource.setAttribute("src", imageURL);
                let contentDiv = document.createElement("div");
                contentDiv.className = "content";
                let headerDiv = document.createElement("div");
                headerDiv.className = "header";
                let mainTitle = document.createElement("a");
                let linkSetting = story.url;
                mainTitle.setAttribute("href", linkSetting);
                mainTitle.innerText = story.title;

                let metaDiv = document.createElement("div");
                metaDiv.className = "meta";
                let nameSpan = document.createElement("div");
                nameSpan.className = "name";
                nameSpan.innerText = story.author;
                let dateSpan = document.createElement("div");
                dateSpan.className = "date";
                dateSpan.innerText = story.publishedAt;
                let descriptionDiv = document.createElement("div");
                descriptionDiv.className = "description";
                let storyDescription = document.createElement("p");
                storyDescription.innerText = story.description;
                let breaker = document.createElement("br");

                articleList.appendChild(individualStory);
                individualStory.appendChild(imageDiv);
                imageDiv.appendChild(imageSource);
                individualStory.appendChild(contentDiv);
                contentDiv.appendChild(headerDiv);
                headerDiv.appendChild(mainTitle);
                contentDiv.appendChild(metaDiv);
                metaDiv.appendChild(nameSpan);
                metaDiv.appendChild(breaker);
                metaDiv.appendChild(dateSpan);
                contentDiv.appendChild(descriptionDiv);
                descriptionDiv.appendChild(storyDescription);
            });
        })
        .catch(e => {
            console.log(`An error occurred: ${e}`);
        });
};

const resetActive = () => {
    home.classList = "yellow item";
    business.classList = "yellow item";
    technology.classList = "yellow item";
    sports.classList = "yellow item";
    science.classList = "yellow item";
    entertainment.classList = "yellow item";
};

fetchArticles();

home.addEventListener("click", () => {
    url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";
    fetchArticles();
    resetActive();
    home.classList = "yellow active item";
});

business.addEventListener("click", () => {
    url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";
    fetchArticles();
    resetActive();
    business.classList = "yellow active item";
});

technology.addEventListener("click", () => {
    url =
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";
    fetchArticles();
    resetActive();
    technology.classList = "yellow active item";
});

sports.addEventListener("click", () => {
    url =
        "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";
    fetchArticles();
    resetActive();
    sports.classList = "yellow active item";
});

science.addEventListener("click", () => {
    url =
        "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";
    fetchArticles();
    resetActive();
    science.classList = "yellow active item";
});

entertainment.addEventListener("click", () => {
    url =
        "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";
    fetchArticles();
    resetActive();
    entertainment.classList = "yellow active item";
});
