import React, { Component} from 'react';
import LocationSearch from '../../components/LocationSearch'

class TopNav extends Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="verticalSpacing50"></div>
            	<nav id="topnav" className="topNav">
            		<ol className='breadcrumb'>
                        <li className="breadcrumb-item active">Dashboard</li>
                        <li className="breadcrumb-item">Reports</li>
                        <li className="breadcrumb-item">Profile</li>
                    </ol>
            	</nav>
                <LocationSearch></LocationSearch>
            </div>
        );
    }
}

export default TopNav;
