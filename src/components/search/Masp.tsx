import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import type { MaspType } from '../../models/search';
import { inner, input } from './search.css';

type MaspProps = {
	value: MaspType;
	setValue: Dispatch<SetStateAction<MaspType>>;
};

export default function Masp({ value, setValue }: MaspProps) {
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
			<input name="firstAvg" value={value.firstAvg} onChange={handleChange} className={input} placeholder="첫 번째" />
			이평선
			<select name="comparison" value={value.comparison} onChange={handleChange}>
				<option value="0">{'>='}</option>
				<option value="1">{'<='}</option>
			</select>
			<input name="secondAvg" value={value.secondAvg} onChange={handleChange} className={input} placeholder="두 번째" />
			이평선
		</div>
	);
}
