'use client';

import { useGetTest, useGetTest2 } from '../../hooks/useGetTest';

export default function Test() {
	// SSR
	const { data: testData, error: testError } = useGetTest();

	// CSR
	const { data: test2Data, isLoading } = useGetTest2();

	if (testError) return testError.message;

	return (
		<div>
			<h2>SSR</h2>
			{testData.map((v: { id: string; email: string }) => (
				<div key={v.id}>{v.email}</div>
			))}
			<br />
			<h2>CSR</h2>
			{isLoading && <span>Loading...</span>}
			{test2Data && test2Data.map((v: { id: string; title: string }) => <div key={v.id}>{v.title}</div>)}
		</div>
	);
}
