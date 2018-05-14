import React, { Component} from 'react';

class TopNav extends Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<ul>
            		<li>Dashboard</li>
            		<li>Reports</li>
            		<li>Profile</li>
            	</ul>
            </div>
        );
    }
}

export default TopNav;
