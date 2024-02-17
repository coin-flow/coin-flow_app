export enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

export class Fetcher {
	constructor(private baseUrl: string) {}

	public async get<T>(url: string): Promise<T> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: METHOD.GET
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return response.json();
	}

	async post<T>(url: string, data: object): Promise<T> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: METHOD.POST,
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return response.json();
	}

	public async put<T>(url: string, data: object): Promise<T> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: METHOD.PUT,
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return response.json();
	}

	async delete<T>(url: string): Promise<T> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: METHOD.DELETE
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return response.json();
	}
}

export const coploreFetcher = new Fetcher(process.env.NEXT_PUBLIC_API_URL);
