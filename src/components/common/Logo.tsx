import LogoIcon from '../icons/LogoIcon';

export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<LogoIcon />
			<span className="text-2xl text-black">Coplore</span>
		</div>
	);
}
