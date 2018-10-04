import React from 'react';
import MainMatricsInp from './main-matrics-inp';
import SubMatricsInp from './sub-matrics-inp';
import MainMatricsOut from './main-matrics-out';
import SubMatricsOut from './sub-matrics-out';

class Matrics extends React.Component{
    constructor(props){
        super(props);
        this.handleUpdateMainMatrics = this.handleUpdateMainMatrics.bind(this);
        this.handleUpdateSubMatrics = this.handleUpdateSubMatrics.bind(this);
        this.mainChild = React.createRef();
        this.subChild = React.createRef();
    }

    handleUpdateMainMatrics(x, y){
        this.mainChild.current.populateMainMatrics(x,y);
    }
    
    handleUpdateSubMatrics(x, y){
        this.subChild.current.populateSubMatrics(x,y,this.mainChild.current.parseTable());
    }
    
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1>Welcome to Matrics !!!</h1>
                </div>    
                <div className="row mb20">
                    <div className="col-lg-1"></div>
                    <MainMatricsInp onMatricsChange={this.handleUpdateMainMatrics}/>
                    <div className="col-lg-2"></div>
                    <SubMatricsInp onSubMatricsChange={this.handleUpdateSubMatrics}/>
                    <div className="col-lg-1"></div>
                </div>    
                <div className="row">
                    <div className="col-lg-6">
                        <MainMatricsOut  ref={this.mainChild}/>
                    </div>
                    <div className="col-lg-6">
                        <SubMatricsOut ref={this.subChild}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Matrics;