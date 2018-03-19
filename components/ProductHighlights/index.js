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
        let features = [];
        this.props.itemDescription.forEach((itemDescriptions)=>{
            itemDescriptions.features.forEach((feature)=>{
                let slicedFeature = feature.slice(8);
                features.push(slicedFeature);
            })
        });
        const Features_Ul = styled.ul`
        
        `;
        const Feature_Li = styled.li`
            color: #666666;
            font-size: 14px;
        `;
        let featuresList = features.map((feature, index)=>{
            let featureArray = feature.split('</strong>')
            return <Feature_Li key={index}><strong>{featureArray[0]}</strong>{featureArray[1]}</Feature_Li>
        })
        const DivWrapper = styled.div`
             grid-area: ${this.props.gridAreaName};
             display: flex;
             flex-direction: column;
        `;
        const StyledTitle = styled.h2`
            font-size: 36px;
            color: black;
            margin-top: 30px;
            margin-bottom: 0;
        `;


        return (
                <DivWrapper>
                    <StyledTitle>product hightlights</StyledTitle>
                    <Features_Ul>
                        {featuresList}
                    </Features_Ul>
                </DivWrapper>
            )
    }
}