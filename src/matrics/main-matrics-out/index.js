import React from 'react';

class MainMatricsOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0, matArr: [[]] };
        this.createTable = this.createTable.bind(this);
        this.populateMainMatrics = this.populateMainMatrics.bind(this);
        this.parseTable = this.parseTable.bind(this);
    }

    populateMainMatrics(x, y) {
        this.setState({ x: x, y: y });
    }

    parseTable(){
        let table = [];
        for(let a = 0; a < this.state.x; a++){
            let temp = [];
            for(let b = 0; b < this.state.y; b++){
                let num = document.getElementById("m"+a+"_"+b).value;
                num = num !== "" ? 
                        !isNaN(num) ? 
                            parseInt(num) :
                        0 :
                    0;
                temp.push(num);        
            }
            table.push(temp);
        }
        return table;
    }

    createTable() {
        let table = [];

        for (let i = 0; i < this.state.x; i++) {
            let childern = [];
            for (let j = 0; j < this.state.y; j++) {
                childern.push(<td key={i + '_' + j}><input type='number' id={'m' + i + '_' + j} /></td>)
            }
            table.push(<tr key={i}>{childern}</tr>);
        }
        return table;
    }

    render() {
        return (
            <div className="col-lg-12">
                <div id="resultMatrix">
                    <table id="mainMatrixTable" className="matricsTable" cellSpacing="10">
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



export default MainMatricsOut;


