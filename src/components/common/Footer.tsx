import { Stack, Typography } from '@mui/material';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Stack
			component="footer"
			gap={1}
			sx={{
				margin: 'auto 0 0',
				padding: '16px'
			}}
		>
			<Typography variant="body1" sx={{ color: theme => theme.palette.grey[500] }}>
				Copyright &copy; {currentYear} by coplore.
			</Typography>
			<Typography variant="body1" sx={{ color: theme => theme.palette.grey[500] }}>
				All rights reserved.
			</Typography>
		</Stack>
	);
};

export default Footer;
