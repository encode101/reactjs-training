import React, { Component, PropTypes } from 'react';

class LocationSearch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="float-right">
            	<form className="form-inline">
            	<input type="text" name="locationSearchKey" className="form-control" />&nbsp;
            	<input type="button" value="Search" className="btn btn-info" />
            	</form>
            </div>

        );
    }
}

export default LocationSearch;
