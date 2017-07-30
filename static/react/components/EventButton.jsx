import React, { Component } from 'react';
import $ from 'jquery';

export default class EventButton extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = (nextProps, nextState) => {
			return false;
		};
	};
	onClick() {
		const params = {};
	    $.ajax({
	        type: 'GET',
	        data: params,
	        url: '/api/',
	        success: results => {
	            console.log(results);
	        }
		})
	}
	render() {
		return <button
			className='btn btn-default'
			onClick={() => { this.onClick() }}>
			{this.props.framework} {this.props.display}
		</button>
	};
};
