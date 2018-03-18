import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';
import Line from '~/assets/images/shape-2.png';
import Ticket from '~/assets/images/vector-smart-object-copy.png'
export default class Pricing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            } 
        }
    

    render() {

        const DivWrapper = styled.div `
            grid-area: ${this.props.gridAreaName};
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
        `;
        const Offers_div = styled.div`

        `;
        const StyledLine_Div = styled.div`
            height: 1px;
            max-width: 470px;
            width: 100%;
            background-color: #cccccc;
        `;
        const Offers_h2 = styled.h2`
            display: inline-flex;
            font-family: Arial,sans-serif;
            line-height: 13.75px;
            margin-bottom: 41px;
        `;
        const Offers_p = styled.p`
            display: inline-flex;
            color: #666666;
            font-family: Arial,sans-serif;
            font-size: 12px;
            margin-left: 6px;
            margin-bottom: 41px;
        `;
        const Promotions_div = styled.div`

        `;
        let promotionsTypes = this.props.promotions.map((promotion)=>{
            return promotion.Description
        });
        let promotionsText = []; 
        promotionsTypes.forEach((promotion)=>{
            promotion.forEach((promotionDescription)=>{
                promotionsText.push(promotionDescription.shortDescription);
            });
        }); 
        const Promotions = promotionsText.map((item,index)=>{
            const Promotion = styled.li`
                list-style-type: none;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                
                max-width:100%;
                flex-shrink: 2;
            `;
            const Image = styled.img`
                width: 16px;
                height: 15px;
                margin-right: 9px;
            `
            const P = styled.p`
                font-size: 18px;
                color: #cc0000;
                word-wrap: normal;
                margin: 0;
            `;
             return <Promotion key={index}><Image src={Ticket}></Image><P>{item}</P></Promotion>
        });
        const StyledUl = styled.ul`
            padding: 0;
            margin-top: 18px;
            margin-bottom: 18px;
        `;

        return (
                <DivWrapper>
                    <Offers_div>
                        <Offers_h2>{this.props.offers.formattedPriceValue}</Offers_h2>
                        <Offers_p>{this.props.offers.priceQualifier.toLowerCase()}</Offers_p>
                    </Offers_div>
                    <StyledLine_Div></StyledLine_Div>
                    <Promotions_div>
                        <StyledUl>
                            {Promotions}
                        </StyledUl>
                    </Promotions_div>
                    <StyledLine_Div></StyledLine_Div>
                </DivWrapper>
            )
    }
}