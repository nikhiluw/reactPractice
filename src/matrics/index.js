import React from 'react';
import MainMatricsInp from './main-matrics-inp';
import SubMatricsInp from './sub-matrics-inp';
import MainMatricsOut from './main-matrics-out';
import SubMatricsOut from './sub-matrics-out';

class Matrics extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1>Welcome to Matrics !!!</h1>
                </div>    
                <div className="row">
                    <div className="col-lg-1"></div>
                    <MainMatricsInp />
                    <div className="col-lg-2"></div>
                    <SubMatricsInp />
                    <div className="col-lg-1"></div>
                </div>    
                <div className="row">
                    <div className="col-lg-6">
                        <MainMatricsOut />
                    </div>
                    <div className="col-lg-6">
                        <SubMatricsOut />
                    </div>
                    {/* main matrics output */}
                    {/* sub matrics output */}
                </div>
            </div>

        );
    }
}

export default Matrics;