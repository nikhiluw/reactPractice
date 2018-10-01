import React from 'react';

class SubMatricsInp extends React.Component{
    constructor(props){
        super(props);
        this.populateSubMatrics = this.populateSubMatrics.bind(this);    
    }

    populateSubMatrics = () => {
        var x = parseInt(document.getElementById("subX").value, 10);
        var y = parseInt(document.getElementById("subY").value, 10);
        var matTbl = document.getElementById("subMatrixTable");
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
        return(
            <div className="col-lg-4">
                <h3>Please enter sub matrix dimensions</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <input type="number" id="subX" className="form-control"/>
                    </div>
                    <div className="col-lg-1">
                        X
                    </div>
                    <div className="col-lg-4">
                        <input type="number" id="subY" className="form-control"/>
                    </div>
                    <div className="col-lg-3">
                        <button type="button" id="generateBtn" className="btn btn-primary" onClick={this.populateSubMatrics}>Generate Sub Matrix</button>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default SubMatricsInp;
