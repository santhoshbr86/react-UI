import React from 'react';
function Dialog(props){
	return(
		<div>
		<h1 className="title">
			{props.title}
		</h1>
		<p>{props.message}</p>
		<div className="formName">
			{props.children}
		</div>
		</div>
	);

}
export default class WelcomeDilog2 extends React.Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.state={login:''};
	}
	handleSubmit(){
		console.log(`This how back tick works, ${this.state.login}!:)`);
	}
	handleChange(e){
		this.setState({login:e.target.value});
		
	}
	render()
	{
		return (
			<Dialog title="This is Composition Demo 2" message="Composition Message">
			<input type="text" value={this.state.login} onChange={this.handleChange} />
			<button className="btn" onClick={this.handleSubmit}>Submit</button>
			</Dialog>
		);
	}
}
 