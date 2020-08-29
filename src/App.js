import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import './App.css';

import letter from './images/letter.jpg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image7 from './images/image7.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route:'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if(route === 'signin'){
      this.setState({isSignedIn: false});
    }
    else if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    else if(route === 'note'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render(){

    const {isSignedIn, route} = this.state;

    return (
      <div className="App">
        <Navigation route={route} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? <div>
              <Logo/>
              <h1>Happy Anniversary to the Most Special Person</h1>
              <div class="container">
                <img src={image1} alt="image1"/>
                <img src={image2} alt="image2"/>
                <img src={image3} alt="image3"/>
                <img src={image4} alt="image4"/>
                <img src={image5} alt="image5"/>
                <img src={image7} alt="image7"/>
             </div>
             <h1 text-col>❤️ You are the True Love of My Life ❤️</h1>
             <h1 align="left">Picture 1: This was one of the most important days of my life. This is because on this day, I asked you to be my girlfriend. 
             It was one small moment that led to so much happiness for me.</h1>
             <h1 align="left">Picture 2: On this day, I was so happy, but I was also so scared. I was happy, because we had graduated together, and you 
             were still in my life. I was scared, because we would be going off to college, not knowing what could happen.</h1>
             <h1 align="left">Picture 3: This is my favorite picture from our first trip to San Francisco together. On this trip, I remember thinking about
             how much I love you. One reason I love you so much is because, you bring more joy to my life than I can ask for.</h1>
             <h1 align="left">Picture 4: This picture is of us on our second trip to San Francisco together. It was even more fun than the first, because
             it was just with you. You and only you alone can make me feel happiness that people spend their lives searching for.</h1>
             <h1 align="left">Picture 5: I just liked this picture of us, so I added it.LOL. I also look pretty good don't you think? Not too fat for once.</h1>
             <h1 align="left">Picture 6: As we move on to our next chapter in life, I know that you are thinking, or have thought, about what will become 
             of us. I have faith in us, and I believe we have been through so much to let anything ever destroy us. There is no possibility of me 
             not loving you. My love will follow you for eternity.🌟</h1>
            </div>
          : (
              route === 'signin'
              ? <div>
                  <Signin className="right" onRouteChange={this.onRouteChange}/>
                  <div className="tilt br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-50-l mw7 shadow-5 left">
                    <img src={letter} alt="letter"/>
                  </div>
                </div>
              : <div>
                  <Logo/>
                  <div className="white-box">
                    <p align="left">
                    Dear Cindy Phan, <br></br><br></br>
                    
                    I know that sometimes you question if I love you or not. I don't blame you, because sometimes I am extremely selfish and
                    inconsiderate. Sometimes I don't do right by you, and I don't know what comes over me to do those selfish things. I am truly
                    sorry for all the pain I've caused you over the past year, and I want to try to make it right. I admit that I have changed during 
                    the time from highschool to now. My ways of expressing emotions are totally different now. I want to try and relearn that way
                    of expression, but I need you to be patient with me and help me. I want to do this because, I feel like I was just an overall better person
                    years ago when I knew how to convey my feelings. Most importantly though, I want to do this in order to bring you to the level of happiness 
                    that you experienced early in our relationship. Nothing makes me happier than to see you happy. I promise you with my life, that I will do my 
                    best to do all of that. Next, I would like to thank you for everything you have done for me. My life would empty without you. You are my guiding 
                    light that pushes me to be a better me. Not only do you push me to do better, you instill happiness in my life like no other. There is no one
                    else that I would rather go on crazy boba and food runs with. There is no one else that I would rather have dance battles with. There is no one
                    else that I would rather spend the rest of my life with. All the peak happy moments in my life have been because of you. You have this aura about 
                    you that is indescribable. You just make everything around you simply—better. That is why I look up to you. I aspire to be a great person like you.

                    <br></br><br></br>
                    Happy 6 Year Anniversary from yours,
                    <br></br><br></br>
                    Erik Mai ❤️
                    </p>
                  </div>
                </div>
            )
        }
      </div>
    );
  } 
}

export default App;
