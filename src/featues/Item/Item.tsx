import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Fade, Grid, Typography } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import { BrowserExtension } from '../../interface/common';
import exntensions from '../../shared/data';
import { trackPageView } from '../../common/ga4';

interface ItemProps {}

const Item: ReactFCC<ItemProps> = () => {
	const { slug } = useParams();
	const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;

	useEffect(() => {
		if (!item) {
			return;
		}
		document.title = `${item.name}`;
		trackPageView();
	}, [item]);

	if (!item) {
		return <div>Oops...</div>;
	}

	return (
		<div data-testid="item-component">
			<Fade in timeout={500}>
				<Grid container my={5} spacing={0} minHeight={160}>
					<Grid
						xs={12}
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						textAlign="center"
					>
						<Avatar src={item?.logo} sx={{ width: 94, height: 94, mt: 5 }} />
						<Typography variant="h2" fontWeight={600} color="inherit" my={5}>
							{item?.name}
						</Typography>
						{item?.description && (
							<Typography variant="h6" fontWeight={400} color="inherit">
								{item?.description}
							</Typography>
						)}
					</Grid>
				</Grid>
			</Fade>
		</div>
	);
};

export default Item;
