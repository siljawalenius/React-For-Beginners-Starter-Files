import React, { Component } from "react";
import {formatPrice} from "../helpers"

class Order extends Component{
    renderOrder = (key) => {
        const fish = this.props.fishes[key]
            const count = this.props.order[key]
            const isAvailable = fish && fish.status === 'available'
            if (isAvailable){
                return <li key = {key}>
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
        </li>
            } else{
                return <li key = {key}>
                    Sorry, {fish ? fish.name : 'this fish'} is no longer available!
                </li>
            }
        
    }

    render(){

        const orderIDs = Object.keys(this.props.order);
        //reduce takes in data and returns a tally of how many items
        const total = orderIDs.reduce((prevTotal, key) =>{
            const fish = this.props.fishes[key]
            const count = this.props.order[key]
            const isAvailable = fish && fish.status === 'available'
            if (isAvailable){
                return prevTotal + (count * fish.price)
            }
            return prevTotal
        }, 0)

        return(
            <div className = "order-wrap">
                <h2> Order </h2>
                <ul>
                {orderIDs.map(this.renderOrder) }
            </ul>
            <div className = "total">
                <strong>{formatPrice(total)}</strong>
            </div>
            </div>
            
        )
    }

}

export default Order