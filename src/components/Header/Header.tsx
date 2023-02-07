import React from 'react';
import { ReactFCC } from '../../interface/react';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: ReactFCC<HeaderProps> = () => {
	return (
		<header className={styles.Header} data-testid="header-component">
			Header
		</header>
	);
};

export default Header;
