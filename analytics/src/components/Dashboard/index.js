import React, { Component} from 'react';
import TopNav from '../TopNavigation';
import 'bootstrap/dist/css/bootstrap.css';
import '../../global.css';
import './dashboard.css';

class Dashboard extends Component {
    static propTypes = {
     
    };

    constructor(props) {
        super(props);
        this.state = {
            "userObj": {
                "name": "rahul"
            }   
        }
    }

    render() {
        return (
            <div className="container">
                <TopNav
                    user={this.state.userObj} >
                </TopNav>
                <h3 className='mainTitle'>Dashboard</h3>
            </div>
        );
    }
}

export default Dashboard;
