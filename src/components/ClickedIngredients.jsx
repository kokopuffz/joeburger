export default function ClickedIngredients (props) {
    const buttonStyle = {
    backgroundColor: props.color
  }
  return (
    <div className="ingredient-container" style={buttonStyle}>{props.name}</div>
  )
}