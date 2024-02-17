export function formatCurrency(amount: string | number) {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
