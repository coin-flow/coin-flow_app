export * from './test.api';

const test = (string: string) => {
	const isNotInt = string.includes('.');
	if (isNotInt) return null;

	const number = ~~string;
	return number;
};
