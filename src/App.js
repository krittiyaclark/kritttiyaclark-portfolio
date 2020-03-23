import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/mainpage/mainpage.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import SkillsPage from './pages/skillspage/skillspage.component';

import Header from './components/header/header.component';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/' component={MainPage} />
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/skill' component={SkillsPage} />
			</Switch>
		</div>
	);
}

export default App;
