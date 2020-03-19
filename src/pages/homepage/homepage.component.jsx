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
						<div className='text-center'>
							<div className='header'>
								<div className='heading'>Krittiya Clark</div>
								<div className='box-heading'>
									<div className='box-inner'>Front-End Web Developer</div>
								</div>

								<div className='social_links'>
									<ul className='list-unstyled'>
										{socialLinks.map(link => (
											<li key={link.id}>
												<a href={link.url} target='_blank'>
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
			</section>
		);
	}
}

export default HomePage;
