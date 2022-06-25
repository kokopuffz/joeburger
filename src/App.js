import { render } from '@testing-library/react'
import React, {useState} from 'react'
import BurgerPanelIngredients from './components/BurgerPanelIngredients.jsx'
import BurgerCreator from './components/BurgerCreator.jsx'

const ingredientData = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
]


export default function App () {
  const [myBurger, setMyBurger] = useState([])
  const handleAddToBurger = (e) => {
    setMyBurger([{name: e.target.innerText, color:e.target.style.backgroundColor}, ...myBurger])
  }
  const clearIngredients = () => {
    setMyBurger([])
  }

  return (
    <div className="main-container">
      <BurgerPanelIngredients 
        ingredientData={ingredientData} 
        handleAddToBurger={handleAddToBurger}
      />
      <BurgerCreator 
        myBurger={myBurger} 
        clearIngredients={clearIngredients}
      />
    </div>
  )
}


