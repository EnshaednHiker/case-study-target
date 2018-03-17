import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';

export default class ProductHighlights extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            } 
        }
    

    render() {

       const DivWrapper = styled.div `
            background-color: orange;
            grid-area: ${this.props.gridAreaName}; 
       `;
        return (
                <DivWrapper>
                    
                </DivWrapper>
            )
    }
}