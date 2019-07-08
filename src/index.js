import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#fff',
			main: '#282c34',
			dark: 'rgb(0, 187, 255)',
			contrastText: 'rgb(4, 133, 255)',
			lightText: 'rgba(249, 250, 184, 0.767)',
		},
		secondary: {
			light: 'rgb(255, 44, 44)',
			main: 'rgb(255, 220, 167)',
			dark: 'rgb(0, 0, 0)',
			contrastText: '#fff',
		},

		status: {
			danger: 'orange',
		},
	},
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
