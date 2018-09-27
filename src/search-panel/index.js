import React from 'react';

class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick = (e) => {
        this.props.onSearchTextChange(document.getElementById('searchInput').value);
    };

    render(){
        return(
            <div className="input-group mb20">
                <span className="input-group-addon" id="basic-addon1">
                    <span className="glyphicon glyphicon-search"></span> 
                </span>
                <input type="text" className="form-control" placeholder="Search for..." id="searchInput"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.handleSearchClick}>Go!</button>
                </span>
            </div>
        );
    };
}

export default SearchPanel;