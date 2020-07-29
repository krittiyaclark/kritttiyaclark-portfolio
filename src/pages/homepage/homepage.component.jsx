import React from 'react'

import Typing from 'react-typing-animation'

import './homepage.styles.scss'
import '../../assets/scss/buttons.scss'

const HomePage = () => (
	<header id='home-header' className='header-contianer'>
		<div className='fullscreen-wrap'>
			<div className='hero'></div>
		</div>

		<div className='home-content'>
			<div className='header'>
				<div className='heading'>
					<Typing speed={200}>
						<h2 className='theme-gradient'>Krittiya Clark</h2>
					</Typing>
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
	</header>
)

export default HomePage
