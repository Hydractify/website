import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';

function PlaceHolder() : JSX.Element
{
	return (
		<div style={{ textAlign: 'center' }}>
			<header className="App-header">
				<img src='logo.png' className="logo" alt="logo" />
				<p>
					Under construction.
				</p>
			</header>
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<PlaceHolder />
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.unregister();
