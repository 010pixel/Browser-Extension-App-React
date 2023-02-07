import Link from '@mui/material/Link';
import React from 'react';
import { BrowserExtension, ExtensionLink } from '../../interface/common';
import { ReactFCC } from '../../interface/react';
import exntensions from '../../shared/data';

interface HomeProps {}

const Home: ReactFCC<HomeProps> = () => {
	return (
		<div data-testid="home-component">
			<div style={{ textAlign: 'center', padding: '50px 20px' }}>
				<h1>Browser-Extensions</h1>
				<hr />
				<h6>Repo for hosting all the browser extension related static pages</h6>
				<hr />
				<div>
					<ul>
						{exntensions
							.filter((item: BrowserExtension) => {
								return item.showOnHome !== false;
							})
							.map((item: BrowserExtension) => {
								return (
									<li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
										{item?.logo && (
											<img src={item.logo} alt={item.name} width={16} height={16} style={{ marginRight: '8px' }} />
										)}
										<Link href={`/item/${encodeURIComponent(item.slug)}`}>{item.name}</Link>
										&nbsp;|&nbsp;
										{item.links.map((link: ExtensionLink) => {
											return (
												<>
													<Link href={link.url} target="_blank" rel="noreferrer">
														{link.browser}
													</Link>
													,{' '}
												</>
											);
										})}
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
