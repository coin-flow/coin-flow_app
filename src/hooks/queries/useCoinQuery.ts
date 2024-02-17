import { useQuery } from '@tanstack/react-query';
import { coploreFetcher } from '../../libs/Fetcher';

/**
 * @Todo 필요데이터
 * - 심볼
 * - 이름
 * - 현재가
 * - 등락률, 변동률 (24시간 기준)
 * - 등락률, 변동률 (7일 기준)
 * - 시가총액
 *
 * @Todo 필요 기능
 * - 상단에 변동률 top5 색션 노출
 * - 각 컬럼에 대한 오름차순 내림차순 정렬기능
 * - name 또는 simbol 검색 기능 (리스트에서 필터링 검색, 상세페이지 이동 x)
 * - 각 정보에 대해 최신데이터를 받기위해 소켓io 연동 (2차 개발?)
 * - 무한스크롤 여부?
 */
export const useGetBitcoinList = () => {
	return useQuery({
		queryKey: ['bitcoin_list'],
		queryFn: () => coploreFetcher.get<[string, string, string][]>('/coin/get_bitcoin_list')
	});
};
