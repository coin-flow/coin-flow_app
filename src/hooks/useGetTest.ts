/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { testFetcher } from '../libs/Fetcher';

export function useGetTest() {
	return useQuery({
		queryKey: ['test'],
		queryFn: () => testFetcher.get<any>('/users')
	});
}

export function useGetTest2() {
	return useQuery({
		queryKey: ['test2'],
		queryFn: () => testFetcher.get<any>('/posts')
	});
}
