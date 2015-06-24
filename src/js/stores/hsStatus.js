import { HEARTHSTONE_SPAWNED, HEARTHSTONE_KILLED } from '../constants/ActionTypes';

export default function hsStatus(state = false, action) {
	switch(action.type) {
	case HEARTHSTONE_SPAWNED:
		return true;
	case HEARTHSTONE_KILLED:
		return false;
	default:
		return state;
	}
}