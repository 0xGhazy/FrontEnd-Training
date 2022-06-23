let myBookmarks = []
const bookmarkLink = document.getElementById("bookmark-link")
const saveButton = document.getElementById("save-btn")
const bookmarksList = document.getElementById("bookmarks-list")
const deleteButton = document.getElementById("delete-btn")
const bookmarksFromLocalStorage = JSON.parse( localStorage.getItem("myBookmarks"))
const tabeButton = document.getElementById("tabe-btn")

// Reading the bookmarks from local storage and render it on screen
if (bookmarksFromLocalStorage) {
    myBookmarks = bookmarksFromLocalStorage
    render(myBookmarks)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    // append to the <il> Element.
    bookmarksList.innerHTML = listItems;
}


tabeButton.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myBookmarks.push(tabs[0].url)
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
        render(myBookmarks)
    }) // end of chrome.tabs.query.
}) // end of event listener.


deleteButton.addEventListener("dblclick", function() {
    // clear the local storage.
    localStorage.clear()
    // clear myBookmarks.
    myBookmarks = []
    // render the empty bookmarks.
    render(myBookmarks)
})


saveButton.addEventListener("click", function() {
    if (bookmarkLink.value === ""){
        alert("[-] Can't let bookmarks url empty.")
    } else{
        myBookmarks.push(bookmarkLink.value)
        bookmarkLink.value = ""
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks) )
        render(myBookmarks)
    }
})


/* TODO:
    [x] Check for the url length if < 1 don't push else it's okay.
    [x] Save urls in local storage.
    [x] Add delete all button.
*/