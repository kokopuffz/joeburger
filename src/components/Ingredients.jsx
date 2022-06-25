export default function ingredients (props) {
  const buttonStyle = {
    backgroundColor: props.color
  }
  return (
    <div>
      <button
        onClick={props.handleAddToBurger}
        style={buttonStyle}>{props.name}</button>
    </div>
  )
}

