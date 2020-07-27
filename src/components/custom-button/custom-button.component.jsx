import React from "react"
import PropTypes from "prop-types"

import "./custom-button.styles.scss"

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherProps}>
        {children}
    </button>
)

CustomButton.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    isGoogleSignIn: PropTypes.bool
}

CustomButton.defaultProps = {
    type: "button",
    isGoogleSignIn: false
}

export default CustomButton