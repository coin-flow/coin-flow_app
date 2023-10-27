export type BitcoinData = {
	/** 거래금액 00시 기준 */
	acc_trade_value: string;

	/** 최근 24시간 거래금액 */
	acc_trade_value_24H: string;

	/** 종가 00시 기준 */
	closing_price: string;

	/** 비트코인 이름 */
	coin_name: string;

	/** 최근 24시간 변동가 */
	fluctate_24H: string;

	/** 최근 24시간 변동률 */
	fluctate_rate_24H: string;

	/** 고가 00시 기준 */
	max_price: string;

	/** 저가 00시 기준 */
	min_price: string;

	/** 시가 00시 기준 */
	opening_price: string;

	/** 전일종가 */
	prev_closing_price: string;

	/** 거래량 00시 기준 */
	units_traded: string;

	/** 최근 24시간 거래량 */
	units_traded_24H: string;
};

export type BitcoinResponseData = {
	status: string;
	data: BitcoinData[];
};
