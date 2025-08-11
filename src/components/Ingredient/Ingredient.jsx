const Ingredient = (props) => {
  return (
    <li key={props.index} style={{ backgroundColor: props.ingredient.color }}>
        {props.ingredient.name}
        {props.addToBurger ?
            <button onClick={() => props.addToBurger(props.ingredient)}>+</button> : 
            <button onClick={() => props.removeFromBurger(props.index)}>X</button>}
    </li>
  )
};

export default Ingredient;