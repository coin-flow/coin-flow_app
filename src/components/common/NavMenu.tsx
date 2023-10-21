import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';

type NavMenuProps = {
	icon: ReactNode;
	moveToPath: ROUTER_PATH;
	navLabel: string;
};

const NavMenu = (props: NavMenuProps) => {
	const { icon, moveToPath, navLabel } = props;

	const navigate = useNavigate();
	const handleMoveToLink = () => navigate(moveToPath);

	const { pathname } = useLocation();
	const isMenuSelected = pathname === moveToPath;

	return (
		<ListItem disablePadding>
			<ListItemButton selected={isMenuSelected} onClick={handleMoveToLink}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={navLabel} />
			</ListItemButton>
		</ListItem>
	);
};

export default NavMenu;
