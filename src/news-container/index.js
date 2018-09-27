import React from 'react';
//import ReactDOM from 'react-dom';
import NewsList from './news-list';

class NewsContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleTotChange = this.handleTotChange.bind(this);
    }

    handleTotChange = (tot) => {
        this.props.onTotResultChange(tot);
    };

    render(){
        return (
            <NewsList onTotResultChange={this.handleTotChange} searchText={this.props.searchText}/>
        );
    }
    
}

export default NewsContainer;