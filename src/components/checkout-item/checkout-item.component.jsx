import React from 'react'
import {connect} from 'react-redux'

import './checkout-item.styles.scss';

import {clearItemFromCart,addItem,reduceItem} from '../redux/cart/cart.actions' 

const CheckoutItem =({cartItem, removeItem,addItem,reduceItem})=>{
    const {imageUrl,name,quantity,price} =cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>reduceItem(cartItem)} > &#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)} >&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>removeItem(cartItem)}>&#10005;</span>
        </div>
    )
    }

    const mapDispatchToProps =dispatch=>({
        removeItem: (cartItem)=>dispatch(clearItemFromCart(cartItem)),
        addItem: (cartItem) =>dispatch(addItem(cartItem)),
        reduceItem: (cartItem)=>dispatch(reduceItem(cartItem))
    })
export default connect(null,mapDispatchToProps)(CheckoutItem);