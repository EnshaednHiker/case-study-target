import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';
import PlusSign from '~/assets/images/plus-sign.png';
import MinusSign from '~/assets/images/minus-sign.png';

export default class Controls extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: 1    
        }
        this.handleMinusClick = this.handleMinusClick.bind(this);
        this.handlePlusClick = this.handlePlusClick.bind(this);  
    }
    handleMinusClick(event){
        event.preventDefault();
        if(this.state.quantity===1){

        }
        else {
            let decrement = this.state.quantity;
                decrement--;
            this.setState({quantity: decrement})
        }
    }
    handlePlusClick(event){
        event.preventDefault();
        if(this.state.quantity===99){

        }
        else {
            let increment = this.state.quantity;
            increment++;
            this.setState({quantity: increment})
        }
    }

    render() {

        const DivWrapper = styled.div `
            grid-area: ${this.props.gridAreaName};
            display: flex;
            flex-direction: column;
        `;
        let daysToReturn = ''; 
        this.props.returnPolicy.forEach((policies)=>{
            policies.ReturnPolicyDetails.forEach((policy)=>{
                if(policy.user === "Regular Guest"){
                    daysToReturn = policy.policyDays
                }
            })
        });

        const QuantityWrapper = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-bottom: 31px;
        `;
        const FindInStoreWrapper = QuantityWrapper.extend`
            margin-bottom:0;
        `;
        const QuantityDiv = styled.div`
            max-width: 239px;
            height: 40px;
            width: 100%;
            border: 1px #d3d2d2 solid;
            border-radius: 2px;
            margin-right: 6px;
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
        `;
        const QuantityButtonGroupWrapper = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        `;
        const InvisibleDiv = QuantityDiv.extend`
            border: 1px transparent solid;
            margin-left: 6px;
            margin-right: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
        `;
        const Button = styled.button`
            border-radius: 2px;
            border: 1px transparent solid;
            background-color: transparent;
            border-radius: 2px;
            padding: 0;
        `;
        const LargeButton = Button.extend`
            max-width: 239px;
            width: 100%;
            height: 40px;
            color: white;
            font-weight: 100 !important;
            font-size: 18px;
            line-height: 14px;
            @media only screen and (max-width:860px){
                font-size: 16px;
            }
            &:hover{
                background-color: gray;
                color: lightgray;
            }
            &:active{
                box-shadow: 2px 2px 4px black;
            }
        `;
        const SmallButton = Button.extend`
            background-color: #f3f3f3;
            height: 25px;
            width: 100%;
            font-size: 12px;
            font-family: Arial, sans-serif;
            color: #333333;
            @media only screen and (max-width:840px){
                font-size: 10px;
            }
            &:hover{
                background-color: gray;
                color: lightgray;
            }
            &:active{
                background-color: black;
                text-shadow: 1px 1px 2px black; 
            }
        `;
        const PickUpInStoreButton = LargeButton.extend`
            background: linear-gradient(to bottom,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 1));
            margin-right: 6px;
        `;
        const AddToCartButton = LargeButton.extend`
            background: linear-gradient(to bottom,rgba(204, 0, 0, 0.6),rgba(204, 0, 0, 1));
            margin-left: 6px;
        `;
        const AddToRegistryButton = SmallButton.extend`
            max-width: 155px;
            margin-right: 3px;
        `;
        const AddToListButton = SmallButton.extend`
            max-width: 175px;
            margin-left: 3px;
            margin-right: 3px;
        `;
        const ShareButton = SmallButton.extend`
            max-width: 149px;
            margin-left: 3px;
        `;
        const CartWrapper = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        `;
        const SmallButtonWrapper = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            
        `;
        const FindInStoreLink = styled.a`
            text-align: center;
            margin-top: 5px;
            font-size: 10px;
            font-family: Helvetica;
            font-style: bold;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
            &:active{
                text-shadow: 1px 1px 2px black;
            }
        `;
        const Quantity_Label = styled.label`
            font-size: 14px;
            color: #333333;
            margin-left: 11px;
            margin-right: 11px;
        `;
        const QuantityButton = styled.button`
            background: none;
            border: none;
            height: 30px;
            width: 30px;
            padding: 0;
            border-radius: 50%;
            background-color: #cccccc;
            &:hover{
                background-color: darkgray;
            }
            &:active{
                background-color: black;
            }
        `;
        const QuantityPlusButton = QuantityButton.extend`
            margin-right: 11px;
        `;
        const QuantityMinusImg = styled.img`
            padding-bottom: 5px;
        `;
        const QuantityPlusImg = styled.img`
            padding-top: 2px;
            padding-right: 1px;
        `;
        const QuantityNumberWrapper = styled.div`
            height: 30px;
            width: 30px;
            font-size: 18px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `;
        const Quantity_P = styled.p`
            margin: 0;

        `;
        const ReturnsWrapper = styled.div`
            width: 100%;
            height: 25px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        `;
        const Returns_P = styled.p`
            font-size: 18px;
            color: #666666;
            padding-right: 15px;
        `; 
        const ReturnsLineDiv = styled.div`
            width: 2px;
            height: 100%;
            background-color: #cccccc;
        `;
        const ReturnsDescription_P = styled.p`
            font-size: 10px;
            color: #666666;
            padding-left: 14px;
        `; 
        console.log("day: ",daysToReturn);
        return (
                <DivWrapper>
                    <QuantityWrapper>
                        <QuantityDiv>
                            <Quantity_Label>quantity:</Quantity_Label>
                            <QuantityButtonGroupWrapper>
                                <QuantityButton type="button" onClick={this.handleMinusClick} ><QuantityMinusImg src={MinusSign}></QuantityMinusImg></QuantityButton>
                                    <QuantityNumberWrapper>
                                        <Quantity_P>{this.state.quantity}</Quantity_P>
                                    </QuantityNumberWrapper>
                                <QuantityPlusButton type="button" onClick={this.handlePlusClick}><QuantityPlusImg src={PlusSign}></QuantityPlusImg></QuantityPlusButton>
                            </QuantityButtonGroupWrapper>
                        </QuantityDiv>
                        <InvisibleDiv>
                        </InvisibleDiv>
                    </QuantityWrapper>
                    <CartWrapper>
                        <PickUpInStoreButton type="submit">PICK UP IN STORE</PickUpInStoreButton>
                        <AddToCartButton type="submit">ADD TO CART</AddToCartButton> 
                    </CartWrapper>
                    <FindInStoreWrapper>
                        <InvisibleDiv>
                            <FindInStoreLink><strong>find in a store</strong></FindInStoreLink>
                        </InvisibleDiv>
                        <InvisibleDiv>
                        </InvisibleDiv>
                    </FindInStoreWrapper>
                    <ReturnsWrapper>
                        <Returns_P>returns</Returns_P>
                        <ReturnsLineDiv></ReturnsLineDiv>
                        <ReturnsDescription_P>This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</ReturnsDescription_P>
                    </ReturnsWrapper>
                    <SmallButtonWrapper>
                        <AddToRegistryButton>ADD TO REGISTRY</AddToRegistryButton>
                        <AddToListButton>ADD TO LIST</AddToListButton>
                        <ShareButton>SHARE</ShareButton>
                    </SmallButtonWrapper>
  
                </DivWrapper>
            )
    }
}