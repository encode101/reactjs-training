import React, { Component, PropTypes } from 'react';

class Dashboard extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello</h1>;
        );
    }
}

export default Dashboard;
