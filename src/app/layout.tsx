import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import Header from '../components/common/Header';
import '../styles/global.scss';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'nextjs boiler plate',
	description: 'nextjs boiler plate repository',
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon.ico'
		}
	]
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko" data-theme="light">
			<body className={`${openSans.className} bg-zinc-100`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
