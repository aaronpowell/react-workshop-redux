import { types } from './actions';

export default function (state = { people: [], loading: false }, action) {
    if (action.type === `${types.LOAD_PEOPLE}_FULFILLED`) {
        return Object.assign({}, state, { people: action.payload.people, loading: false });
    } else if (action.type === `${types.LOAD_PEOPLE}_PENDING`) {
        return Object.assign({}, state, { loading: true });
    }

    return state;
};
