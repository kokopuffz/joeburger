import Ingredients from './Ingredients.jsx'

export default function BurgerPanelIngredients({ingredientData, handleAddToBurger}) {
  const allIngredients = ingredientData.map((ingredient, index) => {
    return (
      <Ingredients
        key={`yummy ${index}`}
        name={ingredient.name}
        color={ingredient.color}
        handleAddToBurger={handleAddToBurger}
      />
    )
  })
  return (
    <div className="container">
      <h3>Ingredients List</h3>
      {allIngredients}
    </div>
  )
}
