import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { auth } from "util/firebase.utils"
import CartIcon from "component/cart-icon"
import CartDropdown from "component/cart-dropdown"

import { ReactComponent as Logo } from "asset/crown.svg"

import "./header.styles.scss"

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signIn">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser: currentUser,
    hidden: hidden
})

export default connect(mapStateToProps)(Header)