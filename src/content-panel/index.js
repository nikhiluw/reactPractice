import React from 'react';
import SearchPanel from '../search-panel';
import NewsContainer from '../news-container';

class ContentPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText : '',
            totResult:0
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleTotResultChange = this.handleTotResultChange.bind(this);
    }

    handleSearchTextChange = (searchText) => {
        this.setState({
            searchText:searchText
        });
    };

    handleTotResultChange = (totResult) => {
        this.setState({
            totResult:totResult
        });
    };

    render(){
        return(
            <div className="container-fluid">
            <div className="row mb20">
                <div className="col-lg-8 col-lg-offset-2">
                    <SearchPanel onSearchTextChange={this.handleSearchTextChange}/>
                    <p>
                        <span className="badge badge-info">{this.state.totResult}</span> Result{this.state.totResult === 1 ? "" : "s"} found
                    </p>    
                    
                </div>
            </div>  
            <div className="row">
                <NewsContainer onTotResultChange={this.handleTotResultChange} searchText={this.state.searchText}/>
            </div>
            </div> 
        )     
    } 
}


export default ContentPanel;