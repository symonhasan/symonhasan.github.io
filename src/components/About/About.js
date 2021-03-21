import React from "react";
import "./About.css";
import img from "../../assets/img/img.jpg";

export function About(props) {
	return (
		<div id="about" className="bg__light">
			<div className="container">
				<div className="row">
					<div className="col-md-4 img-div">
						<img src={img} alt="" width="100%"/>
					</div>
					<div className="col-md-8">
                        <div className="row text-center">
                            <div className="col-md-4 offset-md-4 text-center">
                                <h2 className="heading">About Me</h2>
                            </div>
                        </div>
						<p className="about-text">
							Hello! My name is Symon and I am a Software Engineer, 
							currently working at Enosis Solutions. I have
							completed my graduation in Computer Science &amp;
							Engineering from University of Asia Pacific at
							Bangladesh. I'm most passionate about learning new 
							technologies, and my goal is to pursue my passion
							within the field of software engineering!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
