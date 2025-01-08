import React from 'react';
import './App.scss';
import LoginPage from './pages/LoginPage.tsx';
import Container from './components/layout/Container.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './routes/index.tsx';

const App: React.FC = () => {
	return (
		<div className={'app'}>
			<Container>
				<Index />
			</Container>
		</div>
	)
}

export default App;

/*

<Router>
					<Routes>
						<Route path='/' Component={LoginPage} />
						<Route path='/public/auth' Component={LoginPage} />
					</Routes>
				</Router>

*/