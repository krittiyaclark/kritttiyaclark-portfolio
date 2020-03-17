import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/mainpage/mainpage.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import Header from './components/header.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={AboutPage} />
			</Switch>
		</div>
	);
}

export default App;
