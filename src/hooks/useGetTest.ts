import { useQuery } from '@tanstack/react-query';
import { getData } from '../libs/fetcher';

export function useGetTest() {
	return useQuery({
		queryKey: ['test'],
		queryFn: () => getData('https://jsonplaceholder.typicode.com/users')
	});
}

export function useGetTest2() {
	return useQuery({
		queryKey: ['test2'],
		queryFn: () => getData('https://jsonplaceholder.typicode.com/posts')
	});
}
