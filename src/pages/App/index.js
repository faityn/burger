import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";

import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import LoginPage from "../LoginPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginActions";
import * as signupActions from "../../redux/actions/signupActions";
class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        const time = expireDate.getTime() - new Date().getTime();
        this.props.autoLogoutAfterMillisec(time);
      } else {
        this.props.logout();
      }
    }
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          {this.props.userId ? (
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/" component={BurgerPage} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMillisec: (time) =>
      dispatch(signupActions.autoLogoutAfterMillisec(time)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
