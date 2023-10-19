import { Box } from '@mui/material';
import { ReactNode } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

interface AppLayoutProps {
	children?: ReactNode;
}
const AppLayout = (props: AppLayoutProps) => {
	const { children } = props;

	return (
		<Box sx={{ display: 'flex' }}>
			<Header />
			<Sidebar />
			{children}
		</Box>
	);
};

export default AppLayout;
