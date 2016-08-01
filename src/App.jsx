import React, { Component } from 'react';
import actions from './actions';
import { connect } from 'react-redux';

const Person = function({ firstName, lastName, employer }) {
    return (
        <li key={`${firstName}${lastName}`}>
            <h2>{firstName} {lastName}</h2>
            <h3>{employer}</h3>
        </li>
    );
}

class PersonListComponent extends Component {
   componentWillMount() {
       this.props.loadPeople();
   }

   render() {
       if (this.props.loading) {
           return <img src="http://www.reactiongifs.com/r/waiting.gif" />;
       }

       return (
            <ul>
                {this.props.people.map(Person)}
            </ul>
       );
   }
}

const mapStateToProps = ({ people, loading }) => ({ people, loading });
const mapDispatchToProps = (dispatch) => ({
    loadPeople: () => dispatch(actions.loadPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonListComponent);
