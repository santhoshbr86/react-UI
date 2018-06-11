import React from 'react';
function LogoutButton(props){
	return <button onClick={props.onClick}>Logout</button>
}
function  LoginButton(props){
	return <button onClick={props.onClick}>Login</button>
}
function UserGreeting(){
	return <h1>Welcome user</h1>
}
function GuestGreeting(){
	return <h1>Please Signup!</h1>
}
function Greeting(props){
	const isLoggedIn=props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />
	}
	else{
		return <GuestGreeting />
	}
}
class LogInCtrl extends React.Component{
	constructor(props){
		super(props);
		this.state={isLoggedIn:false};
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleLoginClick= this.handleLoginClick.bind(this);
	}
handleLoginClick(){
	this.setState({isLoggedIn:true});
}
handleLogoutClick(){
	this.setState({isLoggedIn:false});
}

render(){
	const isLoggedIn=this.state.isLoggedIn;
	const button = isLoggedIn?
	(<LogoutButton onClick={this.handleLogoutClick} />):
	(<LoginButton onClick={this.handleLoginClick} />);
	return(
		<div>
			<Greeting isLoggedIn={isLoggedIn} />
			{button}		
		</div>
	)
	}
}

export default LogInCtrl;