export default function chromeScripts() {
    const googleChrome = document.querySelector(".desktop__chrome");
    const browserHomeForm = document.querySelector(".desktop__chrome-main-content-form");
    const browserSearchForm = document.querySelector(".desktop__chrome-search-header-first-form");
    const googleTitle = document.querySelector(".desktop__chrome-search-header-first-google");
    const googleHomePage = document.querySelector(".desktop__chrome-main");
    const googleSearchPage = document.querySelector(".desktop__chrome-search");
    const searchResultsHeader = document.querySelector(".desktop__chrome-search-header-second");
    const searchResultsMain = document.querySelector(".desktop__chrome-search-content");

    const newTab = document.getElementById("newTab");
    const chromeIcon = document.getElementById("chromeIcon");
    const latencyDisplay = document.getElementById("latency");
    const suggestion = document.getElementById("searchResultTitle");
    const resultValue = document.getElementById("searchResult");
    const searchQuery = document.getElementById("searchButton");
    const closeChrome = document.getElementById("closeChrome");
    const chomeHomeBtn = document.getElementById("chromeHome");
    const minimiseChrome = document.getElementById("minimiseChrome");

    const chromeRefresh = document.getElementById("chromeRefresh");
    const chromeBack = document.getElementById("chromeBack");
    const chromeForward = document.getElementById("chromeForward");

    let searchInput = document.querySelector(".desktop__chrome-search-header-first-form-input");

    // Consider adding back and forward function
    const chromeHistory = [{ search: "", page: "home" }];
    let currentHistory;

    // Chrome Home Page - Form Submission
    browserHomeForm.addEventListener("submit", submitHomeForm);

    // Chrome Home Page - Return
    googleTitle.addEventListener("click", returnHome);
    chomeHomeBtn.addEventListener("click", returnHome);

    // Chrome Search Page - Form Submission
    browserSearchForm.addEventListener("keypress", submitResultForm);
    searchQuery.addEventListener("click", submitResultForm);

    // Refresh Chrome
    chromeRefresh.addEventListener("click", refreshChrome);

    // Chrome History Back & Forward
    chromeBack.addEventListener("click", shiftHistory)
    chromeForward.addEventListener("click", shiftHistory)

    // Close Chrome
    closeChrome.addEventListener("click", () => {
        googleChrome.classList.add("close");
    });

    // ----------------------------------
    // ------- Helper Functions ---------
    // ----------------------------------

    function spinSpinner(lag) {
        chromeIcon.setAttribute("src", "./images/spinner.png");
        chromeIcon.classList.add("spin");

        setTimeout(() => {
            chromeIcon.setAttribute("src", "./images/chrome.png");
            chromeIcon.classList.remove("spin");
        }, lag);
    }

    function getLatency() {
        return Math.random() * 250;
    }

    function refreshChrome() {
        const storedLatency = getLatency();
        spinSpinner(storedLatency);

        // Search Result Refresh
        if (googleHomePage.classList.contains("close")) {
            latencyDisplay.innerText = `${(storedLatency / 1000).toFixed(2)} seconds`;
            searchResultsHeader.classList.add("blink");
            searchResultsMain.classList.add("blink");

            switchRefreshIcon(storedLatency)
            setTimeout(() => {
                searchResultsHeader.classList.remove("blink");
                searchResultsMain.classList.remove("blink");
            }, storedLatency);
        } else {
            switchRefreshIcon(storedLatency)
            googleHomePage.classList.add("close");
            setTimeout(() => googleHomePage.classList.remove("close"), storedLatency);
        }
    }

    function submitHomeForm(e) {
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
            chromeHistory.push({ searchValue: homeInput, page: "search" });
            currentHistory = chromeHistory[chromeHistory.length -1];

            // console.log(chromeHistory);
            // console.log(currentHistory);

            checkArrows();
            setTimeout(() => googleSearchPage.classList.add("open"), storedLatency);
        }
    }

    function submitResultForm(e) {
        if (e.key === "Enter" && searchInput.value.length > 0
            || e.target.id === "searchButton" && searchInput.value.length > 0) {
            e.preventDefault();
            const storedLatency = getLatency();
            spinSpinner(storedLatency);

            suggestion.innerText = searchInput.value;
            resultValue.innerText = searchInput.value;
            newTab.innerText = `${searchInput.value} - Google Search`;
            googleSearchPage.classList.remove("open");
            latencyDisplay.innerText = `${(storedLatency / 1000).toFixed(2)} seconds`;
            chromeHistory.push({ searchValue: searchInput.value, page: "search" });
            currentHistory = chromeHistory[chromeHistory.length -1];

            // console.log(currentHistory, "current");
            // console.log(chromeHistory);

            setTimeout(() => googleSearchPage.classList.add("open"), storedLatency);
        }
    }

    function returnHome(e) {
        const storedLatency = getLatency();
        spinSpinner(storedLatency);
        googleSearchPage.classList.remove("open");
        setTimeout(() => googleHomePage.classList.remove("close"), storedLatency);
        chromeHistory.push({searchValue: "", page: "home"});
        currentHistory = chromeHistory[chromeHistory.length -1];

        checkArrows()
        browserHomeForm.reset();
    }

    function checkArrows() {
        const currentIndex = chromeHistory.indexOf(currentHistory);

        // Back Arrow
        currentIndex !== 0 ? chromeBack.classList.add("highlight") : chromeBack.classList.remove("highlight");

        // Forward Arrow
        currentIndex !== (chromeHistory.length - 1) ? chromeForward.classList.add("highlight") : chromeForward.classList.remove("highlight");
    }

    function shiftHistory(e) {
        const currentIndex = chromeHistory.indexOf(currentHistory);
        const storedLatency = getLatency();
        
        if (chromeBack.classList.contains("highlight") && e.target.id === "chromeBack") {
            spinSpinner(storedLatency);
            currentHistory = chromeHistory[currentIndex - 1];
            setPage(storedLatency);
        } else if (chromeForward.classList.contains("highlight") && e.target.id === "chromeForward") {
            spinSpinner(storedLatency);
            currentHistory = chromeHistory[currentIndex + 1];
            setPage(storedLatency);
        }
    }

    function setPage(storedLatency) {
        if (!googleHomePage.classList.contains("close")) googleHomePage.classList.add("close");
        if (googleSearchPage.classList.contains("open")) googleSearchPage.classList.remove("open");

        if (currentHistory.page === "home") {
            setTimeout(() => googleHomePage.classList.remove("close"), storedLatency);
            browserHomeForm.reset();
            newTab.innerText = `Google`;
        } else {
            setTimeout(() => googleSearchPage.classList.add("open"), storedLatency);
            searchInput.value = currentHistory.searchValue;
            suggestion.innerText = currentHistory.searchValue;
            resultValue.innerText = currentHistory.searchValue;
            newTab.innerText = `${currentHistory.searchValue} - Google Search`;
        }

        checkArrows();
    }

    function switchRefreshIcon(storedLatency) {
        chromeRefresh.classList.remove("fa-rotate-right");
        chromeRefresh.classList.remove("fa-sharp");
        chromeRefresh.classList.add("fa-xmark");

        setTimeout(() => {
            chromeRefresh.classList.add("fa-sharp");
            chromeRefresh.classList.add("fa-solid");
            chromeRefresh.classList.add("fa-rotate-right");  
            chromeRefresh.classList.remove("fa-xmark");
        }, storedLatency)
    }
}