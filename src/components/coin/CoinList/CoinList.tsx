import CoinListBody from '../CoinListBody';
import CoinListHeader from '../CoinListHeader';
import { container } from './CoinList.css';

export default function CoinList() {
	return (
		<section className={container}>
			<CoinListHeader />
			<CoinListBody />
		</section>
	);
}
