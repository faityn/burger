import React, { Component } from "react";

import Burgers from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";


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
