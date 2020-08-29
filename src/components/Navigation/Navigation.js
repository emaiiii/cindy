import React from 'react';

const Navigation = ({route, onRouteChange, isSignedIn}) => {
	if(isSignedIn && route === 'home') {
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('note')} className='f3 link dim black underline pa3 pointer'>Note</p>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		)
	} 
	else if(isSignedIn && route === 'note'){
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		)
	}
	else{
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			</nav>
		)
	}
}

export default Navigation;