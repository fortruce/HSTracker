import React from 'react';
import HSApp from './HSApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';
import pstracker from 'pstracker';

import { hsSpawned, hsKilled } from '../actions/HSStatusActions';

const redux = createRedux(stores);

var hsTracker = pstracker({
	command: 'Hearthstone'
});

// console.log(hsTracker);

// hsTracker.on('spawned', proc => {
	// redux.dispatch(hsSpawned());
// });
// hsTracker.on('killed', proc => {
	// redux.dispatch(hsKilled());
// });

export default class App {
	render() {
		return (
			<Provider redux={redux}>
				{() => <HSApp />}
			</Provider>
		);
	}
}