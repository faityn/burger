import React from "react";
import css from "./style.module.css";

const BuildControl = props => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.orts}</div>
    <button disabled={props.disabled[props.type]} onClick={() => props.ortsHasah(props.type)} className={css.Less}>Hasah </button>
    <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
      Nemeh
    </button>
  </div>
);

export default BuildControl;
