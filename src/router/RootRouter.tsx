import { RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';

import { ROUTER_PATH } from '../constants';
import { AppLayout } from '../layouts';
import * as P from '../pages';

const routes: RouteObject[] = [
	{
		path: ROUTER_PATH.HOME,
		element: <P.HomeLazyPage />
	},
	{
		path: ROUTER_PATH.ABOUT,
		element: <P.AboutLazyPage />
	},
	{
		path: ROUTER_PATH.COIN,
		element: <P.CoinListLazyPage />
	},
	{
		path: `${ROUTER_PATH.COIN}/:id`,
		element: <P.CoinDetailLazyPage />
	},
	{
		path: ROUTER_PATH.SEARCH,
		element: <P.SearchLazyPage />
	}
];

const rootRouteObject: RouteObject[] = [
	{
		path: ROUTER_PATH.HOME,
		element: <AppLayout />,
		errorElement: <P.NotFoundLazyPage />,
		children: routes
	}
];

const RootRouter = () => <RouterProvider router={createHashRouter(rootRouteObject)} />;

export default RootRouter;
