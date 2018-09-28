import React from 'react';
//import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Header() {
	
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
				
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					      </button>
					      <a className="navbar-brand" href="http://google.com/">XYZ News</a>
					</div>


				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<Switch>
								<ul className="nav navbar-nav">
									<li className="active">
										<Link	to="/news" >News<span className="sr-only">(current)</span></Link>
									</li>
									{/* <li>
										<Link	to="/news" >Matrics </Link>
									</li> */}
								</ul>
							</Switch>
				   	</div>     
				</div>
			</nav>		
		);
	
} 

export default Header;