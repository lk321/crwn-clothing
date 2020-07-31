import React from "react"
import PropTypes from "prop-types"

import "./custom-button.styles.scss"

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted && 'inverted'} ${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherProps}>
        {children}
    </button>
)

CustomButton.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    isGoogleSignIn: PropTypes.bool,
    inverted: PropTypes.bool
}

CustomButton.defaultProps = {
    type: "button",
    isGoogleSignIn: false,
    inverted: false
}

export default CustomButton