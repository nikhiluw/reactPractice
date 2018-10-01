import React from 'react';

class MainMatrixInp extends React.Component{
    constructor(props){
        super(props);
        this.populateMainMatrics = this.populateMainMatrics.bind(this);
    }

    populateMainMatrics = () => {
        var x = parseInt(document.getElementById("largeX").value, 10);
        var y = parseInt(document.getElementById("largeY").value, 10);
        var matTbl = document.getElementById("mainMatrixTable");
        var str  = "";

        for (var i = 0; i < y; i++) {
            str += "<tbody><tr>";
            var tempStr = "";
            for (var j = 0; j < x; j++) {
                tempStr += "<td><input type='number' class='m"+i+"-"+j+" form-control' /></td>";
            }
            str += tempStr+"</tr>";
        }
        matTbl.innerHTML = str+"</tbody>";
	}

    render(){
        return (
            <div className="col-lg-4">
                <h3>Please enter main matrix dimensions</h3>
                <div className="row">
                    <div className="col-lg-5">
                        <input type="number" id="largeX" className="form-control"/>
                    </div>
                    <div className="col-lg-1">
                        X
                    </div>
                    <div className="col-lg-5">
                        <input type="number" id="largeY" className="form-control"/>
                    </div>
                    <div className="col-lg-1">
                        <button type="button" id="goBtn" className="btn btn-primary" onClick={this.populateMainMatrics}>Go</button>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default MainMatrixInp;
