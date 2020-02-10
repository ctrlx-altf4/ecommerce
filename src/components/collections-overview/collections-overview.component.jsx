import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';

import {selectShopCollectionsForPreview} from '../../components/redux/shop/shop.selectors'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const CollectionOverview =({collections})=>(
    <div className="collection-overview">
        {
            collections.map(({id, ...OtherCollectionsProp})=>(
                <CollectionPreview key={id} {...OtherCollectionsProp}/>
            ))
        }
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)