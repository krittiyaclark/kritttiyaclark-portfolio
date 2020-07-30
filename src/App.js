import React, { Component } from 'react'

import HomePage from './pages/homepage/homepage.component'
import AboutPage from './pages/aboutpage/aboutpage.component'
import SkillsPage from './pages/skillspage/skillspage.component'
import PortfolioPage from './pages/portfoliopage/portfoliopage.component'
import ResumePage from './pages/resumepage/resumepage.component'
import FooterPage from './pages/footerpage/footerpage.component'

import Header from './components/header/header.component'

import './App.scss'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			is_visible: false,
		}
	}

	componentDidMount() {
		var scrollComponent = this
		document.addEventListener('scroll', function (e) {
			scrollComponent.toggleVisibility()
		})
	}

	toggleVisibility() {
		if (window.pageYOffset > 300) {
			this.setState({
				is_visible: true,
			})
		} else {
			this.setState({
				is_visible: false,
			})
		}
	}

	scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	render() {
		const { is_visible } = this.state
		return (
			<main id='main'>
				<Header />
				<HomePage />
				<AboutPage />
				<SkillsPage />
				<PortfolioPage />
				<ResumePage />
				<FooterPage />
				<div className='scroll-to-top'>
					{is_visible && (
						<div onClick={() => this.scrollToTop()}>
							<i className='fas fa-arrow-up'></i>
						</div>
					)}
				</div>
			</main>
		)
	}
}

export default App
