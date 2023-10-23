import { Grid } from '@mui/material';

import { CoinItem } from '../../components';
import { dummyBitcoinInfo } from '../../data';

const CoinListPage = () => {
	return (
		<div>
			<Grid container spacing={2}>
				{Object.entries(dummyBitcoinInfo).map(([key, value]) => (
					<Grid key={key} item lg={3} md={4} sm={6}>
						<CoinItem price={value.closing_price} title={key} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CoinListPage;
