import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			KC
		</Link>

		<div className='options'>
			<Link className='option' to='/home'>
				HOME
			</Link>
			<Link className='option' to='/about'>
				ABOUT
			</Link>
			<Link className='option' to='/project'>
				PROJECT
			</Link>
			<Link className='option' to='/skills'>
				SKILLS
			</Link>
			<Link className='option' to='/resume'>
				RESUME
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
		</div>
	</div>
);

export default Header;
