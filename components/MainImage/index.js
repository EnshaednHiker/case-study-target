import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';

export default class MainImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            } 
        }
    

    render() {
       const Title = styled.h1 `
            font-size: 26px;
            line-height: 30px;
       `;
       const DivWrapper = styled.div `
            background-color:blue;
            grid-area: ${this.props.gridAreaName}; 
       `;
        return (
                <DivWrapper>
                    <Title>{this.props.title}</Title>
                </DivWrapper>
            )
    }
}
