import React, { Component } from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

class Order extends Component {
    static propTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    }
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
        classNames : "order",
          key,
          timeout:{ enter: 500, exit: 500 }
    }
    if (isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            <span>
                <TransitionGroup component = "span" className = "count" >
                    <CSSTransition classNames = "count" key = {count} timeout = {{enter: 500, exit: 500}}>
                        <span>{count}</span>
                    </CSSTransition>
                    
                </TransitionGroup>
              
              lbs {fish.name}
              {formatPrice(count * fish.price)}
              <button onClick={() => this.props.deleteFromOrder(key)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    } else {
      return (
          <CSSTransition {...transitionOptions}>
            <li key={key}>
            Sorry, {fish ? fish.name : "this fish"} is no longer available!
            </li>
        </CSSTransition>
      );
    }
  };

  render() {
    const orderIDs = Object.keys(this.props.order);
    //reduce takes in data and returns a tally of how many items
    const total = orderIDs.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2> Order </h2>
        <TransitionGroup component="ul" className="order">
          {orderIDs.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
