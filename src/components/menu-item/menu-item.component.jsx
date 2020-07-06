import React from "react";
import PropTypes from "prop-types";

import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, size, imageUrl }) => (
    <div className={`${size} menu-item`}>
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
);

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    size: PropTypes.oneOf(["normal", "large"]),
    imageUrl: PropTypes.string,
};

MenuItem.defaultProps = {
    size: "normal",
    subtitle: "SHOP NOW!",
};

export default MenuItem;
