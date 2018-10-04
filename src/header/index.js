import React from 'react';
//import ReactDom from 'react-dom';
import {Link, withRouter } from 'react-router-dom';


class Header extends React.Component{
		constructor(props){
			super(props);
		}	

		render(){
			let path = this.props.location.pathname;
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
							<Link className="navbar-brand" to="/">React Portal</Link>	
							{/* <a className="navbar-brand" href="http://google.com/">XYZ News</a> */}
						</div>


						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								
								<ul className="nav navbar-nav">
									{console.log(this.props)}
									<li className={path === "/news" ? "active" : ""}> <Link to="/news" >News<span className="sr-only">(current)</span></Link> </li>
									<li className={path === "/matrics" ? "active" : ""}> <Link to="/matrics" >Matrics </Link> </li>
								</ul>
								
						</div>     
					</div>
				</nav>		
			);
		}	
} 
Header = withRouter(Header);
export default Header;