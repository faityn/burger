import React, { Fragment } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link="/">
            SHINE ZAHIALGA
          </MenuItem>
          <MenuItem link="/orders">Orders</MenuItem>
          <MenuItem link="/logout">Logout</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link="/login">Login</MenuItem>
          <MenuItem link="/signup">Signup</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};
export default connect(mapStateToProps)(Menu);
