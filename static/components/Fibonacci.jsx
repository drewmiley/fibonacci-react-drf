import React from 'react';

export default class Fibonacci extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = false;
		this.state = { fZero: 0, fOne: 0, length: 0, results: [] };
	}
	handleInputOne(e) {
		this.setState({ fZero: parseInt(e.target.value, 10) });
	}
	handleInputTwo(e) {
		this.setState({ fOne: parseInt(e.target.value, 10) });
	}
	handleInputLength(e){
		this.setState({ length: parseInt(e.target.value, 10)});
	}
	onClick() {
		const params = { fZero: this.state.fZero, fOne: this.state.fOne, length: this.state.length };
		$.ajax({
			type: 'GET',
			data: params,
			url: '/api/',
			success: results => {
				this.setState({ results });
			}
		});
	}
	render() {
		return (
			<div>
				<input type='text' value={this.state.input} onChange={e => { this.handleInputOne(e); }} placeholder='F(0)'/>
				<input type='text' value={this.state.input} onChange={e => { this.handleInputTwo(e); }} placeholder='F(1)'/>
				<input type='text' value={this.state.input} onChange={e => { this.handleInputLength(e); }} placeholder='Length'/>
				<span>
					<button type='button' onClick={() => this.onClick()}>Calculate Fibonacci Sequence</button>
				</span>
				{this.state.results.map((result, i) =>
					<div key={i}><span>{ result }</span></div>
				)}
			</div>
		);
	}
}
