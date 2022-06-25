import ClickedIngredients from './ClickedIngredients.jsx'

export default function BurgerCreator ({myBurger, clearIngredients}) {
  const currentBurger = myBurger.map((ingredient, idx) => {
    return (
      <ClickedIngredients
        key={`yum ${idx}`}
        name={ingredient.name}
        color={ingredient.color}
      />
    )
  })
  return (
    <div className="container">
      <h3>my burger creation</h3>
      <div>
        {currentBurger}
      </div>
      <button onClick={clearIngredients}>clear</button>
    </div>
  )
}