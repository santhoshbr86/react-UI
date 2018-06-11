import React, {Component} from 'react';
import render from 'react-dom';

export default class Uncontrolled extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
	console.log(this.input.value);
	
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label> Name:
				<input type="text" ref={(input) => this.input = input} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}