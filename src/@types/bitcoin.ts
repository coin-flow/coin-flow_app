export type BitcoinData = {
	acc_trade_value: string;
	acc_trade_value_24H: string;
	closing_price: string;
	coin_name: string;
	fluctate_24H: string;
	fluctate_rate_24H: string;
	max_price: string;
	min_price: string;
	opening_price: string;
	prev_closing_price: string;
	units_traded: string;
	units_traded_24H: string;
};

export type BitcoinResponseData = {
	status: string;
	data: BitcoinData[];
};
