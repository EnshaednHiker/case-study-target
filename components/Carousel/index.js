import React from 'react';
import Dom from 'react-dom';
import styled from 'styled-components';
import { CarouselProvider, Slider, Image, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import arrowLeft from '~/assets/images/arrow-left.png';
import arrowRight from '~/assets/images/arrow-right.png';


export default class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            bigImage: this.props.primaryImage,
            currentSlide: 0   
        }
        this.handleSlideImageClick = this.handleSlideImageClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this); 
    }

    handleSlideImageClick(event){
        this.setState({bigImage:event.target.src} )
    }
    handleBackClick(event){
        if(this.state.currentSlide!==0){
            let newCurrentSlide = this.state.currentSlide - 1;
            this.setState ({currentSlide: newCurrentSlide});    
        }

    }
    handleNextClick(event){
        if(this.state.currentSlide !== this.props.alternateImages.length - 1){
            let newCurrentSlide = this.state.currentSlide + 1;
            this.setState ({currentSlide: newCurrentSlide});      
        }
    }    

    render() {

        // const DivWrapper = styled.div `
        //     height: 100%;
        //     width: 100%;
        // `;
        // const StyledCarouselProvider = styled(CarouselProvider)`
        // display:flex;
        // height: 100%;
        // flex-direction:column;
        // align-content:space-between;
        
        // `;
        // const StyledButtonNext = styled(ButtonNext)`
        //     background:none;
        //     border:none;
        // `;
        // const StyledButtonBack = styled(ButtonBack)`
        //     background:none;
        //     border:none;
        // `;
        const buttonStyles = {
            background:"none",
            border:"none"
        }
        const StyledCarouselDiv = styled.div`
            margin-top: 225px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        `;
        const StyledBigImage = styled.img`
            max-width: 100%;
            height: auto;
        `;
        // const StyledSlider = styled(Slider)`
        //     width: 75%;
        // `;
        const sliderStyles = {
            width: "75%"
        }
        const StyledSlide = styled(Slide)`
        
        `;

        const primarySlide = this.props.primaryImage;
        const slides = this.props.alternateImages.map((item)=>{
             return item.image
        })
        slides.unshift(primarySlide);
        
        let AllSlides = slides.map((item,index)=>{
            // let StyledImage = styled.img`
            //     width: 99%;
            //     height: 99%;
            // `;
        
            return <Slide index={index} key={index+256}><Image alt='image of product' src={item} onClick={this.handleSlideImageClick} /></Slide>

        })


        return (
                <CarouselProvider
                    naturalSlideWidth={61}
                    naturalSlideHeight={61}
                    currentSlide={this.state.currentSlide}
                    totalSlides={1 + this.props.alternateImages.length}
                    visibleSlides={3}
                >
                    <StyledBigImage src={this.state.bigImage}>
                    </StyledBigImage>

                    <StyledCarouselDiv>
                        <ButtonBack style={buttonStyles} onClick={this.handleBackClick}><img src={arrowLeft}></img></ButtonBack>
                            <Slider style={sliderStyles}>
                                {AllSlides} 
                            </Slider>
                        <ButtonNext style={buttonStyles} onClick={this.handleNextClick}><img src={arrowRight}></img></ButtonNext>
                    </StyledCarouselDiv>  
                </CarouselProvider>
            )
    }
}

// const DivWrapper = styled.div `
// height: 100%;
// width: 100%;
// `;
// const StyledCarouselProvider = styled(CarouselProvider)`
// display:flex;
// height: 100%;
// flex-direction:column;
// align-content:space-between;

// `;
// const StyledButtonNext = styled(ButtonNext)`
// background:none;
// border:none;
// `;
// const StyledButtonBack = styled(ButtonBack)`
// background:none;
// border:none;
// `;
// const StyledCarouselDiv = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// align-items: center;
// `;
// const StyledBigImage = styled.img`
// max-width: 100%;
// height: auto;
// margin-bottom: 20px;
// `;
// const StyledSlider = styled(Slider)`
// width: 75%;
// `;
// const StyledSlide = styled(Slide)`

//     &:hover & {
//         border: 2px #999999 !important;
//     }
// `;

            // <DivWrapper >

            //     <CarouselProvider
            //         currentSlide={this.state.currentSlide}
            //         naturalSlideWidth={61}
            //         naturalSlideHeight={61}
            //         totalSlides={1 + this.props.alternateImages.length}
            //         visibleSlides={3}
            //         orientation={"horizontal"}
            //     >
            //         <StyledBigImage src={this.state.bigImage}>
            //         </StyledBigImage>
            //         <StyledCarouselDiv>
            //             <StyledButtonBack onClick={this.handleBackClick}><img src={arrowLeft}></img></StyledButtonBack>
            //                 <StyledSlider>
            //                     {AllSlides} 
            //                 </StyledSlider>
            //             <StyledButtonNext onClick={this.handleNextClick}><img src={arrowRight}></img></StyledButtonNext>
            //         </StyledCarouselDiv>   
            //     </CarouselProvider>
            // </DivWrapper>
 