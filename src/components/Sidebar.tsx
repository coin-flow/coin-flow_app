import {
	DarkMode as DarkModeIcon,
	Inbox as InboxIcon,
	LightMode as LightModeIcon,
	Mail as MailIcon
} from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar
} from '@mui/material';
import { useRecoilValue } from 'recoil';

import { useThemeMode } from '../hooks';
import { themeState } from '../store';

const drawerWidth = 240;

const Sidebar = () => {
	const theme = useRecoilValue(themeState);
	const { handleToggleTheme } = useThemeMode();

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
			}}
		>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<List>
					<ListItem disablePadding>
						<ListItemButton onClick={handleToggleTheme}>
							<ListItemIcon>{theme.isDark ? <LightModeIcon /> : <DarkModeIcon />}</ListItemIcon>
							<ListItemText primary={theme.isDark ? 'Ligin Mode' : 'Dark Mode'} />
						</ListItemButton>
					</ListItem>
					{['List', 'Search'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['About', 'Link'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
