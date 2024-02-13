import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import type { TransactionType } from '../../models/search';
import { inner, input } from './search.css';

type TransActionProps = {
	value: TransactionType;
	setValue: Dispatch<SetStateAction<TransactionType>>;
};

export default function TransAction({ value, setValue }: TransActionProps) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValue(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div className={inner}>
			거래 대금이
			<input name="low" value={value.low} onChange={handleChange} className={input} placeholder="하한가" />
			이상
			<input name="high" value={value.high} onChange={handleChange} className={input} placeholder="상한가" />
			이하인 종목
		</div>
	);
}
