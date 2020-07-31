import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { addItem } from "rdx/cart/cart.action";

import CustomButton from "component/custom-button";

import "./collection-item.styles.scss"

const CollectionPreview = ({ item, addItem }) => {
    const { name, price, imageUrl } = item

    return (
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
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

CollectionPreview.propsTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        price: PropTypes.string.isRequired
    })
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionPreview)