import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';

export default class Reviews extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            } 
        }
    

    render() {

       const DivWrapper = styled.div `
            background-color: yellow;
            grid-area: ${this.props.gridAreaName}; 
       `;
       const H2_price = styled.h2`
       
       `;
        return (
                <DivWrapper>

                </DivWrapper>
            )
    }
}