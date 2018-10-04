import React from 'react';

class SubMatricsOut extends React.Component{
    constructor(props){
        super(props);
        this.state = {x:0, y:0, matArr:[[]]};
        this.createTable = this.createTable.bind(this);
        this.populateSubMatrics = this.populateSubMatrics.bind(this);
    }

    populateSubMatrics(x,y,arr){
        this.setState({x:x, y: y, matArr:iterateTable(x,y,arr)});
        //iterateTable(arr);
    }

    createTable(){
        let table = [];
        
        for(let i = 0; i < this.state.x; i++){
            let childern = [];
            for(let j = 0; j < this.state.y ; j++){
                childern.push(<td key={i+'_'+j}>{this.state.matArr[i][j]}</td>)
            }
            table.push(<tr key={i}>{childern}</tr>);
        }
        return table;
    }

    render(){
        return(
            <div className="col-lg-12">
                <div id="resultMatrix">
                    <table className="matricsTable table table-striped table-bordered" cellSpacing="10">
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>
            </div>    
        );
    }
}

function iterateTable(x,y,arr) {
    console.log(arr);
    var o = {
        posX: -1,
        posY: -1,
        tempArr: [],
        total: 0
    };
    var maxTotObj = null;
    
    var arrLen = arr.length;
    var subArrLen = arr[0].length;
    var tempObj = null;

    //iterate main array to get samll arrays
    for (var i = 0; i <= (arrLen - y); i++) {
        //iterate sub-array
        for (var j = 0; j <= (subArrLen - x); j++) {
            if ((i == 0) || (i == (arrLen - y)) || (j == 0 || (j + x) == subArrLen)) {
                console.log(i + "--" + j);
                o.posX = j;
                o.posY = i;
                tempObj = updateObj(o, arr, x, y);
                maxTotObj = maxTotObj == null ? tempObj : (maxTotObj.total > tempObj.total ? maxTotObj : tempObj);
                o = {
                    posX: -1,
                    posY: -1,
                    tempArr: [],
                    total: 0
                };
            }
        }
    }

    console.log("Max Boundry Object is ");
    console.log(maxTotObj);
    console.log("Max Boundry Array is ");
    console.log(maxTotObj.tempArr);
    return maxTotObj.tempArr;
}

function updateObj(obj, mainArr, x, y) {

    //console.log(obj.posX+"--"+obj.posY+"-x-"+x+"-y-"+y);
    var tot = 0;
    var a = [];
    var tArr = [];
    for (var ai = obj.posY; ai < obj.posY + y; ai++) {
        for (var aj = obj.posX; aj < obj.posX + x; aj++) {
            var item = mainArr[ai][aj];
            tArr.push(item);
            tot += item;
        }
        //console.log(tArr);
        a.push(tArr);
        tArr = [];
    }
    obj.tempArr = a;
    obj.total = tot;
    tot = 0;
    console.log(obj);
    return obj;
}

export default SubMatricsOut;