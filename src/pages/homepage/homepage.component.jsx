import React from 'react';

import './homepage.styles.scss';
import '../../assets/scss/buttons.scss';

const HomePage = () => (
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
								<div className='box-bg'>
									<a
										className='nav-link button-hover hvr-sweep-to-left'
										href='#portfolio'>
										View My Portfolio
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default HomePage;
