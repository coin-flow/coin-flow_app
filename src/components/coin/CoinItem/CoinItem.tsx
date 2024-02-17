/* eslint-disable @next/next/no-img-element */
import { formatCurrency } from '../../../utils/format';
import { badge, coinNameItem, container, icon, item } from './CoinItem.css';

type CoinItemProps = {
	currentPrice: string;
	name: string;
	simbol: string;
};

export default function CoinItem({ currentPrice, name, simbol }: CoinItemProps) {
	return (
		<tr className={container}>
			<td className={`${item} ${coinNameItem}`}>
				<img
					className={icon}
					src="https://raw.githubusercontent.com/coplore/coplore_icons-api/main/public/icons/btc.png"
					alt="icon"
				/>
				<div>{name}</div>
				<div className={badge}>{simbol}</div>
			</td>
			<td className={item}>{formatCurrency(currentPrice || '0')} 원</td>
			<td className={item}>+0%</td>
			<td className={item}>100억</td>
		</tr>
	);
}
