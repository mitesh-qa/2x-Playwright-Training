class Browser {
    // Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = false;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("Starting the browser")
    }
    closeBrowser() {
        console.log(this.name + " browser is closed.")
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(chrome.isOpen);
firefox.closeBrowser();
chrome.closeBrowser();