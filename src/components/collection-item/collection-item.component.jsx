import React from "react"
import PropTypes from "prop-types"

import "./collection-item.styles.scss"

const CollectionPreview = ({ id, name, imageUrl, price }) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)

CollectionPreview.propsTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    price: PropTypes.string.isRequired
}

export default CollectionPreview