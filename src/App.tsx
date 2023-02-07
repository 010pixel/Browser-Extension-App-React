import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Item from './featues/Item/Item';
import Home from './featues/Home/Home';

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/item/:slug" element={<Item />} />
					<Route path="/item/:slug/:action" element={<div>Action</div>} />
				</Routes>
			</main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
