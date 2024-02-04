const dummy = [
	{ id: '1', label: '시가총액', value: '₩1,598,367,603,477,908' },
	{ id: '2', label: '24시간 거래량', value: '₩1,598,367,603,477,908' },
	{ id: '3', label: 'Dominance', value: 'BTC:  60.8% ETH: 11.7%' },
	{ id: '4', label: '암호화폐', value: '8,660' },
	{ id: '5', label: 'Markets', value: '38,660' }
];

export default function Topbar() {
	return (
		<div className="w-full h-[40px] border-b border-zinc-200">
			<div className="w-full max-w-[1440px] flex gap-6 items-center p-3 mx-auto">
				{dummy.map(({ id, label, value }) => (
					<div key={id} className="flex gap-1 items-center">
						<span className="text-zinc-500 text-xs">{label}</span>
						<span className="text-violet-500 text-xs">{value}</span>
					</div>
				))}
			</div>
		</div>
	);
}
