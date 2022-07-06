const contactPageLoad = (container) => {
    container.textContent = ""
    const layout = document.createElement("div")
  
    const heading = document.createElement("h1")
    const p = document.createElement("p")
    p.textContent = "Contact us on abc@xyz.com or call us on 1234567890"
    const address = document.createElement("p")
    address.textContent = "Find Us at Point Nemo, Pacific Ocean"
    heading.classList.add("heading")
    heading.textContent = "Contact Us"
    
    layout.appendChild(heading)
    layout.appendChild(p)
    layout.appendChild(address)
  
    container.appendChild(layout)
} 


export default contactPageLoad