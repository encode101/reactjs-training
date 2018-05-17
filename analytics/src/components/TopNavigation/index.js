import React, { Component} from 'react';
import SearchBox from '../../components/SearchBox'

class TopNav extends Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
        this.state = {
            "searchItem": "australia",
            "screen": "intro"
        }
       // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div className="verticalSpacing50"></div>
            	<nav id="topnav" className="topNav">
            		<ol className='breadcrumb'>
                        <li className="breadcrumb-item active">introduction</li>
                        <li className="breadcrumb-item">Setup Subscription</li>
                        <li className="breadcrumb-item">Profile</li>
                    </ol>
            	</nav>
                <SearchBox 
                    searchItem={this.state.searchItem}
                    name="locatioNSearchBox"
                    onClick="alert('here')"
                    >
                </SearchBox>
            </div>
        );
    }
}

export default TopNav;
