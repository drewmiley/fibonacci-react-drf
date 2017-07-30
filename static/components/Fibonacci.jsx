import React from 'react';

export default class Fibonacci extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = false;
		this.state = { fZero: 0, fOne: 0 };
	}
	handleInputOne(e) {
		this.setState({ fZero: parseInt(e.target.value, 10) });
	}
	handleInputTwo(e) {
		this.setState({ fOne: parseInt(e.target.value, 10) });
	}
	onClick() {
		const params = {
			values: [this.state.fZero, this.state.fOne]
		};
		console.log([this.state.fZero, this.state.fOne])
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
		return <div>
			<input type='text' value={this.state.input} onChange={(e) => {this.handleInputOne(e)}} placeholder='F0'/>
			<input type='text' value={this.state.input} onChange={(e) => {this.handleInputTwo(e)}} placeholder='F1'/>
			<span>
				<button type='button' onClick={(e) => this.onClick()}>Calculate Fibonacci Sequence</button>
			</span>
		</div>
	}
};
