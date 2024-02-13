import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import type { PriceType } from '../../models/search';
import { inner, input } from './search.css';

type PriceProps = {
	value: PriceType;
	setValue: Dispatch<SetStateAction<PriceType>>;
};

export default function Price({ value, setValue }: PriceProps) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValue(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div className={inner}>
			종가가
			<input name="low" value={value.low} onChange={handleChange} className={input} placeholder="하한가" />
			원 이상
			<input name="high" value={value.high} onChange={handleChange} className={input} placeholder="상한가" />원 이하인
			종목
		</div>
	);
}
