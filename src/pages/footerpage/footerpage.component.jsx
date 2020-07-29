import React from 'react'

import linkedinIcon from '../../assets/icons/linkedin-brands.svg'
import twitterIcon from '../../assets/icons/twitter-brands.svg'
import githubIcon from '../../assets/icons/github-alt-brands.svg'

import './footerpage.styles.scss'

class FooterPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			socialLinks: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: linkedinIcon,
					url: 'https://www.linkedin.com/in/krittiya-clark-front-end/',
					alt: 'LinkedIn',
				},
				{
					id: 2,
					name: 'GitHub',
					icon: githubIcon,
					url: 'https://github.com/krittiyaclark',
					alt: 'GitHub',
				},
				{
					id: 3,
					name: 'Twitter',
					icon: twitterIcon,
					url: 'https://twitter.com/themeyourweb',
					alt: 'Twitter',
				},
			],
		}
	}

	render() {
		const { socialLinks } = this.state

		return (
			<footer id='footer'>
				<div className='container'>
					<div className='row' id='nav-footer-bottom'>
						<div className='col-md-12 col-sm-12 footer'>
							<h2 id='connect'>
								<a href='mailto:krittiyaclark@gmail.com'>Let's talk</a>
							</h2>
							<nav id='nav-footer'>
								<ul className='ml-auto'>
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
							</nav>
							<p className='copy-right'>
								&copy; {new Date().getFullYear()} Krittiya Clark
							</p>
						</div>

						{/* <div className='col-md-3 col-sm-6'>
							<div className='social_links ml-auto text-right'>
								<ul className='list-unstyled'>
									{socialLinks.map((link) => (
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
						</div> */}
					</div>
				</div>
			</footer>
		)
	}
}

export default FooterPage
