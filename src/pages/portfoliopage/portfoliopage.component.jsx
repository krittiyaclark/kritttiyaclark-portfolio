import React from 'react'

import { PortfolioPreview } from '../../components/portfoliopreview/portfoliopreview.component'

import project01 from '../../assets/images/beach-resort-react-app.jpg'
import project02 from '../../assets/images/clothing_store.jpg'
import project03 from '../../assets/images/gitHub-Search-User-React.png'

import './portfoliopage.styles.scss'

class PortfolioPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			portfolios: [
				{
					id: 1,
					image: project01,
					title: 'Beach Resort',
					stack: ['HTML5', 'CSS3', 'React', 'ContextApi', 'Hooks'],
					deployment: 'Netlify',
					projectDescription:
						'A responsive website built with React is a website that features a beach room resort, each with room details and sorting features. These are sorted by room-type, price, feature, and capacity.',
					view: 'Project',
					liveProjectUrl: 'https://beach-resort-react-app-live.netlify.app',
					gitHub: 'GitHub',
					projectGitHubUrl:
						'https://github.com/krittiyaclark/beach-resort-react',
				},
				{
					id: 2,
					image: project02,
					title: 'Clothing Store',
					stack: ['HTML5', 'CSS3 | SCSS', 'Bootstrap', 'React', 'firebase'],
					deployment: 'Heroku',
					projectDescription:
						"An e-commerce clothing store is responsive using Bootstrap 4. It has a lot of features including Google authentication for sign-in and sign-up, Firebase for storing the user's address in a cart item, and integrating payment methods with Stripe",
					view: 'Project',
					liveProjectUrl: 'https://clothing-store--live.herokuapp.com',
					gitHub: 'GitHub',
					projectGitHubUrl: 'https://github.com/krittiyaclark/clothing-store',
				},
				{
					id: 3,
					title: 'GitHub Search User',
					image: project03,
					stack: ['HTML5', 'CSS3', 'React', 'ContextApi', 'Hooks'],
					deployment: 'Netlify',
					projectDescription:
						"The GitHub search user app is responsive by using a CSS grid with styled-components.js. I use Auth0 for authentication to redirect users to the login page if they have not logged in yet. The user can search the GitHub user list and the results will display, along with the user repos, followers, Gists and other information about the user, using Fusioncharts to display the user's most recent programming language.",
					view: 'Project',
					liveProjectUrl: 'https://react-search-github-user-live.netlify.app',
					gitHub: 'GitHub',
					projectGitHubUrl:
						'https://github.com/krittiyaclark/gitHub-Search-User-React/tree/master/src',
				},
			],
		}
	}

	render() {
		const { portfolios } = this.state
		return (
			<section id='portfolio' className='section-padding'>
				<div className='container'>
					<div className='section-title text-center'>
						<h2>PORTFOLIO.</h2>
					</div>
					<PortfolioPreview portfolioPreview={portfolios} />
				</div>
			</section>
		)
	}
}

export default PortfolioPage
