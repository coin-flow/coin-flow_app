import Button from '../../ui/Button';
import {
	buttonGroup,
	container,
	headerItem,
	headerList,
	iconGroup,
	input,
	sortIcon,
	topWrapper
} from './CoinListHeader.css';
import arrow_drop_down from '../../../assets/svgs/arrow_drop_down.svg';
import arrow_drop_up from '../../../assets/svgs/arrow_drop_up.svg';
import Image from 'next/image';

export default function CoinListHeader() {
	return (
		<div className={container}>
			<div className={topWrapper}>
				<div className={buttonGroup}>
					<Button size="sm">빗썸</Button>
					<Button size="sm" variant="outline">
						업비트
					</Button>
				</div>
				<input className={input} type="text" placeholder="이름 또는 심볼명으로 검색" />
			</div>
			<ul className={headerList}>
				<li className={headerItem}>
					<div>이름</div>
					<div className={iconGroup}>
						<Image className={sortIcon.up} src={arrow_drop_up} alt="arrow_drop_up" />
						<Image className={sortIcon.down} src={arrow_drop_down} alt="arrow_drop_down" />
					</div>
				</li>
				<li className={headerItem}>현재가</li>
				<li className={headerItem}>변동률 (7d)</li>
				<li className={headerItem}>시가총액</li>
			</ul>
		</div>
	);
}
