import React, {Component} from 'react';
//import  ReactDOM, render from 'React-dom';
function NumberList(props){
	var double = props.numbers.map(number => <li key={number.toString()}>{number*2}</li>);
	return (<ul>{double}</ul>);	
}
export default class ListItems  extends Component{
	componentDidMount(){
		console.log('Component did mounted');
	}
	componentWillMount(){
	console.log('Component will mounted');	
	}
	render(){
		const numbers = [1,2,3,4,5];
		return(<NumberList numbers={numbers} />);
	}

}


