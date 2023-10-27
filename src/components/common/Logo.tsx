import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';

const Logo = () => {
	const navigate = useNavigate();
	const handleMoveToHome = () => navigate(ROUTER_PATH.HOME);

	return (
		<Typography
			variant="h5"
			component="div"
			color="primary"
			fontWeight={700}
			sx={{ cursor: 'pointer' }}
			onClick={handleMoveToHome}
		>
			coplore
		</Typography>
	);
};

export default Logo;
