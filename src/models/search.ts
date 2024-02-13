type Flag = 0 | 1;

export type PriceType = {
	flag: Flag;
	low: string;
	high: string;
};

export type TransactionType = {
	flag: Flag;
	chart: string;
	low: string;
	high: string;
};

export type MaspType = {
	flag: Flag;
	chart: string;
	firstAvg: string;
	comparison: string;
	secondAvg: string;
};

export type TrendsType = {
	flag: Flag;
	chart: string;
	avg: string;
	time: string;
	trends_type: string;
	upAndDown: string;
};

export type DisparityType = {
	flag: Flag;
	chart: string;
	avg: string;
	low: string;
	high: string;
};

export type MacdType = {
	flag: Flag;
	chart: string;
	short: string;
	long: string;
	signal: string;
	upAndDown: string;
};

export type SearchBody = {
	price: PriceType;
	transaction: TransactionType;
	masp: MaspType;
	trends: TrendsType;
	disparity: DisparityType;
	macd: MacdType;
};

export const initialPrice: PriceType = {
	flag: 1,
	low: '',
	high: ''
};

export const initialTransaction: TransactionType = {
	flag: 1,
	chart: '24',
	low: '',
	high: ''
};

export const initialMasp: MaspType = {
	flag: 1,
	chart: '1',
	firstAvg: '',
	comparison: '0',
	secondAvg: ''
};

export const initialTrends: TrendsType = {
	flag: 1,
	chart: '1',
	avg: '',
	time: '',
	trends_type: '0',
	upAndDown: '0'
};

export const initialDisparity: DisparityType = {
	flag: 1,
	chart: '1',
	avg: '',
	low: '',
	high: ''
};

export const initialMacd: MacdType = {
	flag: 1,
	chart: '1',
	short: '',
	long: '',
	signal: '',
	upAndDown: '0'
};
