import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Orts: Gahain mah: {props.Order.orts.bacon}, Salad :{" "}
        {props.Order.orts.salad}, Uhriin mah : {props.Order.orts.meat}, Cheese :{" "}
        {props.Order.orts.cheese}
      </p>
      <p>
        Address: {props.Order.hayag.name} | {props.Order.hayag.street} |{" "}
        {props.Order.hayag.city}
      </p>
      <p>
        Price: <strong>{props.Order.dun}₮</strong>
      </p>
    </div>
  );
};

export default Order;
