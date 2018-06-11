import React from 'react';
var products = [{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
	];
var tempList;
export default class FilterableProductTable extends React.Component{
   constructor(props){
		super(props);
		this.state={
			productsList:products.map(product=><li>{product.name}</li>)
		}
		
	}
	handleFilter(data){
		tempList=products.filter((product)=>{
			return product.name.toLowerCase().match(data);
		});
	   this.setState({productsList:tempList.map(product=><li>{product.name}</li>)});
	}
	render(){
		return(
			<div className="productTable">
				<SearchBar onhandleSubmit={this.handleFilter}/>
				<ProductTable ref={(child)=>this.child=child} products={this.state.productsList} />
			</div>	
		);
	}
}

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.state={searchInput:''};
	}
	handleChange(e){
		this.setState({searchInput:e.target.value});
		this.props.onhandleSubmit(e.target.value);
	}
	render(){
		return(
		<div className="searchBar">
			<input type="text" value={this.state.searchInput} onChange={(e)=>this.handleChange(e)} />  <br />
			<input type="checkbox" />	<br />
			<button>search</button>
		</div>
	);
	}	
}
class ProductTable extends React.Component{
	constructor(props){
		super(props);
		this.productsList=this.props.products;
		//this.proTable=this.props.proref;
	}
	// onfilter(productsList){
	// 	this.productsList=productsList;
	// }
	render(){
		return(
		<div className="productTable">
			<p>product Table</p>
			<ul>{this.productsList}</ul>
		</div>
		);
	}
}