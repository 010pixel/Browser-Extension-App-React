import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Box, Card, CardContent } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import { BrowserExtension } from '../../interface/common';
import exntensions from '../../shared/data';
import { extensionActions, EXTENSION_ACTIONS, GAEventsByAction } from '../../common/constants';
import { trackPurchase } from '../../common/ga4';
import { getActionMsg, notice } from './constants';

interface ActionPageProps {}

const ActionPage: ReactFCC<ActionPageProps> = () => {
	const [searchParams] = useSearchParams();
	const { slug, action } = useParams();
	const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;
	const version = searchParams.get('version');
	const actionName = extensionActions[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] || null;

	useEffect(() => {
		if (!item || !action) {
			return;
		}
		document.title = `${item.name} - ${actionName}`;
		const analyticsEventActions = GAEventsByAction[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] || null;
		trackPurchase({
			appName: item.name,
			appSlug: item.slug,
			version,
			analyticsEventActions,
		});
	}, [item, action, actionName, version]);

	if (!item) {
		return <div>Oops...</div>;
	}

	if (!actionName) {
		return <div>Oops...</div>;
	}

	const msg = getActionMsg((action as string)?.toLocaleUpperCase(), item, version as string) as any;

	return (
		<div data-testid="item-component">
			{['google-meet-easy-mute', 'easy-mute-for-google-meet'].includes(item.slug) && (
				<Card sx={{ maxWidth: 345, backgroundColor: 'beige' }} style={{ margin: '20px auto' }}>
					<CardContent>{notice}</CardContent>
				</Card>
			)}
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
