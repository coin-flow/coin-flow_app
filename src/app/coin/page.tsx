'use client';

import { useGetBitcoinList } from '../../hooks/queries/useCoinQuery';

export default function CoinPage() {
	const { data } = useGetBitcoinList();
	console.log(data);

	return (
		<div className="min-h-dvh">
			CoinPage
			{data?.map(([simbol, name, current_price]) => (
				<div key={simbol}>
					<span>{name}</span>
					<br />
					<span>{current_price}</span>
				</div>
			))}
		</div>
	);
}
