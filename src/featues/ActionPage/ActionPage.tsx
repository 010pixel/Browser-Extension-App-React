import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import { BrowserExtension } from '../../interface/common';
import exntensions from '../../shared/data';
import { ACTIONS } from '../../common/constants';

interface ActionPageProps {}

const ActionPage: ReactFCC<ActionPageProps> = () => {
	const [searchParams] = useSearchParams();
	const { slug, action } = useParams();
	const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;
	const version = searchParams.get('version');

	if (!item) {
		return <div>Oops...</div>;
	}

	if (!action || !Object.values(ACTIONS).includes(action.toLocaleLowerCase() as ACTIONS)) {
		return <div>Oops...</div>;
	}

	const installMsg = (
		<>
			<Typography variant="h2" fontWeight={700}>
				Thank you
			</Typography>
			<Typography variant="h5" fontWeight={300} marginY={2}>
				For downloading <strong>{item.name}</strong>
			</Typography>
			<Typography variant="h3">😊</Typography>
		</>
	);
	const updateMsg = (
		<>
			<Typography variant="h2" fontWeight={700}>
				Thank you
			</Typography>
			<Typography variant="h5" fontWeight={300} marginY={2}>
				<strong>{item.name}</strong> has been updated to {version ? `v${version}` : 'latest version'}
			</Typography>
			<Typography variant="h3">😊</Typography>
		</>
	);
	const uninstallMsg = (
		<>
			<Typography variant="h2" fontWeight={700}>
				So sad
			</Typography>
			<Typography variant="h5" fontWeight={300} marginY={2}>
				to see you go
			</Typography>
			<Typography variant="h3">😢</Typography>
		</>
	);

	// eslint-disable-next-line no-nested-ternary
	const msg = action === ACTIONS.INSTALL ? installMsg : action === ACTIONS.UPDATE ? updateMsg : uninstallMsg;

	return (
		<div data-testid="item-component">
			<Box
				marginX={5}
				marginY={5}
				sx={{
					backgroundColor: 'primary.dark' || item.colorBg,
					color: 'common.white' || item.colorText,
					textAlign: 'center',
					paddingY: 6,
					borderRadius: 2,
					boxShadow: 10,
				}}
			>
				{msg}
			</Box>
		</div>
	);
};

export default ActionPage;
