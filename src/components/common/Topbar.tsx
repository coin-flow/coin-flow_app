import styles from './Topbar.module.scss';

const dummy = [
	{ id: '1', label: '시가총액', value: '₩1,598,367,603,477,908' },
	{ id: '2', label: '24시간 거래량', value: '₩1,598,367,603,477,908' },
	{ id: '3', label: 'Dominance', value: 'BTC:  60.8% ETH: 11.7%' },
	{ id: '4', label: '암호화폐', value: '8,660' },
	{ id: '5', label: 'Markets', value: '38,660' }
];

export default function Topbar() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{dummy.map(({ id, label, value }) => (
					<div key={id} className={styles.item}>
						<span className={`${styles.text} ${styles['text--grey']}`}>{label}</span>
						<span className={`${styles.text} ${styles['text--primary']}`}>{value}</span>
					</div>
				))}
			</div>
		</div>
	);
}
