// function formatName(user){
// 	return user.firstName + ' ' +user.lastName;
// }
// var user = {
// 	firstName:'Jason',
// 	lastName:'Roy'
// };
// function Clock(props){
// 	return(
// 		<div>
// 			<h1>Hello world {formatName(user)}</h1>
// 			<p>This is react tuts{props.date.toLocaleTimeString()}.</p>
// 		</div>
// 	)
// }
// function gre	eting(user){
// 	if(user){
// 		<Clock date={new Date()} />
// 	}
// 	else
// 	{
// 		return <h1>Hello world Stranger</h1>
// 	}
// }
//***************************************** props and react comp Class

// class Clock extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 			<h1>Hello world</h1>
// 			<div>It is {this.props.date.toLocaleTimeString()}</div>
// 			</div>
// 		);
// 	}
// }

// function tick(){
// 	ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
// };
// setInterval(tick,1000);

//********************************* Function react element

//registerServiceWorker();
// function Welcome(props) {
// 	return <h1>Hello {props.name}</h1>
// }
// const ele = <Welcome name="sara"/>
// ReactDOM.render(
// ele,
// document.getElementById('root')
// );

//***************************************** Mount/unMount
// function FormatDate(props){
// 		return <h2>From child {props.date.toLocaleTimeString()}.</h2>
// 	}
// class Clock extends React.Component{
// 	constructor(props){
// 	super(props);
// 	this.state={
// 		date:new Date(),
// 		isToggle:true
// 		};
// 	this.handleEvent = this.handleEvent.bind(this);
// 	}
// 	componentDidMount(){
// 		this.timerId = setInterval(()=>this.tick(),1000);
// 	}
// 	componentWillUnmount(){
// 		clearInterval(this.timerId);
// 	}
// 	tick(){
// 		this.setState({date:new Date()});
// 	}
// 	handleEvent(e){
// 	e.preventDefault();
// 	console.log('First Event');
// 	this.setState(prevState=>({isToggle:!prevState.isToggle}));
// 	}
// 	render(){
// 		return(
// 			<div>
// 			<h1>Hello world</h1>
// 			<div>It is {this.state.date.toLocaleTimeString()}</div>
// 			<FormatDate date={this.state.date} />
// 			<button onClick={this.handleEvent}>{this.state.isToggle?'ON':'OFF'}</button>
// 			</div>
// 		);
// 	}
// }
// function UserGreeting(){
// 	return <h1>Welcome user</h1>
// }
// function GuestGreeting(){
// 	return <h1>Please Signup!</h1>
// }
// function Greeting(props){
// 	const isLoggedIn=props.isLoggedIn;
// 	if(isLoggedIn){
// 		return <UserGreeting />
// 	}
// 	else{
// 		return <GuestGreeting />
// 	}
// }

// class App extends Component{
// 	render(){
// 		return(
// 			<div>
// 			<LogInCtrl />
// 			<NameForm />
// 			<WelcomeDialog />
// 			<WelcomeDilog2 />
// 			<FilterableProductTable />
// 			</div>
// 		);
// 	}
// }