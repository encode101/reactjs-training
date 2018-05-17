import React, { Component, PropTypes } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchItem: this.props.searchItem
        }
       this.handleChange = this.handleChange.bind(this)

    }

    handleChange(ev){
        this.setState({searchItem: ev.target.value})
    }

    handleClick(){
         // alert("Clicked!")
    }

    render() {
        return (
            <div className="float-right">
            	<form className="form-inline">
            	   <input type="text" name={this.props.name}  className="form-control" value= {this.state.searchItem} onChange={this.handleChange} />&nbsp;
            	   <input type="button" value="Search" className="btn btn-info" onClick={this.handleClick()}  />
            	</form>
            </div>

        );
    }
}

export default SearchBox;
