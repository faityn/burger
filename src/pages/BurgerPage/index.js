import React, { Component } from "react";

import Burgers from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";

const INGREDIENTS_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENTS_NAMES = {
  bacon: "Gahain mah",
  cheese: "Byslag",
  meat: "Uhriin mah",
  salad: "Salad",
};

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };

  continueOrder = () => {
    this.props.history.push("/ship");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>

        <Burgers />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ortsHasah={this.props.burgereesOrtsHasah}
          ortsNemeh={this.props.burgertOrtsNemeh}
        />
      </div>
    );
  }
}

export default BurgerPage;
