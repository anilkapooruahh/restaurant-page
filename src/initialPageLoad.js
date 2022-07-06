
import './style.css'
import Food from './image.png'
import Pasta from './pasta.png'


const initialPageLoad = (container) => {
  container.textContent = ""
  container.classList.add("main-layout")
  const first = document.createElement("div")
  first.classList.add("first", "main-layout-div")
  const second = document.createElement("div")
  second.classList.add("second", "main-layout-div")
  const third = document.createElement("div")
  third.classList.add("third", "main-layout-div")
  const fourth = document.createElement("div")
  fourth.classList.add("fourth", "main-layout-div")
  
  const headingDescription = document.createElement("p")
  headingDescription.textContent = "Japanese Italian cuisine"
  first.appendChild(headingDescription)

  const heading = document.createElement("h1")
  heading.classList.add("heading")
  heading.textContent = "Shogun Mario"
  first.appendChild(heading)

  const text = document.createElement("p")
  text.textContent = "Best quality food made with premium ingredients. Order online or visit us"
  third.appendChild(text)


  const foodImg = new Image()
  foodImg.src = Food
  second.appendChild(foodImg)

  const pastaImg = new Image()
  pastaImg.src = Pasta
  fourth.appendChild(pastaImg)


  container.appendChild(first)
  container.appendChild(second)
  container.appendChild(third)
  container.appendChild(fourth)
};

export default initialPageLoad