import React from 'react';

class SearchPanel extends React.Component{
    render(){
        return(
            <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" />
            </div>

        );
    };
}

export default SearchPanel;