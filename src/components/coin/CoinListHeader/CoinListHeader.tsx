import Button from '../../ui/Button';
import { buttonGroup, container, headerItem, headerList, input, topWrapper } from './CoinListHeader.css';

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
				<li className={headerItem}>이름</li>
				<li className={headerItem}>현재가</li>
				<li className={headerItem}>변동률 (7d)</li>
				<li className={headerItem}>시가총액</li>
			</ul>
		</div>
	);
}
