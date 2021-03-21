import React from "react";
import "./Header.css";
import "../../assets/libs/font-awesome/css/font-awesome.min.css";

export function Header(props) {
	return (
		<div id="lead">
			<div id="lead-content">
				<h1>{props.name}</h1>
				<h2>{props.designation}</h2>
				<a href={props.cvHref} className="btn-rounded-white" download>
					Download Resume
				</a>
			</div>
			<div id="lead-overlay"></div>
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
			<div id="lead-down">
				<span>
					<i className="fa fa-chevron-down" aria-hidden="true"></i>
				</span>
			</div>
		</div>
	);
}
