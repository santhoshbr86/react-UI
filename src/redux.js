import {createStore} from "redux";

const reducer = function(state,action) {
	
}

const store = createStore(reducer,0);

store.subscribe(()=>{
	console.log('Store chaged',store.getState());
})
store.diptch({type:'INC',payload:1});
