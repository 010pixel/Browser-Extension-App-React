import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';

interface HeaderProps {}

const Header: ReactFCC<HeaderProps> = () => {
	return (
		<AppBar position="sticky" color="default">
			<Toolbar variant="dense">
				<Typography variant="inherit" color="inherit" noWrap>
					Browser Extensions | 010 Pixel
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
