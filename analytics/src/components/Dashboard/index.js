import React, { Component} from 'react';
import TopNav from '../TopNavigation';
import 'bootstrap/dist/css/bootstrap.css';
import Introduction from '../WizardComponents/Introduction';
import SetupSubscription from '../WizardComponents/SetupSubscription';
import ManagePolicies from '../WizardComponents/ManagePolicies';
import '../../global.css';
import './dashboard.css';
/*import '../../dist/jquery-3.3.1.min.js';
import '../../dist/semantic.min.css';
import '../../dist/semantic.min.js';*/

class Dashboard extends Component {
    static propTypes = {
     
    };

    constructor(props) {
        super(props);
        this.state = {
            "userObj": {
                "name": "rahul"
            },
            "screen": 1,
            "lastScreenReached": false,
            "screenCount": 3
        }
        this.navigateScreen = this.navigateScreen.bind(this)
        this._saveData = this._saveData.bind(this)
    }

    _saveData(){
        console.log(this)
    }

    navigateScreen(reverse){
        this._saveData();
        if(this.state.screen <= this.state.screenCount){
            reverse ? this.setState({'screen': this.state.screen-1}) : this.setState({'screen': this.state.screen+1})
        }
    }

    render() {
        return (
            <div className="container">
                <TopNav
                    user={this.state.userObj} >
                </TopNav>
                <div className="clearfix"></div>
                
                <div className="contentArea">
                    {this.state.screen === 1 ? <Introduction navigateScreen></Introduction> : false }
                    {this.state.screen === 2 ? <SetupSubscription></SetupSubscription> : false }
                    {this.state.screen === 3 ? <ManagePolicies></ManagePolicies> : false }
                </div>
                
            </div>
        );
    }
}

export default Dashboard;

/*<button className='btn btn-info float-left' onClick={e => this.navigateScreen(true)}>Back</button>
                <input type="submit" className='btn btn-warning float-right' onClick={ e => this.navigateScreen(false) } value="Save & Continue" />*/