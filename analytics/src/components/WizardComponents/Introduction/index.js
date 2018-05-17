import React, { Component, PropTypes } from 'react';

class Introduction extends Component {
    static propTypes = {
        // className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    saveFormData(){
        alert("form Data Saved");
    }

    handleSubmit(event){
       // this.props.navigateScreen(false)
        event.preventDefault();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                <h5>Create Your Introduction</h5> <br/><br/>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="fullName">Full Name</label>
                        <input name="fullName" className="form-control" type="text" name="Full Name" />
                    </div>
                    <div className="form-group">
                        <label for="fullName">Age Group</label>
                        <select className="form-control">
                            <option disabled="disabled" selected="selected">Select An Option</option>
                            <option>18-25</option>
                            <option>25-30</option>
                            <option>Above 30</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="fullName">Hobbies</label>
                        <input name="hobbies" className="form-control" type="text" name="Full Name" />
                    </div>
                    <input type="submit" className='btn btn-warning float-right' value="Save & Continue" />
               </form>
               </div>
            </div>
        );
    }
}

export default Introduction;
