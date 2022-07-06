import './style.css'
import Spaghetti from "./spaghetti-alfredo.png"
import Sushi from "./image.png"
import Ramen from "./ramen.png"
import Pizza from "./pizza.png"


const menuPageLoad = (container) => {
    const menuItems = [
        {
            "name" : "Fettuccine Alfredo",
            "image" : Spaghetti,
            "desc" : "Fettuccine Alfredo or fettuccine al burro is an Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese (Italian: pasta al burro e parmigiano). As the cheese melts, it emulsifies the liquids to form a smooth and rich cheese sauce coating the pasta"
        },
        {
            "name" : "Chef's Selection of Sushi",
            "image" : Sushi ,
            "desc" : "A selection of fresh sushi, selected by our world class chefs, updated daily based on fresh catches"
        },
        {
            "name" : "Tonkotsu Ramen",
            "image" : Ramen,
            "desc" : "Tonkotsu ramen is a hearty pork-based soup that has become one of the most popular varieties of Japanese ramen."
        },
        {
            "name" : "Margherita",
            "image" : Pizza,
            "desc" : "Margherita pizza is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil."
        }
    ]


    container.textContent = ""
    const layout = document.createElement("div")
    layout.classList.add("menu-layout")
    const heading = document.createElement("h1")
    heading.classList.add("heading")
    heading.textContent = "Menu"
    layout.appendChild(heading)
    
    const menu = document.createElement("div")
    menu.classList.add("menu")
    
    menuItems.forEach(food => {
        createMenuElement(food, menu)
    });
    
    layout.appendChild(menu)
    container.appendChild(layout)
} 

const createMenuElement = (foodItem, container) => {
    const item = document.createElement("div")
    item.classList.add("menu-item")


    const itemName = document.createElement("h3")
    const itemImage = new Image()
    const itemDesc = document.createElement("p")


    itemDesc.textContent = foodItem.desc
    itemImage.src = foodItem.image    
    itemName.textContent = `${foodItem.name}`
    
    
    item.appendChild(itemName)
    item.appendChild(itemImage)
    item.appendChild(itemDesc)

    container.appendChild(item)
} 


export default menuPageLoad