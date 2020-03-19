import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import './header.styles.scss';

const Header = () => (
	<div>
		<Navbar expand='lg'>
			<Navbar.Brand href='#home'>KC</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
				<Nav>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#about'>About</Nav.Link>
					<Nav.Link href='#projects'>Projects</Nav.Link>
					<Nav.Link href='#skills'>Skills</Nav.Link>
					<Nav.Link href='#resume'>Resume</Nav.Link>
					<Nav.Link href='#contact'>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</div>
);

export default Header;
