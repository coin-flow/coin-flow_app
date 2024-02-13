import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import type { DisparityType } from '../../models/search';
import { inner, input } from './search.css';

type DisparityProps = {
	value: DisparityType;
	setValue: Dispatch<SetStateAction<DisparityType>>;
};

export default function Disparity({ value, setValue }: DisparityProps) {
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
			이격도가
			<input name="low" value={value.low} onChange={handleChange} className={input} placeholder="이격도" />
			이상
			<input name="high" value={value.high} onChange={handleChange} className={input} placeholder="이격도" />
			이하
		</div>
	);
}
