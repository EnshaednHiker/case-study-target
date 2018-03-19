import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import RedStarLgSVG from '~/assets/images/Red_Star_large.svg';
import RedStarSmSVG from '~/assets/images/Red_Star_small.svg';
import GrayStarLgSVG from '~/assets/images/Gray_Star_large.svg';
import GrayStarSmSVG from '~/assets/images/Gray_Star_small.svg';

export default class Reviews extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            } 
        }
    

    render() {
        let reviewInfo = {};
        this.props.customerReview.forEach((info)=>{
            reviewInfo['totalReviews'] = parseInt(info.totalReviews);
            reviewInfo['overallRating'] = parseInt(info.consolidatedOverallRating);
            info.Pro.forEach((pro)=>{
                reviewInfo['Pro'] = pro;
                
            })
            info.Con.forEach((con)=>{
                reviewInfo['Con'] = con;
                
            })
        });
        console.log(reviewInfo);

        const DivWrapper = styled.div `
            grid-area: ${this.props.gridAreaName};
            width: 100%;
            height: auto;
        `;
        const DivTop = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        `;
        const DivOverall = styled.div`
            margin-left: 18px;
        `;
        const DivStarsOverall = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        `;
        const Overall_P = styled.p`
            margin-left: 18px;
            font-size: 14px;
        `;
        const DivTotalReviews = styled.div`
            
        `;
        const TotalReviews_P = styled.p`
            margin-right: 17px;
            font-size: 14px;
        `;
        const DivPro = styled.div`
            grid-area: "Pro";
            padding-left: 20px;
        `;
        const DivCon = styled.div`
            grid-area: "Con";
            padding-right: 14px;

        `;
        const DivProReview = styled.div`
            grid-area: "ProReview";
            padding-top: 20px;
            padding-left: 20px;
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        `;
        const DivConReview = styled.div`
            grid-area: "ConReview";
            padding-top: 20px;
            padding-right: 14px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        `;
        const ReviewWrapper = styled.div`
            height: auto;
            border-radius: 2px;
            background-color: #f6f5f5;
            display: grid; 
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 64px 1fr;
            grid-template-areas: "Pro Con"
                                "ProReview ConReview"; 
        `;
        let goodAlt = "graphic of a red star, a pro count of 1";
        let badAlt = "graphic of a gray star, a con count of 1";
        let RedStarLg = <img src={RedStarLgSVG} alt={goodAlt}></img>;
        let GrayStarLg = <img src={GrayStarLgSVG} alt={badAlt}></img>;
        let RedStarSm = <img src={RedStarSmSVG} alt={goodAlt}></img>;
        let GrayStarSm = <img src={GrayStarSmSVG} alt={badAlt}></img>;  
        const ViewAllReviewsLink = styled.a`
            font-family: Arial,sans-serif;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
            &:active{
                text-shadow: 1px 1px 2px black;
            }
        `;
        const ProConTitle = styled.h2`
            font-family: Arial, sans-serif;
            font-size: 18px;
            margin-top: 15;
            margin-bottom: 0;
        `;
        const ProCon_P = styled.p`
            font-family: Arial, sans-serif;
            font-size: 12px;
            color: #333333;
            margin-top: 0;
            margin-bottom: 0;
        `;
        const DivLine = styled.div`
            height: 1px;
            width: 100%;
            background-color: #cccccc;
            padding-left: 2px;
            padding-right: 2px;
            margin-top: 20px;
        `;
        const Review_H3 = styled.h3`
            font-size: 16px;
            margin-bottom: 0;
            margin-top: 5px;
        `;
        const Review_P = styled.p`
            margin-top: 5px;
            font-size: 12px;
        `;
        const SignatureWrapper = styled.div`
        
        `;
        const Signature_P = styled.p`
            font-size: 12px;
        `;
        const ScreenName_Span = styled.span`
            color: #0066cc
        `;
        const DivStarsReview = styled.div`
        
        `;

        let datePostedPro = reviewInfo.Pro.datePosted;
        let formattedProDateString = dateFormat(datePostedPro, "mmmm d, yyyy");
        let datePostedCon = reviewInfo.Con.datePosted;
        let formattedConDateString = dateFormat(datePostedCon, "mmmm d, yyyy");
        
        let littleStars = (ratingNum) => {
            if(ratingNum===5){
                    return <DivStarsReview>{RedStarSm}{RedStarSm}{RedStarSm}{RedStarSm}{RedStarSm}</DivStarsReview>
                } else if (ratingNum===4){
                    return <DivStarsReview>{RedStarSm}{RedStarSm}{RedStarSm}{RedStarSm}{GrayStarSm}</DivStarsReview>
                } else if (ratingNum===3){
                    return <DivStarsReview>{RedStarSm}{RedStarSm}{RedStarSm}{GrayStarSm}{GrayStarSm}</DivStarsReview>
                } else if (ratingNum===2){
                    return <DivStarsReview>{RedStarSm}{RedStarSm}{GrayStarSm}{GrayStarSm}{GrayStarSm}</DivStarsReview>
                } else {
                    return <DivStarsReview>{RedStarSm}{GrayStarSm}{GrayStarSm}{GrayStarSm}{GrayStarSm}</DivStarsReview>  
                }
            }
        
        return (
                <DivWrapper>
                    <DivTop>
                        <DivOverall>
                            { ( ()=>{
                                if(reviewInfo.overallRating===5){
                                        return <DivStarsOverall>{RedStarLg}{RedStarLg}{RedStarLg}{RedStarLg}{RedStarLg}<Overall_P>overall</Overall_P></DivStarsOverall>
                                    } else if (reviewInfo.overallRating===4){
                                        return <DivStarsOverall>{RedStarLg}{RedStarLg}{RedStarLg}{RedStarLg}{GrayStarLg}<Overall_P>overall</Overall_P></DivStarsOverall>
                                    } else if (reviewInfo.overallRating===3){
                                        return <DivStarsOverall>{RedStarLg}{RedStarLg}{RedStarLg}{GrayStarLg}{GrayStarLg}<Overall_P>overall</Overall_P></DivStarsOverall>
                                    } else if (reviewInfo.overallRating===2){
                                        return <DivStarsOverall>{RedStarLg}{RedStarLg}{GrayStarLg}{GrayStarLg}{GrayStarLg}<Overall_P>overall</Overall_P></DivStarsOverall>
                                    } else {
                                        return <DivStarsOverall>{RedStarLg}{GrayStarLg}{GrayStarLg}{GrayStarLg}{GrayStarLg}<Overall_P>overall</Overall_P></DivStarsOverall>  
                                    }
                                }
                                )()       
                            }
                        </DivOverall>  
                        <DivTotalReviews><TotalReviews_P><ViewAllReviewsLink>view all {reviewInfo.totalReviews} reviews</ViewAllReviewsLink></TotalReviews_P></DivTotalReviews>
                    </DivTop>
                    <ReviewWrapper>
                        <DivPro>
                            <ProConTitle>PRO</ProConTitle>
                            <ProCon_P>most helpful 4-5 star review</ProCon_P>
                            <DivLine></DivLine>
                        </DivPro>
                        <DivCon>
                            <ProConTitle>CON</ProConTitle>
                            <ProCon_P>most helpful 1-2 star review</ProCon_P>
                            <DivLine></DivLine>
                        </DivCon>
                        <DivProReview>
                            {littleStars(parseInt(reviewInfo.Pro.overallRating))}
                            <Review_H3>{reviewInfo.Pro.title}</Review_H3>
                            <Review_P>{reviewInfo.Pro.review}</Review_P>
                            <SignatureWrapper><Signature_P><ScreenName_Span>{reviewInfo.Pro.screenName} </ScreenName_Span>{formattedProDateString}</Signature_P></SignatureWrapper>
                        </DivProReview>
                        <DivConReview>
                            {littleStars(parseInt(reviewInfo.Con.overallRating))}
                            <Review_H3>{reviewInfo.Con.title}</Review_H3>
                            <Review_P>{reviewInfo.Con.review}</Review_P>
                            <SignatureWrapper><Signature_P><ScreenName_Span>{reviewInfo.Con.screenName} </ScreenName_Span>{formattedConDateString}</Signature_P></SignatureWrapper>
                        </DivConReview>
                    </ReviewWrapper>
                </DivWrapper>
            )
    }
}