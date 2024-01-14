'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '../common/Logo';

const links = [
	{ id: '1', label: '암호화폐', href: '/coin' },
	{ id: '2', label: '공지사항', href: '/notice' },
	{ id: '3', label: '커뮤니티', href: '/community' }
];

export default function Navbar() {
	const currentPath = usePathname();

	return (
		<div className="w-full h-[60px] border-b border-zinc-200">
			<nav className="w-full max-w-[1440px] mx-auto p-3 flex justify-between">
				<div className="flex items-center">
					<Link href="/">
						<Logo />
					</Link>
					<ul className="flex items-center pl-4">
						{links.map(link => (
							<li
								key={link.id}
								className={`${
									link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'
								} hover:text-zinc-800 transition-colors text-sm px-4`}
							>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center gap-2">
					<button className="btn btn-sm btn-ghost">로그인</button>
					<button className="btn btn-sm btn-primary">회원가입</button>
				</div>
			</nav>
		</div>
	);
}
