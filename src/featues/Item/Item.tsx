import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ReactFCC } from '../../interface/react';
import { BrowserExtension } from '../../interface/common';
import exntensions from '../../shared/data';

interface ItemProps {}

const Item: ReactFCC<ItemProps> = () => {
	const { slug } = useParams();
	const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;

	return (
		<div data-testid="item-component">
			<Grid container my={5} spacing={0} minHeight={160}>
				<Grid
					xs={12}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					textAlign="center"
				>
					<Avatar src={item?.logo} sx={{ width: 94, height: 94 }} />
					<Typography variant="h2" fontWeight={600} color="inherit" mt={5}>
						{item?.name}
					</Typography>
					<Typography variant="h6" fontWeight={400} color="inherit" mt={5}>
						{item?.description}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Item;
