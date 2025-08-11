import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (<ul>
    {props.ingredients.map((ingredient, index) => {
        return <Ingredient ingredient={ingredient} index={index} addToBurger={props.addToBurger} />
    })}
    </ul>)
};

export default IngredientList;
