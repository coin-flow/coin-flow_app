'use client';

import { useGetBitcoinList } from '../../../state/queries/useCoinQuery';
import CoinItem from '../CoinItem';
import { container } from './CoinListBody.css';

export default function CoinListBody() {
	const { data: bitcoinList } = useGetBitcoinList();

	return (
		<table className={container}>
			<tbody>{bitcoinList?.map(bitcoin => <CoinItem key={bitcoin.coin_symbol} bitcoin={bitcoin} />)}</tbody>
		</table>
	);
}
