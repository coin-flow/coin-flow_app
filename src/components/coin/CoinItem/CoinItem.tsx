/* eslint-disable @next/next/no-img-element */
import { BitcoinItem } from '../../../models/coin';
import { formatCurrency } from '../../../utils/format';
import { badge, coinNameItem, container, icon, item } from './CoinItem.css';

type CoinItemProps = {
	bitcoin: BitcoinItem;
};

export default function CoinItem({ bitcoin }: CoinItemProps) {
	const {
		close, //
		coin_kr_name,
		coin_symbol,
		fluctate_24H,
		fluctate_rate_24H,
		transaction_amount,
		volume
	} = bitcoin;

	return (
		<tr className={container}>
			<td className={`${item} ${coinNameItem}`}>
				<img
					className={icon}
					src="https://raw.githubusercontent.com/coplore/coplore_icons-api/main/public/icons/btc.png"
					alt="icon"
				/>
				<div>{coin_kr_name}</div>
				<div className={badge}>{coin_symbol}</div>
			</td>
			<td className={item}>{formatCurrency(fluctate_24H ?? 0)} 원</td>
			<td className={item}>{fluctate_rate_24H}%</td>
			<td className={item}>{formatCurrency(close ?? 0)} 원</td>
			<td className={item}>{volume}</td>
			<td className={item}>{formatCurrency(transaction_amount ?? 0)} 원</td>
		</tr>
	);
}
