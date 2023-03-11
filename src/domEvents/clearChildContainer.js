const childContainer = document.getElementById("child-container")

const clearChildContainer = ()=>{
    while(childContainer.firstChild)childContainer.removeChild(childContainer.firstChild)
}

export {clearChildContainer}