import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Tanii zahialga </h3>
      <p> Tanii songoson ortsuud: </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Zahialgiin dun: {props.price}</strong>
      </p>
      <p>Tsaashaa urgeljluuleh uu</p>

      <Button daragdsan={props.onCancel} btnType="Danger" text="Tatgalzah" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="Urgeljluuleh"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    ingredientNames: state.burgerReducer.ingredientNames,
    price: state.burgerReducer.totalPrice
  };
};

export default connect(mapStateToProps)(OrderSummary);
