import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import Test from '../components/home/Test';
import { getData } from '../libs/fetcher';

export default async function HomePage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['test'],
		queryFn: () => getData('https://jsonplaceholder.typicode.com/users')
	});

	return (
		<div style={{ height: '5000px' }}>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Test />
			</HydrationBoundary>
		</div>
	);
}
