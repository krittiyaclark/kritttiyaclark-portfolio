import React from 'react';

import linkedinIcon from '../../assets/icons/icons8-linkedin-208.png';
import twitterIcon from '../../assets/icons/icons8-twitter-250.png';
import githubIcon from '../../assets/icons/icons8-github-208.png';

import './homepage.styles.scss';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			socialLinks: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: linkedinIcon,
					url: 'https://www.linkedin.com/in/krittiya-clark-front-end/',
					alt: 'LinkedIn'
				},
				{
					id: 2,
					name: 'GitHub',
					icon: githubIcon,
					url: 'https://github.com/krittiyaclark',
					alt: 'GitHub'
				},
				{
					id: 3,
					name: 'Twitter',
					icon: twitterIcon,
					url: 'https://twitter.com/themeyourweb',
					alt: 'Twitter'
				}
			]
		};
	}

	render() {
		const { socialLinks } = this.state;
		return (
			<section id='home'>
				<div className='homepage'>
					<div className='home-content'>
						<div className='contianer d-flex h-100'>
							<div className='row justify-content-center align-items-center w-100'>
								<div className='col-md-12 col-xs-12 mx-auto'>
									<div className='header'>
										<div className='heading'>
											<h2>Krittiya Clark</h2>
										</div>
										<div className='box-heading'>
											<p>Front-End Web Developer</p>
										</div>

										<div className='social_links'>
											<ul className='list-unstyled'>
												{socialLinks.map(link => (
													<li key={link.id}>
														<a
															href={link.url}
															rel='noopener noreferrer'
															target='_blank'>
															<img src={link.icon} alt={link.alt} />
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default HomePage;
