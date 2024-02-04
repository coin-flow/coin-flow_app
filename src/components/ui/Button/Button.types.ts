import type { ComponentPropsWithRef, ReactNode } from 'react';

type DefaultProps = ComponentPropsWithRef<'button'>;

export interface ButtonProps extends DefaultProps {
	/**
	 * - 버튼의 색상을 설정합니다.
	 * - 'default', 'primary', 'secondary' 등 다양한 테마로 설정 가능합니다.
	 * @default default
	 */
	color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'ghost';

	/**
	 * - 버튼의 끝에 표시되는 아이콘입니다.
	 * @default undefined
	 */
	endIcon?: ReactNode;

	/**
	 * - 버튼을 부모 컨테이너의 전체 너비로 확장할지 여부를 결정합니다.
	 * @default false
	 */
	fullWidth?: boolean;

	/**
	 * - 버튼이 현재 로딩 중인지 여부를 나타냅니다.
	 * @default false
	 */
	loading?: boolean;

	/**
	 * - 버튼 애니메이션 여부를 설정합니다.
	 * @default false
	 */
	noAnimation?: boolean;

	/**
	 * - 버튼의 크기를 설정합니다.
	 * - 'lg'는 큰 크기, 'sm'은 작은 크기 등으로 설정 가능합니다.
	 * @default md
	 */
	size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';

	/**
	 * - 버튼의 끝에 표시되는 아이콘입니다.
	 * @default undefined
	 */
	startIcon?: ReactNode;

	/**
	 * - 버튼의 변형을 설정합니다.
	 * - 'filled'는 꽉찬 스타일, 'outline'은 외곽선 스타일입니다.
	 * @default filled
	 */
	variant?: 'filled' | 'outline';
}
