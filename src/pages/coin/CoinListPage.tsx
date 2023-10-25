import { Grid } from '@mui/material';

import { CoinItem, LoadingBackdrop } from '../../components';
import { useBitcoinQuery } from '../../hooks';

const CoinListPage = () => {
	const { data, isLoading } = useBitcoinQuery();
	const bitcoinList = data?.data;

	return isLoading ? (
		<LoadingBackdrop />
	) : (
		<div>
			<Grid container spacing={2}>
				{bitcoinList?.map(coinInfo => (
					<Grid key={coinInfo.coin_name} item lg={3} md={4} sm={6}>
						<CoinItem coinInfo={coinInfo} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CoinListPage;
