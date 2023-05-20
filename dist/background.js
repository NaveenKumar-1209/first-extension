/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/


chrome.tabs.onActivated.addListener(function(tab){
    console.log("activatedTab", tab)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var activeTab = tabs[0]
        console.log("activeTab", activeTab, tabs)
        chrome.tabs.sendMessage(activeTab.id, {msg:"Hi I am from Background"}, (response)=>{
            console.log("response", response)
        })
    })
})
/******/ })()
;
//# sourceMappingURL=background.js.map