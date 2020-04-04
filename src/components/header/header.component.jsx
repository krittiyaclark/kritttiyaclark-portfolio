import React from 'react';

import linkedinIcon from '../../assets/icons/icons8-linkedin-208.png';
import twitterIcon from '../../assets/icons/icons8-twitter-250.png';
import githubIcon from '../../assets/icons/icons8-github-208.png';
import mailIcon from '../../assets/icons/icons8-envelope-52.png';

import './header.styles.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			socialLinks: [
				{
					id: 1,
					name: 'Mail',
					icon: mailIcon,
					url: 'https://twitter.com/themeyourweb',
					alt: 'Mail'
				},
				{
					id: 2,
					name: 'LinkedIn',
					icon: linkedinIcon,
					url: 'https://www.linkedin.com/in/krittiya-clark-front-end/',
					alt: 'LinkedIn'
				},
				{
					id: 3,
					name: 'GitHub',
					icon: githubIcon,
					url: 'https://github.com/krittiyaclark',
					alt: 'GitHub'
				},
				{
					id: 4,
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
			<nav className='navbar  fixed-top navbar-expand-lg navbar-light'>
				<a className='navbar-brand' href='/'>
					KC
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<a className='nav-link' href='/'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#about'>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#skills'>
								Skills
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#portfolio'>
								Portfolio
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#resume'>
								Resume
							</a>
						</li>
					</ul>

					<div className='social_links ml-auto'>
						<ul className='list-unstyled'>
							{socialLinks.map(link => (
								<li key={link.id}>
									<a href={link.url} rel='noopener noreferrer' target='_blank'>
										<img src={link.icon} alt={link.alt} />
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
