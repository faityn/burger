import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class ShippingPage extends React.Component {
  cancelOrder = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Tanii zahialga</strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Price: {this.props.price}</strong>
        </p>
        <Burger />
        <Button
          daragdsan={this.cancelOrder}
          btnType="Danger"
          text="Order cancel"
        />

        <Button
          daragdsan={this.showContactData}
          btnType="Success"
          text="Hurgeltiin medeelel oruulah"
        />

        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(ShippingPage);
