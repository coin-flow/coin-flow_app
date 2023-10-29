import { Avatar, Button, Card, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import type { BitcoinData } from '../../@types';
import { ROUTER_PATH } from '../../constants';

interface CoinItemProps {
	coinInfo: BitcoinData;
}

const formatPrice = (price: string) => {
	const option: Intl.NumberFormatOptions = { style: 'currency', currency: 'krw' };
	const formatter = new Intl.NumberFormat('ko-KR', option);
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

	const handleMoveToCoinDetail = () => {
		navigate(`${ROUTER_PATH.COIN}/${coin_name}`);
	};

	const coinImg = `https://coplore-icon-api.vercel.app/api/icons/${coin_name.toLowerCase()}`;

	return (
		<Card variant="outlined">
			<CardHeader
				avatar={<Avatar src={coinImg} alt={coin_name} />}
				action={
					<Button color="inherit" onClick={handleMoveToCoinDetail}>
						상세보기
					</Button>
				}
				title={coin_name}
				titleTypographyProps={{ color: 'primary', fontWeight: '700', fontSize: '18px' }}
				subheader={coin_name}
				subheaderTypographyProps={{ color: 'gray', fontWeight: '400', fontSize: '12px' }}
			/>
			<CardContent>
				<List disablePadding>
					<ListItem disablePadding>
						<ListItemText sx={{ width: '50%' }} primary="종가(KRW)" secondary={`${formatPrice(closing_price)}`} />
						<ListItemText
							sx={{ width: '50%' }}
							primary="최근 변동률 (24H)"
							secondary={`${fluctate_rate_24H}%`}
							secondaryTypographyProps={{
								color: theme => (Number(fluctate_rate_24H) >= 0 ? theme.palette.info.main : theme.palette.error.main)
							}}
						/>
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ width: '50%' }} primary="금일 최고가(KRW)" secondary={`${formatPrice(max_price)}`} />
						<ListItemText sx={{ width: '50%' }} primary="금일 최저가(KRW)" secondary={`${formatPrice(min_price)}`} />
					</ListItem>
				</List>
			</CardContent>
		</Card>
	);
};

export default CoinItem;
