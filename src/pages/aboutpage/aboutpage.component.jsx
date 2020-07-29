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
							<p className='quoteline'>
								Eleifend donec pretium vulputate sapien nec sagittis aliquam
							</p>
							<p>
								Front-End Web Developer with 4 years of design experience.
								Self-starter, highly motivated, and passionate about creating
								customized responsive website design. I enjoy collaboration,
								being curious and interested in learning, bringing strong
								communication and teamwork skills, and helping others grow by
								sharing my expertise and encouraging best practices.
							</p>
							<a
								href={images}
								target='_blank'
								rel='noopener noreferrer'
								download>
								<button className='button-center text-center button-hover hvr-sweep-to-left'>
									<i className='fas fa-download'></i>
									Dowload Resume
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutPage
