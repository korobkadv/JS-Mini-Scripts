const links = [
    { link: "visualization_of_chords", text: "Visualization of chords" }
];

const searchAside = document.querySelector(".col__aside");

function createNav(links) {
    const createNav = document.createElement("nav");
    searchAside.append(createNav);

    const searchNav = document.querySelector("nav");
    const createUl = document.createElement("ul");
    const markup = links.reduce((acc, item) => acc + '<li><a href="' + item.link + '" class="' + item.link + '">' + item.text + '</a></li>', '');
    createUl.innerHTML = '<li><a href="home" class="home active">Home</a></li>' + markup;
    searchNav.append(createUl);
}
createNav(links);

const nav = document.querySelector("ul");

nav.addEventListener("click", handleNavClick);

function handleNavClick(event) {
    event.preventDefault();
    const currentActiveLink = nav.querySelector("a.active");

    if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
    }
    event.target.classList.add("active");

    const nameScript = event.target.classList[0];

    startScript(nameScript);
}

const searchBody = document.querySelector(".col__article");

function startScript(nameScript) {
    searchBody.innerHTML = '';

    const searchScript = document.querySelector(".script");
    searchScript.remove();

    const createDiv = document.createElement("script");
    createDiv.setAttribute("class", 'script');
    createDiv.setAttribute("type", 'text/javascript');
    createDiv.setAttribute("src", './scripts/' + nameScript + '.js');
    document.body.appendChild(createDiv);

    
}

function addCssAndDescription(style, description) {

    if (document.querySelector(".addCss") !== null) { 
        const searchAddCss = document.querySelector(".addCss")
        searchAddCss.remove();
      }

    const createCssBlock = document.createElement("style");
    createCssBlock.setAttribute("class", 'addCss');
    createCssBlock.innerHTML = style;
    document.body.append(createCssBlock);


    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "q");
    createDiv.innerHTML = description;
    searchBody.append(createDiv);


}