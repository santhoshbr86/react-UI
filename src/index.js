import React, { Component } from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route} from 'react-router-dom/Route';
// import './index.css';
 import LogInCtrl from './login';
 import ListItems from './listandKeys';
 import NameForm from './form';
 import Uncontrolled from './uncontrolled';
 import Calculator  from './liftingState';

// import WelcomeDialog from './Composition';
// import WelcomeDilog2 from './Composition2';
// import FilterableProductTable from './reactThink';
import {createStore} from "redux";

const reducer = function(state,action) {
	if(action.type==='INC'){
		return state+action.payload;
	}
	if(action.type==='DEC'){
		return state-action.payload;
	}
	else{
		return state;
	}
}

const store = createStore(reducer,0);

store.subscribe(()=>{
	console.log('Store chaged',store.getState());
})
store.dispatch({type:'INC',payload:10});
store.dispatch({type:'INC',payload:20});
store.dispatch({type:'INC',payload:30});
store.dispatch({type:'DEC',payload:40});

export default class App extends Component {
    render(){
	    return (
	    	<div>
	    	<LogInCtrl />
	    	<ListItems />
	    	< NameForm />
	    	<Uncontrolled />
	    	<Calculator />
	    	</div>
		);
	}
}

render(<App />, document.getElementById('root'));