import React from 'react'

import linkedinIcon from '../../assets/icons/icons8-linkedin-208.png'
import twitterIcon from '../../assets/icons/icons8-twitter-250.png'
import githubIcon from '../../assets/icons/icons8-github-208.png'

import '../../assets/scss/logo.scss'
import './header.styles.scss'

class Header extends React.Component {
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
			status: 'top',
			listener: null,
		}
	}

	componentDidMount() {
		this.listener = document.addEventListener('scroll', (event) => {
			var scrolled = document.scrollingElement.scrollTop
			if (scrolled >= 120) {
				if (this.state.status !== 'something') {
					this.setState({ status: 'something' })
				}
			} else {
				if (this.state.status !== 'top') {
					this.setState({ status: 'top' })
				}
			}
		})
	}

	componentDidUpdate() {
		document.removeEventListener('scroll', this.state.listener)
	}

	render() {
		const { socialLinks } = this.state

		return (
			<nav
				className='navbar fixed-top navbar-expand-lg navbar-light'
				style={{
					backgroundColor:
						this.state.status === 'top' ? 'transparent' : '#f4c430',
					position: 'fixed',
				}}>
				<a className='navbar-brand' href='/'>
					<div id='hexagon'>
						<div id='circle'>
							<h2>KC</h2>
						</div>
					</div>
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
						<li className='nav-item'>
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
							{socialLinks.map((link) => (
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
		)
	}
}

export default Header
