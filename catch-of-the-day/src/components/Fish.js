import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice}  from '../helpers'

class Fish extends Component{
    handleClick = () =>{
        this.props.addToOrder(this.props.index)
    }
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string,
        }),
        addToOrder: PropTypes.func,
    }
    render(){
        const {image, name, desc, price, status} = this.props.details;
        const isAvailable = status === 'available';
        return(
            <li className = "menu-fish"> 
                <img src = {image} alt = {this.props.details.name} />
                <h3 className = "fish-name">{name}
                    <span className = "price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button 
                    disabled = {!isAvailable} 
                    onClick = {this.handleClick}
                > 
                    {isAvailable ? 'Add to Order' : 'Sold Out!'}
                </button>
            </li>
        )
    }

}


export default Fish