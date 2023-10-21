import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';

interface CoinItemProps {
	title: string;
	price: string;
}

const formatter = new Intl.NumberFormat('ko-KR', {
	style: 'currency',
	currency: 'krw'
});

const CoinItem = (props: CoinItemProps) => {
	const { price, title } = props;

	const formattPrice = formatter.format(parseInt(price, 10));

	const navigate = useNavigate();

	const handleMoveToCoinDetail = () => {
		navigate(`${ROUTER_PATH.COIN}/${title}`);
	};

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					coin detail page {title}
				</Typography>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					coin detail
				</Typography>
				<Typography variant="body2">{formattPrice}</Typography>
			</CardContent>
			<CardActions onClick={handleMoveToCoinDetail}>
				<Button size="small">Move To {title} Detail Page</Button>
			</CardActions>
		</Card>
	);
};

export default CoinItem;
