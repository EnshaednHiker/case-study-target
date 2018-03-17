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
            font-size: 1.25rem;
            line-height: 30px;
            text-align: center;
            font-weight: 100; 
       `;
       const TitleWrapper = styled.div`
            max-width: 400px;
            width: 100%;
            margin-bottom: 44px;
       `;
       const PrimaryImg = styled.img`
            max-width: 100%;
            height: auto;
       `;
       const DivWrapper = styled.div `
            grid-area: ${this.props.gridAreaName};
            margin-left: auto;
            margin-right: auto;
       `;
        return (
                <DivWrapper>
                    <TitleWrapper>
                        <Title>{this.props.title}</Title>
                    </TitleWrapper>
                    <PrimaryImg src={this.props.primaryImage}>
                    </PrimaryImg>
                </DivWrapper>
            )
    }
}
