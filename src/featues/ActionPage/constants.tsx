import React from 'react';
import { Typography } from '@mui/material';
import { BrowserExtension } from '../../interface/common';
import { EXTENSION_ACTIONS } from '../../common/constants';

export const installMsg = (item: BrowserExtension) => (
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

export const updateMsg = (item: BrowserExtension, version: string) => (
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
export const uninstallMsg = () => (
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

export const getActionMsg = (action: string, item: BrowserExtension, version: string) => {
	if (action === EXTENSION_ACTIONS.INSTALL) {
		return installMsg(item);
	}
	if (action === EXTENSION_ACTIONS.UPDATE) {
		return updateMsg(item, version as string);
	}
	return uninstallMsg();
};
