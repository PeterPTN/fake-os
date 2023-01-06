export default function chromeScripts() {
    const googleChrome = document.querySelector(".desktop__chrome");
    const browserHomeForm = document.querySelector(".desktop__chrome-main-content-form");
    const browserSearchForm = document.querySelector(".desktop__chrome-search-header-first-form");
    const googleTitle = document.querySelector(".desktop__chrome-search-header-first-google");
    const googleHomePage = document.querySelector(".desktop__chrome-main");
    const googleSearchPage = document.querySelector(".desktop__chrome-search");
    const newTab = document.getElementById("newTab");
    const chromeIcon = document.getElementById("chromeIcon");
    const latencyDisplay = document.getElementById("latency");
    const suggestion = document.getElementById("searchResultTitle");
    const resultValue = document.getElementById("searchResult");
    const searchQuery = document.getElementById("searchButton");
    const closeChrome = document.getElementById("closeChrome");
    let searchInput = document.querySelector(".desktop__chrome-search-header-first-form-input");

    // Chrome Home Page - Form Submission
    browserHomeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const homeInput = document.querySelector(".desktop__chrome-main-content-form-search-input").value;

        if (homeInput.length > 0) {
            const storedLatency = getLatency();
            spinSpinner(storedLatency);
            latencyDisplay.innerText = `${(storedLatency / 1000).toFixed(2)} seconds`;
            newTab.innerText = `${homeInput} - Google Search`;
            searchInput.value = homeInput;
            suggestion.innerText = homeInput;
            resultValue.innerText = homeInput;
            googleHomePage.classList.add("close");
            setTimeout(() => googleSearchPage.classList.add("open"), storedLatency);
        }
    })

    // Chrome Home Page - Return
    googleTitle.addEventListener("click", (e) => {
        const storedLatency = getLatency();
        spinSpinner(storedLatency);
        googleSearchPage.classList.remove("open");
        setTimeout(() => googleHomePage.classList.remove("close"), storedLatency);
        browserHomeForm.reset();
    })

    // Chrome Search Page - Form Submission
    function submitForm(e) {
        if (e.key === "Enter" || e.target.id === "searchButton") {

            console.log(searchInput.value)
            e.preventDefault();
            const storedLatency = getLatency();
            suggestion.innerText = searchInput.value;
            resultValue.innerText = searchInput.value;
            newTab.innerText = `${searchInput.value} - Google Search`;
            googleSearchPage.classList.remove("open");
            latencyDisplay.innerText = `${(storedLatency / 1000).toFixed(2)} seconds`;
            spinSpinner(storedLatency);
            setTimeout(() => googleSearchPage.classList.add("open"), storedLatency);
        }
    }

    browserSearchForm.addEventListener("keypress", submitForm);
    searchQuery.addEventListener("click", submitForm);

    //Close chrome
    closeChrome.addEventListener("click", () => {
        googleChrome.classList.add("close");
    });

    // Function spinSpinner spins the spinner
    function spinSpinner(lag) {
        chromeIcon.setAttribute("src", "./images/spinner.png");
        chromeIcon.classList.add("spin");

        setTimeout(() => {
            chromeIcon.setAttribute("src", "./images/chrome.png");
            chromeIcon.classList.remove("spin");
        }, lag);
    }

    // Random value
    function getLatency() {
        return Math.random() * 250;
    }
}