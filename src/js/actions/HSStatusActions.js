import { HEARTHSTONE_SPAWNED, HEARTHSTONE_KILLED } from '../constants/ActionTypes';

export function hsSpawned() {
	return {
		type: HEARTHSTONE_SPAWNED
	};
}

export function hsKilled() {
	return {
		type: HEARTHSTONE_KILLED
	};
}

export function trackStatus() {
  return dispatch => {
    var hstracker = pstracker({command: 'Hearthstone'});
    hstracker.on('spawned', () => { dispatch(hsSpawned()); });
    hstracker.on('killed', () => { dispatch(hsKilled()); });
  }
}