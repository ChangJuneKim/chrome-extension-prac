chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"]
  })
  
  chrome.contextMenus.onClicked.addListener((e) => {
    console.log(e)
  })
  
  chrome.contextMenus.create({
    title: "Test Context Menu 1",
    id: "contextMenu2",
    parentId: "contextMenu1",
    contexts: ["page", "selection"]
  })
  
  chrome.contextMenus.create({
    title: "Test Context Menu 2",
    id: "contextMenu3",
    parentId: "contextMenu2",
    contexts: ["page", "selection"]
  })
})

console.log("백그라운드 러닝")