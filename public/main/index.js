import React from 'react';
import Dom from 'react-dom';
import {Helmet} from "react-helmet";
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
            primaryImage: fauxStore.CatalogEntryView[0].Images[0].PrimaryImage[0].image,
            alternateImages: fauxStore.CatalogEntryView[0].Images[0].AlternateImages,
            offers: fauxStore.CatalogEntryView[0].Offers[0].OfferPrice[0],
            promotions: fauxStore.CatalogEntryView[0].Promotions,
            returnPolicy: fauxStore.CatalogEntryView[0].ReturnPolicy,
            itemDescription: fauxStore.CatalogEntryView[0].ItemDescription,
            customerReview: fauxStore.CatalogEntryView[0].CustomerReview
        }
    }

    render() {
        const gridAreaName_MainImage = "main-image";
        const gridAreaName_Pricing = "pricing";
        const gridAreaName_Controls = "controls";
        const gridAreaName_ProductHighlights = "product-highlights";
        const gridAreaName_Reviews = "reviews";
        const DivWrapper = styled.div`
            height: auto;
            font-family: Helvetica, sans-serif;
            font-weight: 400;
            font-style: normal;
            display: grid;
            margin-left: 100px;
            margin-right: 100px;
            margin-bottom: 122px;
            margin-top: 122px;
            
            @media only screen and (min-width:700px) and (max-width:1000px) {
                margin-left: 50px;
                margin-right: 50px;
                margin-bottom: 61px;
                margin-top: 61px;
            }
            @media only screen and (max-width:600px) {
                margin-left: 50px;
                margin-right: 50px;
                margin-bottom: 61px;
                margin-top: 61px;
            }
            @media only screen and (max-width:500px) {
                margin-left: 25px;
                margin-right: 25px;
                margin-bottom: 30.5px;
                margin-top: 30.5px;
            }
            @media only screen and (min-width:700px){
                grid-template-columns: 0.98fr 1.02fr;
                grid-template-rows: 234px 234px 234px 234px 1fr;
                grid-template-areas: "${gridAreaName_MainImage} ${gridAreaName_Pricing}"
                                     "${gridAreaName_MainImage} ${gridAreaName_Controls}"
                                     "${gridAreaName_MainImage} ${gridAreaName_ProductHighlights}"
                                     "${gridAreaName_MainImage} ${gridAreaName_ProductHighlights}"
                                     "${gridAreaName_Reviews}   ${gridAreaName_ProductHighlights}";
                grid-column-gap: 10px;
            }
            @media only screen and (max-width:700px){
                grid-template-columns: 1fr;
                grid-template-rows: 234px 234px 234px 234px 234px 234px 300px 1fr;
                grid-template-areas:"${gridAreaName_MainImage}"
                                    "${gridAreaName_MainImage}"
                                    "${gridAreaName_MainImage}"
                                    "${gridAreaName_MainImage}"
                                    "${gridAreaName_Pricing}"
                                    "${gridAreaName_Controls}"
                                    "${gridAreaName_ProductHighlights}"
                                    "${gridAreaName_Reviews}"
            }
            @media only screen and (max-width:400px){
                grid-template-rows: 234px 234px 234px 234px 234px 234px 350px 234px 234px;
            }

        `;
        return (
                <DivWrapper>
                    <Helmet>
                        <title>{this.state.title}</title>
                    </Helmet>
                    <MainImage gridAreaName={gridAreaName_MainImage} title={this.state.title} primaryImage={this.state.primaryImage} alternateImages={this.state.alternateImages} />
                    <Pricing gridAreaName={gridAreaName_Pricing} offers={this.state.offers} promotions={this.state.promotions} />
                    <Controls gridAreaName={gridAreaName_Controls} returnPolicy={this.state.returnPolicy} />
                    <ProductHighlights gridAreaName={gridAreaName_ProductHighlights} itemDescription={this.state.itemDescription} />
                    <Reviews gridAreaName={gridAreaName_Reviews} customerReview={this.state.customerReview} />
                </DivWrapper>
        )
    } 
}
 
export default function (next) {
    Dom.render(
        <Main />, document.getElementById('root')
    );
} 

