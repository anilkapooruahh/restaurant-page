const menuPageLoad = (container) => {
    container.textContent = ""
    const layout = document.createElement("div")
  
    const heading = document.createElement("h1")
    heading.classList.add("heading")
    heading.textContent = "Menu"
    layout.appendChild(heading)
  
  
    container.appendChild(layout)
} 

export default menuPageLoad