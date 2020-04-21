import React, { Fragment } from "react";

const Footer = () => {
	let anio = new Date();
	return (
		<Fragment>
			<footer className="page-footer grey darken-4">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">
								<span>
									Manuel Flores Front-End Developer & DevOps Jr
								</span>
							</h5>
							<p className="grey-text text-lighten-4">
								I've knowledge in the DevOps culture, with experience in
								CI / CD with Azure and Jenkins tools. Knowledge of how
								to evaluate the quality of the source code with the
								Sonarqube. Experience in Performance, Accessibility,
								Best Practices, Seo in personal projects that i've done
								as Front-end.
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Contacto</h5>
							<ul>
								<li>
									<a
										className="grey-text text-lighten-3"
										href="https://www.facebook.com/gerardo.f.quinones"
										target="_blank"
										rel="noopener noreferrer"
									>
										Facebook
									</a>
								</li>
								<li>
									<a
										className="grey-text text-lighten-3"
										href="https://www.instagram.com/l_e_g_a_s_p_i/?hl=es-la"
										target="_blank"
										rel="noopener noreferrer"
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										className="grey-text text-lighten-3"
										href="https://github.com/Geracros13"
										target="_blank"
										rel="noopener noreferrer"
									>
										Github
									</a>
								</li>
								<li>
									<a
										className="grey-text text-lighten-3"
										href="https://gt.linkedin.com/in/man-flores"
										target="_blank"
										rel="noopener noreferrer"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						Manuel Flores ©{anio.getFullYear()} Copyright
						<a
							className="grey-text text-lighten-4 right"
							href="mailto:mgfq13@hotmail.com"
						>
							E-mail
						</a>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
