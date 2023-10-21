import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot, RecoilEnv } from 'recoil';

import App from './App.tsx';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const rootElement = document.getElementById('root');

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
			staleTime: 5 * 1000
		}
	}
});

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<App />
					<ReactQueryDevtools initialIsOpen={false} />
				</RecoilRoot>
			</QueryClientProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}
