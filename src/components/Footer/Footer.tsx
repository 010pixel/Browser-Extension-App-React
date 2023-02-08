import { Box } from '@mui/material';
import React from 'react';
import { ReactFCC } from '../../interface/react';

interface FooterProps {}

const Footer: ReactFCC<FooterProps> = () => {
	return (
		<footer data-testid="footer-component">
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					backgroundColor: 'primary.dark',
					color: 'primary.contrastText',
					p: 1,
					boxShadow: 2,
					justifyContent: 'center',
				}}
			>
				&copy; {new Date().getFullYear()} - All rights reserved
			</Box>
		</footer>
	);
};

export default Footer;
