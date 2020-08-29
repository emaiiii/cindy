import React from 'react';

class Signin extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSubmitSignIn = () => {
		if(this.state.signInEmail === 'cindy.phann@gmail.com' &&
			this.state.signInPassword === 'anniversary2020'){
			this.props.onRouteChange('home');
		}
	}

	render() {
		return(
		<article className="br3 ba dark-gray b--black-10 mv7 w-100 w-50-m w-50-l mw6 shadow-5 right">
			<main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Cindy Phan ONLY!</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.onEmailChange}/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="password"
			        	name="password" 
			         	id="password"
			         	onChange={this.onPasswordChange}/>			        
			      </div>
			    </fieldset>
			    <div className="">
			      <input
			      	onClick={this.onSubmitSignIn}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      	type="button" 
			      	value="Sign in"/>
			    </div>
			  </form>
			</main>
		</article>
		);
	}
}

export default Signin;