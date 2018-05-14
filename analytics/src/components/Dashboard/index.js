import React, { Component} from 'react';
import TopNav from '../TopNavigation';

class Dashboard extends Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopNav></TopNav>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default Dashboard;
