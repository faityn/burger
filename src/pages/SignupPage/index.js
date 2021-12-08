import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };

  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  signup = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({
        error: "Nuuts ugnuud taarahgui bna",
      });
    }
  };
  render() {
    return (
      <div className={css.Signup}>
        {this.props.userId && <Redirect to="/" />}
        <h1>Burtguuliin form</h1>
        <input onChange={this.changeEmail} type="text" placeholder="Email" />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="Password "
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="Password davtan oruulna uu"
        />
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}

        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError}</div>
        )}
        {this.props.saving && <Spinner />}
        <Button text="Signup" btnType="Success" daragdsan={this.signup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
