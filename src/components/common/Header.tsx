import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { Logo } from '../../components';
import { useThemeMode } from '../../hooks';
import { themeState } from '../../store';
import { blueGrey } from '@mui/material/colors';

const Header = () => {
	const theme = useRecoilValue(themeState);
	const { handleToggleTheme } = useThemeMode();

	return (
		<AppBar
			position="fixed"
			color="inherit"
			sx={{
				zIndex: theme => theme.zIndex.drawer + 1,
				boxShadow: 0,
				borderBottom: theme => `1px solid ${theme.palette.background.default}`
			}}
		>
			<Toolbar>
				<Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
					<Logo />
					<IconButton onClick={handleToggleTheme}>{theme.isDark ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
