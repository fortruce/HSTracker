import { HEARTHSTONE_SPAWNED, HEARTHSTONE_KILLED } from '../constants/ActionTypes';

function hsSpawned() {
	return {
		type: HEARTHSTONE_SPAWNED
	};
}

function hsKilled() {
	return {
		type: HEARTHSTONE_KILLED
	};
}

export function trackStatus() {
  return dispatch => {
    var tracker = pstracker({
      command: 'Hearthstone',
      psargs: ['-A']
    });
    tracker.on('spawned', () => { dispatch(hsSpawned()); });
    tracker.on('killed', () => { dispatch(hsKilled()); });
  }
}