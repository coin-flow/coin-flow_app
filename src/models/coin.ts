export type BitcoinItem = {
	/** 코인 심볼 */
	coin_symbol: string;

	/** 코인 한글 이름 */
	coin_kr_name: string;

	/** 종가 */
	close: number;

	/** 거래량 */
	volume: number;

	/** 거래대금 */
	transaction_amount: number;

	/** 24시간 변동금액 */
	fluctate_24H: number;

	/** 24시간 변동률 */
	fluctate_rate_24H: number;
};

export type BitcoinList = BitcoinItem[];
