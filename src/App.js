import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ExpenseTracker from './pages/ExpenseTracker';
import CurrencyExchange from './pages/CurrencyExchange';
import BillReminders from './pages/BillReminders';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<main className="main-content">
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/expense-tracker" element={<ExpenseTracker />} />
						<Route path="/currency-exchange" element={<CurrencyExchange />} />
						<Route path="/bill-reminders" element={<BillReminders />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;