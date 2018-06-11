import React from 'react';


function FancyBorder(props){
return(
	<div className={'FancyBorder FancyBorder-'+props.color}>
		{props.children}
	</div>
);
}
function Contacts(){
	return(
		<div className="contactsLeft">
			<h2>Contacts Title</h2>
		</div>
		);
}
function Chats(){
	return(
		<div className="chatRight">
			<h3>Chat title</h3>
		</div>
		);
}
function SplitPane(props){
	return(
		<div className="splitPane">
			<div className="splitPane-left">
				{props.left}
			</div>
			<div className="splitPane-right">
				{props.right}
			</div>
		</div>
	);
}
class WelcomeDialog extends React.Component{
	render(){
	return(
		<div>
		<FancyBorder color="blue">
			<h2>Welcome</h2>
			<p>Thanks for visiting spance craft!</p>
		</FancyBorder>
		<SplitPane left={<Contacts/>} right={<Chats />} />
		</div>

	);
}
}
export default WelcomeDialog;