import React from 'react';

class NameForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			email:''
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange = function(e){
		//e.preventDefault();
		const target = e.target;
		const value = target.type =='checkbox'? target.checked:target.value;
		this.setState({
			[target.name]:value
		});	
	}
	handleSubmit = function(e){
		e.preventDefault();
		console.log('Handleing Submit',this.state);
	}
	render(){
		return(
			<form onSubmit={e=>this.handleSubmit(e)}>
				<h1>Form Elements:</h1>
				<p>
					<label>Name:</label>
					<input type="text" name="name" value={this.state.name} onChange={e=>this.handleChange(e)} /> 
				</p>
				<p>
					<label>email:</label>
					<input type="email" name="email" value={this.state.email} onChange={e=>this.handleChange(e)} />
				</p>
				<p>
					<label>Select Item:</label>
					<select name="select" value={this.state.select} onChange={e=>this.handleChange(e)}>
						<option value="grapes">Grapes</option>
						<option value="mangos">Mangos</option>
						<option value="jackFruit">JackFruit</option>
					</select>
				</p>
				<p>
					<label>Check Box:</label>
					<input type="checkbox" name="checkme" value={this.state.checkme} onChange={e=>this.handleChange(e)} />
				</p>
				<input type="submit" value="submit" />
			</form>
		);
	}
}
export default NameForm;