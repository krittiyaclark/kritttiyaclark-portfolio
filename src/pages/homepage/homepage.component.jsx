import React from 'react';

import video from '../../assets/video/video.mp4';

import './homepage.styles.scss';
import '../../assets/scss/buttons.scss';

const HomePage = () => (
	<header id='home-header' className='header-contianer'>
		<div className='fullscreen-video-wrap'>
			<video className='video' autoPlay='autoplay' loop='loop' muted>
				<source src={video} type='video/mp4' />
			</video>
		</div>
		<div className='header-overlay'></div>
		{/* <div className='homepage'> */}
		<div className='home-content'>
			{/* <div className='contianer d-flex h-100'>
				<div className='row justify-content-center align-items-center w-100'>
					<div className='col-md-12 col-xs-12 mx-auto'> */}
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
		{/* </div>
			</div>
		</div> */}
		{/* </div> */}
	</header>
);

export default HomePage;
