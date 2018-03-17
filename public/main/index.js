import React from 'react';
import Dom from 'react-dom';
import fauxStore from '~/case-study/item-data.json';
import MainImage from '~/components/MainImage'
import css from '~/assets/styles/main.css'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            title: fauxStore.CatalogEntryView[0].title,
            primaryImage: fauxStore.CatalogEntryView[0].Images.PrimaryImage.image,
            alternateImages: fauxStore.CatalogEntryView[0].Images.AlternateImages
        }
    }
    componentDidMount(){
        document.title = this.state.title;
    }
    render() {
        
        console.log(fauxStore);
        return (
            <MainImage title={this.state.title} primaryImage={this.state.primaryImage} alternateImages={this.state.alternateImages} />
        )
    } 
}
 
export default function (next) {
    Dom.render(
        <Main />, document.getElementById('root')
    );
} 