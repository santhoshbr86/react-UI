import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
function Welcome(props) {
	return <h1>Hello {props.name}</h1>
}
const ele = <Welcome name="sara"/>
ReactDOM.render(
ele,
document.getElementById('app')
);