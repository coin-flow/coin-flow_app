'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';

const initQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 20
			}
		}
	});

export default function QueryProvider({ children }: PropsWithChildren) {
	const [queryClient] = useState(initQueryClient);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
