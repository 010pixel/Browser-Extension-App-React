import React from 'react';
import { Divider, Typography } from '@mui/material';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import Search from '@mui/icons-material/Search';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import { BrowserExtension } from '../../interface/common';
import { EXTENSION_ACTIONS } from '../../common/constants';

export const notice = (
	<div className="row">
		<div className="col s12">
			<div className="card z-depth-5">
				<div className="card-content">
					<div>
						<EmojiPeople color="primary" />
						Hello lovely folks,
					</div>
					<Divider
						sx={{
							marginY: 2,
						}}
					/>
					In the latest update, you must have noticed that your search engine <Search color="primary" />
					is changed. This is to sustatin the development of this extension and continue serving this extension for free{' '}
					<MonetizationOn color="warning" />
				</div>
			</div>
		</div>
	</div>
);

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
