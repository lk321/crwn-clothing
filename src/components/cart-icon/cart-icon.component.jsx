import React from "react"
import { connect } from "react-redux"
import { ReactComponent as ShippingIcon } from "asset/shopping-bag.svg"

import { toggleCartHidden } from "rdx/cart/cart.action";

import "./cart-icon.styles.scss"

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShippingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = () => dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)