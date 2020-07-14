import React, { Component } from "react"

import SHOP_DATA from "data/shop.data"

import CollectionPreview from "component/collection-preview"

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }

    render = () => {
        const { collections } = this.state

        return (
            <div className="shop-page">
                {collections.map(collection => <CollectionPreview key={collection.id} {...collection}/> )}
            </div>
        )
    }
}

export default ShopPage