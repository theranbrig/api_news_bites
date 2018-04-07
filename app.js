/////////////////////////////////////////////////
////// Initial Variables

// Home URL
let url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca";

// DOM selectors
const home = document.querySelector("#home");
const business = document.querySelector("#business");
const technology = document.querySelector("#technology");
const sports = document.querySelector("#sports");
const science = document.querySelector("#science");
const entertainment = document.querySelector("#entertainment");
const menuItem = document.getElementsByClassName("navLink");
const listSpace = document.querySelector("#listSpace");

/////////////////////////////////////////////////
////// Initial News Page Function
fetchArticles();

/////////////////////////////////////////////////
////// Fetch News Function

// fetch articles function
function fetchArticles() {
    fetch(url)
        .then(r => {
            return r.json();
        })
        .then(data => {
            let articles = data.articles;
            createList();
            articles.map(story => {
                createStory();
                createImage(story);
                createContentHeader();
                createTitle(story);
                createMeta();
                createName(story);
                createDate(story);
                createDescription(story);
                htmlConstruction();
            });
        })
        .catch(e => {
            console.log(`An error occurred: ${e}`);
        });
}

/////////////////////////////////////////////////
////// Create List Functions

// empty list item variables for scope
let articleList = (individualStory = imageDiv = imageSource = contentDiv = headerDiv = mainTitle = metaDiv = nameSpan = dateSpan = descriptionDiv = storyDescription = breaker = null);

//create list
function createList() {
    // reset list area
    listSpace.innerHTML = "";
    //create list and append to list area
    articleList = document.createElement("ul");
    articleList.classList = "ui stackable divided items";
    listSpace.appendChild(articleList);
}

//create individual story list item
function createStory() {
    individualStory = document.createElement("li");
    individualStory.className = "item";
}

// create story image
function createImage(story) {
    imageDiv = document.createElement("div");
    imageDiv.className = "ui small bordered fluid image";
    imageSource = document.createElement("img");
    // get list url or add no image image to source
    let imageURL = "";
    if (story.urlToImage === null) {
        imageURL = "no-image-box.png";
    } else {
        imageURL = story.urlToImage;
    }
    imageSource.setAttribute("src", imageURL);
}

// create content and header div
function createContentHeader() {
    //  creates content div
    contentDiv = document.createElement("div");
    contentDiv.className = "content";
    // creates header div
    headerDiv = document.createElement("div");
    headerDiv.className = "header";
}

// create main title and link to story
function createTitle(story) {
    mainTitle = document.createElement("a");
    let linkSetting = story.url;
    mainTitle.setAttribute("href", linkSetting);
    mainTitle.innerText = story.title;
}

// create meta div for item
function createMeta() {
    metaDiv = document.createElement("div");
    metaDiv.className = "meta";
}

// create story author
function createName(story) {
    // create story author
    nameSpan = document.createElement("div");
    nameSpan.className = "name";
    nameSpan.innerText = story.author;
}

// create date and shorten
function createDate(story) {
    // create story date
    function storyDate(story) {
        let storyDate = story.publishedAt;
        return storyDate.toString().substring(0, 10);
    }
    dateSpan = document.createElement("div");
    dateSpan.className = "date";
    dateSpan.innerText = storyDate(story);
}

// create story description
function createDescription(story) {
    // create description div
    descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";
    // create description paragraph
    storyDescription = document.createElement("p");
    storyDescription.innerText = story.description;
    breaker = document.createElement("br");
}

// append all list item elements to the list
function htmlConstruction() {
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
}

/////////////////////////////////////////////////
////// Button Functions

// adds active class to menu items
function changeActiveClass(id) {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList = "yellow item navLink";
    }
    event.target.classList = "yellow active item navLink";
}

// create url string for next category
function createUrl(navId) {
    let newsTopic = event.target.id.toString();
    if (newsTopic === "home") {
        newsTopic = "";
    }
    return (url =
        "https://newsapi.org/v2/top-headlines?country=us&category=" +
        newsTopic +
        "&apiKey=bb3e2cffda7d4f0c8f9b8c46c8bbd8ca");
}

// function for grouping button events together
function navButtonClick(buttonID) {
    changeActiveClass(buttonID);
    createUrl(buttonID);
    fetchArticles();
}

/////////////////////////////////////////////////
////// Button Event Listener

document.addEventListener("click", event => {
    if (event.target.classList.contains("navLink")) {
        let buttonID = event.target.id;
        navButtonClick(buttonID);
    }
});
