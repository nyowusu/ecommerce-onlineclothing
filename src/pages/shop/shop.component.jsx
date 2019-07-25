import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
        console.log(this.state)
    }


    render() {

        const {collections} = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/> 
                    ))
                }
                {/* <CollectionPreview title={this.state.collection.title} items={this.state.collection.items}/> */}
            </div>
        );
    }
} 

export default ShopPage;