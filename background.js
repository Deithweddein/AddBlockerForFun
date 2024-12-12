chrome.webNavigaton.onCommited.addListener(function(tab){
    if (tab.frameId === 0) {
        chrome.tabs.query({actove: true, lastFocusedWindow: true}, tabs => {})
    // Todo: need some fucking fixes on this godforsaken shitty code im trying to make,
    // but for now it works, And why the fuck does every programmer look the exact same and act the exact same.
    // except for that one schizophrenic guy called "Terry Andrew Davis", Yet they consider him like some kind of god 
    // yet he was an average man with sever schizophrenia.
    }
})