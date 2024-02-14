'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { SEARCH_DUMMY_DATA } from '../../constants/dummy';
import { coploreFetcher } from '../../libs/Fetcher';
import {
	SearchBody,
	initialDisparity,
	initialMacd,
	initialMasp,
	initialPrice,
	initialTransaction,
	initialTrends,
	type DisparityType,
	type MacdType,
	type MaspType,
	type PriceType,
	type TransactionType,
	type TrendsType
} from '../../models/search';
import Button from '../ui/Button';
import Disparity from './Disparity';
import MACD from './MACD';
import Masp from './Masp';
import Price from './Price';
import TransAction from './TransAction';
import Trends from './Trends';
import { buttonGroup, container, responseBox, wrapper } from './search.css';
import { QUERY_KEY } from '../../constants/queryKey';

export default function SearchForm() {
	const [price, setPrice] = useState<PriceType>(initialPrice);
	const [transaction, setTransaction] = useState<TransactionType>(initialTransaction);
	const [masp, setMasp] = useState<MaspType>(initialMasp);
	const [trends, setTrends] = useState<TrendsType>(initialTrends);
	const [disparity, setDisparity] = useState<DisparityType>(initialDisparity);
	const [macd, setMacd] = useState<MacdType>(initialMacd);

	const { mutate, data, isPending } = useMutation({
		mutationKey: [QUERY_KEY.SEARCH],
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		mutationFn: (data: SearchBody) => coploreFetcher.post<any>('/search/search', data)
	});

	const handleSearch = (isDummy?: boolean) => async () => {
		const data = (isDummy ? SEARCH_DUMMY_DATA : { price, transaction, masp, trends, disparity, macd }) as SearchBody;
		mutate(data);
	};

	return (
		<div className={container}>
			<h2>상세 검색 (Beta)</h2>
			<div className={wrapper}>
				<Price value={price} setValue={setPrice} />
				<TransAction value={transaction} setValue={setTransaction} />
				<Masp value={masp} setValue={setMasp} />
				<Trends value={trends} setValue={setTrends} />
				<Disparity value={disparity} setValue={setDisparity} />
				<MACD value={macd} setValue={setMacd} />
			</div>
			<div className={buttonGroup}>
				<Button onClick={handleSearch(true)} fullWidth size="sm">
					Dummy Search
				</Button>
				<Button onClick={handleSearch(false)} fullWidth color="secondary" size="sm">
					Input Search
				</Button>
			</div>
			{isPending && <>Loading...</>}
			{data && (
				<>
					<span>response test</span>
					<div className={responseBox}>{JSON.stringify(data)}</div>
				</>
			)}
		</div>
	);
}
