import { Box, Toolbar } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, LoadingBackdrop, Sidebar } from '../components';

const AppLayout = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Header />
			<Sidebar />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					padding: 3
				}}
			>
				<Toolbar />
				<Suspense fallback={<LoadingBackdrop />}>
					<Outlet />
				</Suspense>
			</Box>
		</Box>
	);
};

export default AppLayout;
