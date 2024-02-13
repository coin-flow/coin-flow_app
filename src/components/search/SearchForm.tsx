'use client';

import { useState } from 'react';

import { SEARCH_DUMMY_DATA } from '../../constants';
import { postData } from '../../libs/fetcher';
import {
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

export default function SearchForm() {
	const [price, setPrice] = useState<PriceType>(initialPrice);
	const [transaction, setTransaction] = useState<TransactionType>(initialTransaction);
	const [masp, setMasp] = useState<MaspType>(initialMasp);
	const [trends, setTrends] = useState<TrendsType>(initialTrends);
	const [disparity, setDisparity] = useState<DisparityType>(initialDisparity);
	const [macd, setMacd] = useState<MacdType>(initialMacd);
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	/** @TODO 테스트용 API 수정 필요 */
	const handleSearch = (isDummy?: boolean) => async () => {
		if (loading) return;
		setLoading(true);
		setResponse(null);
		const bodyData = isDummy ? SEARCH_DUMMY_DATA : { price, transaction, masp, trends, disparity, macd };

		try {
			const response = await postData(`${process.env.NEXT_PUBLIC_API_URL}/search/search`, bodyData);
			setResponse(response);
		} catch (error) {
			console.error('>>> search error:', error);
		} finally {
			setLoading(false);
		}
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
			{loading && <>Loading...</>}
			{response && (
				<>
					<span>response test</span>
					<div className={responseBox}>{JSON.stringify(response)}</div>
				</>
			)}
		</div>
	);
}
