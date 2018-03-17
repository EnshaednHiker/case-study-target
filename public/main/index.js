import React from 'react';
import Dom from 'react-dom';
import fauxStore from '~/case-study/item-data.json';
import MainImage from '~/components/MainImage';
import Reviews from '~/components/Reviews';
import Pricing from '~/components/Pricing';
import Controls from '~/components/Controls';
import ProductHighlights from '~/components/ProductHighlights';

import styled from 'styled-components';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            title: fauxStore.CatalogEntryView[0].title,
            primaryImage: fauxStore.CatalogEntryView[0].Images[0].PrimaryImage,
            alternateImages: fauxStore.CatalogEntryView[0].Images[0].AlternateImages
        }
    }
    componentDidMount(){
        document.title = this.state.title;
    }
    render() {
        const gridAreaName_MainImage = "main-image";
        const gridAreaName_Pricing = "pricing";
        const gridAreaName_Controls = "controls";
        const gridAreaName_ProductHighlights = "product-highlights";
        const gridAreaName_Reviews = "reviews";
        const DivWrapper = styled.div`
            display: grid;
            height: 1200px;
            font-family: Helvetica, sans-serif;
            font-weight: 400;
            font-style: normal;
            grid-template-columns: 50% 50%;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: "${gridAreaName_MainImage} ${gridAreaName_Pricing}"
                                 "${gridAreaName_MainImage} ${gridAreaName_Controls}"
                                 "${gridAreaName_MainImage} ${gridAreaName_Controls}"
                                 "${gridAreaName_MainImage} ${gridAreaName_ProductHighlights}"
                                 "${gridAreaName_Reviews}   ${gridAreaName_ProductHighlights}"
                                 "${gridAreaName_Reviews}   ${gridAreaName_ProductHighlights}";
            grid-gap: 10px;
        `;
        
        console.log(fauxStore);
        return (
            <DivWrapper>
                <MainImage gridAreaName={gridAreaName_MainImage} title={this.state.title} primaryImage={this.state.primaryImage} alternateImages={this.state.alternateImages} />
                <Reviews gridAreaName={gridAreaName_Reviews} />
                <Pricing gridAreaName={gridAreaName_Pricing} />
                <Controls gridAreaName={gridAreaName_Controls} />
                <ProductHighlights gridAreaName={gridAreaName_ProductHighlights} />
            </DivWrapper>
        )
    } 
}
 
export default function (next) {
    Dom.render(
        <Main />, document.getElementById('root')
    );
} 

