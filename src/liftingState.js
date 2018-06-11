import React, {Component} from 'react';

function BoilingVerdict(props){
	if(props.celsius>=100){
		return <p>Water would boil</p>
	}
	else{
		return <p>water would not boild</p>
	}
}

function toCelcius(input){
	return (input-32)*5/9;
}
function toFahrenheit(input){
	return (input*9/5)+32;
}
const scaleName = {
	c:'celsius',
	f:'Fahrenheit'
};

function tryConvert(temp, convert){
	const input = parseFloat(temp);
	if(Number.isNaN(input))	
	{
		return 'Not a number'
	}
	else
	{
		return convert(input)
	}
}

class TemparatureInput extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		
	}
	handleChange(e){
		//this.setState({temparature:e.target.value});
		this.props.onTemperatureChange(e.target.value);
	}

	render(){
		const temp = this.props.temparature;
		const scale = this.props.scale;
		return (
		<fieldset>
			<legend>Enter temparature in {scaleName[scale]}	</legend>
			<input type="text" value={temp} onChange={e=>this.handleChange(e)} />
			
		</fieldset>
		)
	}
}

export default class Calculator  extends Component{
	constructor(props){
		super(props);
		this.handleCelciusChange =  this.handleCelciusChange.bind(this);
		this.handleFarheneitChange = this.handleFarheneitChange.bind(this);
		this.state = {
			temparature:'',
			scale:'c'
		}
	}
	handleCelciusChange(temparature){
		this.setState({scale:'c', temparature});
	}
	handleFarheneitChange(temparature){
		this.setState({scale:'f', temparature});
	}

	render(){
		const scale = this.state.scale;
		const temparature = this.state.temparature;
		const celsius = scale === 'f' ? tryConvert(temparature, toCelcius): temparature;
		const fahrenheit = scale === 'c' ? tryConvert(temparature, toFahrenheit):temparature
		return(
			<div>
				<TemparatureInput scale='f' temparature={celsius} onTemperatureChange={this.handleCelciusChange} />
				<TemparatureInput scale='c' temparature={fahrenheit} onTemperatureChange={this.handleFarheneitChange} />
				<BoilingVerdict celsius={parseInt(temparature)} />
			</div>
		);
	}
}