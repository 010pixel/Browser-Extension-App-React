export interface ExtensionLink {
	browser: string;
	url: string;
}

export interface BrowserExtension {
	id: number;
	slug: string;
	name: string;
	colorBg?: string;
	colorText?: string;
	description: string;
	logo: string;
	banner: string;
	links: ExtensionLink[];
	showOnHome?: boolean;
}
