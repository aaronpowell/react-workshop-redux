import { types } from './actions';

export default function (state = { count: 0 }, action) {
    if (action.type === types.TICK) {
        return Object.assign({}, state, { count: action.payload });
    }

    return state;
};
