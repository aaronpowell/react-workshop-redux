const types =  {
    LOAD_PEOPLE: 'load-people'
};

export { types };

function loadSimulator(fn, timeout = 5000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(fn()), timeout);
    });
}

export default {
    loadPeople: () => undefined
};
