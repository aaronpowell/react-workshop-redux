const types =  {
    TICK: 'tick'
};

export { types };

export default {
    tickAction: (count) => ({ type: types.TICK, payload: count })
};
