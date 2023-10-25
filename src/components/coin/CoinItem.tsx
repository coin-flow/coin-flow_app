import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import type { BitcoinData } from '../../@types';
import { ROUTER_PATH } from '../../constants';

interface CoinItemProps {
	coinInfo: BitcoinData;
}

const formatter = new Intl.NumberFormat('ko-KR', {
	style: 'currency',
	currency: 'krw'
});

const formatPrice = (price: string) => {
	const formattedPrice = formatter.format(parseInt(price, 10));
	return formattedPrice;
};

const CoinItem = (props: CoinItemProps) => {
	const {
		coinInfo: {
			acc_trade_value,
			acc_trade_value_24H,
			closing_price,
			coin_name,
			fluctate_24H,
			fluctate_rate_24H,
			max_price,
			min_price,
			opening_price,
			prev_closing_price,
			units_traded,
			units_traded_24H
		}
	} = props;

	const navigate = useNavigate();

	const coinImg = `https://raw.githubusercontent.com/coplore/coplore_storage/main/bitcoin/${coin_name.toLowerCase()}.png`;

	const handleMoveToCoinDetail = () => {
		navigate(`${ROUTER_PATH.COIN}/${coin_name}`);
	};

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardHeader
				avatar={<Avatar src={coinImg} alt={coin_name} />}
				action={<Button aria-label="settings">Setting</Button>}
				title="Shrimp and Chorizo Paella"
				subheader="September 14, 2016"
			/>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					coin detail page {coin_name}
				</Typography>
				<Typography variant="h5" component="div">
					{coin_name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					coin detail
				</Typography>
				<Typography variant="body2">{formatPrice(max_price)}</Typography>
			</CardContent>
			<CardActions onClick={handleMoveToCoinDetail}>
				<Button size="small">Move To {coin_name} Detail Page</Button>
			</CardActions>
		</Card>
	);
};

export default CoinItem;
