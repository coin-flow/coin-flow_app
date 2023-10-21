import { Backdrop, Box, CircularProgress, Toolbar } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '../components';

const AppLayout = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Header />
			<Sidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Suspense
					fallback={
						<Backdrop
							open
							sx={{
								color: '#fff',
								zIndex: theme => theme.zIndex.drawer + 1
							}}
						>
							<CircularProgress color="inherit" />
						</Backdrop>
					}
				>
					<Outlet />
				</Suspense>
			</Box>
		</Box>
	);
};

export default AppLayout;
