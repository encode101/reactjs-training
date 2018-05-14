import React, { Component, PropTypes } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
       // this.handleChange = this.bind.handleChange

    }

    handleChange(){
        alert("Values Changed!");
    }

    handleClick(){
        alert("Clicked!")
    }

    render() {
        return (
            <div className="float-right">
            	<form className="form-inline">
            	   <input type="text" name={this.props.name}  className="form-control" value={this.props.searchItem} onChange={this.handleChange} />&nbsp;
            	   <input type="button" value="Search" className="btn btn-info" onClick={this.handleClick()}  />
            	</form>
            </div>

        );
    }
}

export default SearchBox;
