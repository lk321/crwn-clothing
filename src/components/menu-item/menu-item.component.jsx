import React from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"

import "./menu-item.styles.scss"

const MenuItem = ({ title, subtitle, size, linkUrl, imageUrl, history, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>
)

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    size: PropTypes.oneOf(["normal", "large"]),
    linkUrl: PropTypes.string,
    imageUrl: PropTypes.string,
}

MenuItem.defaultProps = {
    size: "normal",
    subtitle: "SHOP NOW!",
}

export default withRouter(MenuItem)
