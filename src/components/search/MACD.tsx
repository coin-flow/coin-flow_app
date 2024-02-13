import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import type { MacdType } from '../../models/search';
import { inner, input } from './search.css';

type MACDProps = {
	value: MacdType;
	setValue: Dispatch<SetStateAction<MacdType>>;
};

export default function MACD({ value, setValue }: MACDProps) {
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
			시간 차트기준 단기 이평
			<input name="short" value={value.short} onChange={handleChange} className={input} placeholder="단기" />
			장기 이평
			<input name="long" value={value.long} onChange={handleChange} className={input} placeholder="장기" />
			signal
			<input name="signal" value={value.signal} onChange={handleChange} className={input} placeholder="시그널" />
			MACD 시그널 이상
		</div>
	);
}
