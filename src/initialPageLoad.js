
import './style.css'
import Food from './image.png'
import Pasta from './pasta.png'


const initialPageLoad = (container) => {
  container.textContent = ""
  container.classList.add("main-layout")
  const first = document.createElement("div")
  const second = document.createElement("div")
  const third = document.createElement("div")
  const fourth = document.createElement("div")

  const heading = document.createElement("h1")
  heading.classList.add("heading")
  heading.textContent = "Restaurant Page"
  second.appendChild(heading)

  const foodImg = new Image()
  foodImg.src = Food
  first.appendChild(foodImg)

  const pastaImg = new Image()
  pastaImg.src = Pasta
  fourth.appendChild(pastaImg)


  container.appendChild(first)
  container.appendChild(second)
  container.appendChild(third)
  container.appendChild(fourth)
};

export default initialPageLoad