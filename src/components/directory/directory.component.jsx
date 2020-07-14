import React from "react"
import PropTypes from "prop-types"

import MenuItem from "component/menu-item"

import SECTIONS_DATA from "data/sections.data"

import "./directory.styles.scss"

const Dorectory = ({ children }) => (
    <div className="directory-menu">
        {SECTIONS_DATA.map((item) => (
            <MenuItem key={item.id} {...item} />
        ))}
    </div>
)

Dorectory.propTypes = {
    children: PropTypes.object,
}

export default Dorectory
