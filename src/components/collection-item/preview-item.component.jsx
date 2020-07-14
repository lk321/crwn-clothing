import React from "react"
import PropTypes from "prop-types"

import "./collection-item.styles.scss"

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    </div>
)

CollectionPreview.propsTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array
}

CollectionPreview.defaultProps = {
    items: []
}

export default CollectionPreview