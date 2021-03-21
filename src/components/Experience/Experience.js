import React from 'react';
import './Experience.css';
import enosis from "../../assets/img/enosis.png";

export function Experience(props){
    return(
        <div id="experience" className="bg__dark">
			<div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 text-center">
                    <h2 className="heading">Experience</h2>
                    </div>
                </div>
				<div className="row justify-content-around">
                    <div className="col-md-4 text-center exp-item">
                        <img src={enosis} alt="" width="80%" />
                        <h2>Software Engineer</h2>
                        <h5>September 2020 - Present</h5>
                    </div>
				</div>
			</div>
		</div>
    )
}