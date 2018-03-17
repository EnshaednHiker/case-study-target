import React from 'react';
import Dom from 'react-dom';
import fauxStore from '~/case-study/item-data.json';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            title: fauxStore.CatalogEntryView[0].title 
        }
    }
    componentDidMount(){
        document.title = this.state.title;
    }
    render() {
        console.log(fauxStore);
        return (<h1>{this.state.title}</h1>)
    } 
}
 
export default function (next) {
    Dom.render(
        <Main />, document.getElementById('root')
    );
} 