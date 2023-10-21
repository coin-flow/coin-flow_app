import { css, Global } from '@emotion/react';
import { useTheme } from '@mui/material';

import { pretendard, reset } from './base';

const GlobalStyle = () => {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				${reset}
				${pretendard}

        * {
					font-family: 'Pretendard' !important;
				}

				body {
					color: ${theme.palette.text.primary};
					background-color: ${theme.palette.background.default};
					transition: background-color 200ms ease-out;
				}

				a {
					text-decoration: none;
					color: inherit;
				}
			`}
		/>
	);
};

export default GlobalStyle;
