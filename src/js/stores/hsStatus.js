import { HEARTHSTONE_SPAWNED, HEARTHSTONE_KILLED } from '../constants/ActionTypes';

export default function hsStatus(state = false, action) {
	switch(action.type) {
	case HEARTHSTONE_SPAWNED:
    console.log('spawned action');
		return true;
	case HEARTHSTONE_KILLED:
    console.log('killed action');
		return false;
	default:
		return state;
	}
}