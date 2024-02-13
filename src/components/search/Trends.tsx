import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import type { TrendsType } from '../../models/search';
import { inner, input } from './search.css';

type TrendsProps = {
	value: TrendsType;
	setValue: Dispatch<SetStateAction<TrendsType>>;
};

export default function Trends({ value, setValue }: TrendsProps) {
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setValue(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div className={inner}>
			<select name="chart" value={value.chart} onChange={handleChange}>
				<option value="1">1</option>
				<option value="6">6</option>
				<option value="12">12</option>
				<option value="24">24</option>
			</select>
			시간 차트기준
			<input name="avg" value={value.avg} onChange={handleChange} className={input} placeholder="이평선" />
			이평선,
			<input name="time" value={value.time} onChange={handleChange} className={input} placeholder="추세" />번
			<select name="upAndDown" value={value.upAndDown} onChange={handleChange}>
				<option value="0">상승</option>
				<option value="1">다운</option>
			</select>
		</div>
	);
}
