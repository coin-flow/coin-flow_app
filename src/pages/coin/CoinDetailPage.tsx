import { Button, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const CoinDetailPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const handleMoveToBack = () => {
		navigate(-1);
	};

	return (
		<Stack gap={1}>
			<Typography variant="h4">{id} Detail Page</Typography>
			<Button sx={{ width: '80px' }} onClick={handleMoveToBack}>
				뒤로가기
			</Button>
		</Stack>
	);
};

export default CoinDetailPage;
