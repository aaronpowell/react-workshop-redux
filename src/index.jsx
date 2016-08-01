import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { connect, Provider } from 'react-redux';

function mapStoreToProps(state) {
    return {
        count: state.count
    };
}

const TickComponent = ({ count }) => (<h1>The count is: {count}</h1>);

const WrappedComponent = connect(mapStoreToProps)(TickComponent);

render(<Provider store={store}><WrappedComponent /></Provider>, document.getElementById('container'));
