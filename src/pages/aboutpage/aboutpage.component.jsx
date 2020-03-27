import React from 'react';

import './aboutpage.styles.scss';

class AboutPage extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			isOpen: true
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isOpen: !state.isOpen
		}));
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
								<img
									src='https://via.placeholder.com/350'
									alt='Krittiya Clark'
									className='img-fluid'
								/>
							</div>
						</div>
						<div className='col-md-8 col-xs-8'>
							<p className='quoteline'>
								Eleifend donec pretium vulputate sapien nec sagittis aliquam
							</p>
							<p>
								malesuada bibendum. Tristique nulla aliquet enim tortor at
								auctor urna nunc id. Pulvinar etiam non quam lacus suspendisse.
								Habitasse platea dictumst vestibulum rhoncus est pellentesque
								elit ullamcorper. Enim tortor at auctor urna nunc id cursus
								metus aliquam. Tincidunt lobortis feugiat vivamus at augue eget
								arcu. Scelerisque viverra mauris in aliquam. Dictum varius duis
								at consectetur lorem donec massa. malesuada bibendum. Tristique
								nulla aliquet enim tortor at auctor urna nunc id. Pulvinar etiam
								non quam lacus suspendisse. Habitasse platea dictumst vestibulum
								rhoncus est pellentesque elit ullamcorper. Enim tortor at auctor
								urna nunc id cursus metus aliquam. Tincidunt lobortis feugiat
								vivamus at augue eget arcu. Scelerisque viverra mauris in
								aliquam. Dictum varius duis at consectetur lorem donec massa.
							</p>
							<button
								className='btn btn-outline-secondary button'
								type='button'
								onClick={this.handleClick}>
								<i className='fas fa-download'></i>
								Dowload Resume
							</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default AboutPage;
