import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (<ul>
    {props.ingredients.length === 0 ? 'No ingredients' : 
      props.ingredients.map((ingredient, index) => {
      return <Ingredient ingredient={ingredient} index={index} removeFromBurger={props.removeFromBurger} />
    })}
  </ul>
  )
};

export default BurgerStack;