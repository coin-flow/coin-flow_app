import {
	CurrencyBitcoin as CurrencyBitcoinIcon,
	Home as HomeIcon,
	Info as InfoIcon,
	ManageSearch as ManageSearchIcon
} from '@mui/icons-material';
import { Divider, Drawer, List, Toolbar } from '@mui/material';

import { Footer, NavMenu } from '../../components';
import { ROUTER_PATH } from '../../constants';

const Sidebar = () => {
	const drawerWidth = 240;

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: 'border-box'
				}
			}}
		>
			<Toolbar />
			<List component="nav">
				<NavMenu icon={<HomeIcon />} moveToPath={ROUTER_PATH.HOME} navLabel="홈" />
				<NavMenu
					icon={<CurrencyBitcoinIcon />}
					moveToPath={ROUTER_PATH.COIN}
					navLabel="코인 리스트"
				/>
				<NavMenu icon={<ManageSearchIcon />} moveToPath={ROUTER_PATH.SEARCH} navLabel="검색" />
			</List>
			<Divider />
			<List>
				<NavMenu icon={<InfoIcon />} moveToPath={ROUTER_PATH.ABOUT} navLabel="About" />
			</List>
			<Footer />
		</Drawer>
	);
};

export default Sidebar;
