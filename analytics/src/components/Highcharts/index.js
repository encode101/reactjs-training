import React, { Component, PropTypes } from 'react';
const ReactDOM = require('react-dom');
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.
 
const config = {
  /* HighchartsConfig */
};

class Hightcharts extends Component {
    static propTypes = {
       
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	let chart = this.refs.chart.getChart();
    	chart.series[0].addPoint({x: 10, y: 12});
  	}

    render(){
    	return <ReactHighcharts config = {config}></ReactHighcharts>;
    }
}

export default Hightcharts;
