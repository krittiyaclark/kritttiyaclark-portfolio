import React from 'react'

import images from '../../assets/images/Krittiya_Clark.jpg'

import './aboutpage.styles.scss'

class AboutPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: true,
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState((state) => ({
			isOpen: !state.isOpen,
		}))
	}

	render() {
		return (
			<section id='about' className='section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<div className='section-title text-center'>
								<h2>ABOUT ME.</h2>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-4 col-xs-4'>
							<div className='about-img'>
								<img src={images} alt='Krittiya Clark' className='img-fluid' />
							</div>
						</div>
						<div className='col-md-8 col-xs-8'>
							<p>
								Hello! I'm Krittiya, a front-end web developer with an art and
								design background.
							</p>
							<p>
								I live with my husband and two beautiful children in Vermont,
								USA.
							</p>
							<p>
								I was curious as to how websites were built so I taught myself
								how to code and have not stopped since.
							</p>
							<p>
								Raising two kids taught me that time is important; this has led
								me to be highly motivated, passionate, and a self-starter in my
								daily life. I take every opportunity to learn and build
								projects.
							</p>
							<p>
								When I am not coding, I like to cook, travel, snowboard, run,
								and drink green tea.
							</p>
							<p>
								Here are a few technologies I've been working with recently:
							</p>
							<div className='row flex'>
								<div className='col-md-6 col-xs-4'>
									<p>
										<i className='fa fa-caret-right' aria-hidden='true'>
											JavaScript (ES6+)
										</i>
									</p>
									<p>
										<i className='fa fa-caret-right' aria-hidden='true'>
											React
										</i>
									</p>
									<p>
										<i className='fa fa-caret-right' aria-hidden='true'>
											Context
										</i>
									</p>
								</div>
								<div className='col-md-6 col-xs-4'>
									<p>
										<i className='fa fa-caret-right' aria-hidden='true'>
											HTML & (S)CSS | BootStrap
										</i>
									</p>
									<p>
										<i className='fa fa-caret-right' aria-hidden='true'>
											Styled Components
										</i>
									</p>
									<p>
										<i className='fa fa-caret-right' aria-hidden='true'>
											Firebase
										</i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutPage
