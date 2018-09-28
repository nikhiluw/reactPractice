import React from 'react';

class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleEnterPressed = this.handleEnterPressed.bind(this);
    }

    handleSearchClick = (e) => {
        this.props.onSearchTextChange(document.getElementById('searchInput').value);
    };

    handleEnterPressed = (e) => {
        if(e.keyCode === 13 || e.which === 13){
            this.handleSearchClick();
        }
    }

    render(){
        return(
            <div className="input-group mb20">
                <span className="input-group-addon" id="basic-addon1">
                    <span className="glyphicon glyphicon-search"></span> 
                </span>
                <input type="text" className="form-control" placeholder="Search for..." id="searchInput" onKeyPress={this.handleEnterPressed}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.handleSearchClick}>Go!</button>
                </span>
            </div>
        );
    };
}

export default SearchPanel;