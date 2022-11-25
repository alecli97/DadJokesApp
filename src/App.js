import React from "react";
import "./styles.css";
import laptop from './laptop.png'
import man from './man.png'
import manatee from './manatee.png'
import python from './python.png'
import java from './java.png'
import c from './c++.png'
import css from './css.png'
import html from './html.png'
import manatea from './manatea.png'
import griffin from './griffin.png'
import familyGuy from './familyGuy.png'
import chuck from './chuck-joke.png'
import realManatee from './real-manatee.png'
import yourself from './chuck-yourself.png'
import cartoon from './cartoon.png'
import name from './name.png'
import dadJoke from './dad-joke.png'
import cartoonManatee from './cartoon-manatee.png'
import realChuck from './real-chuck.png'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      joke: null,
      isFetchingDadJoke: false,
      isFetchingChuckJoke:false,
      isFetchingProgrammingJoke:false,
      isFetchingManateeJoke: false,
      type:0,
      active: false,
      thumbsUp: false,
      heart:false,
      thumbsdown:false,
      angry:false,
      emojiType: 0,
      angryOpen: false,
      thumbsDownOpen:false,
      thumbsUpOpen:false,
      heartOpen:false
    };
    
    this.onTellDadJoke = this.onTellDadJoke.bind(this);
    this.onTellChuckJoke = this.onTellChuckJoke.bind(this);
    this.onTellProgrammingJoke = this.onTellProgrammingJoke.bind(this);
    this.onTellManateeJoke = this.onTellManateeJoke.bind(this);
    this.onTellThumbsUpEmoji = this.onTellThumbsUpEmoji.bind(this);
    this.onTellHeartEmoji = this.onTellHeartEmoji.bind(this);
    this.onTellThumbsDownEmoji = this.onTellThumbsDownEmoji.bind(this);
    this.onTellAngryEmoji = this.onTellAngryEmoji.bind(this);
  }

  componentDidMount() {
    this.fetchDadJoke();
  }

  fetchDadJoke() {
    this.setState({ isFetchingDadJoke: true, active: true });
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
        this.setState({
          joke: json.joke,
          isFetchingDadJoke: false,
          type:1
        });
      });
	  
    setTimeout(function() {
     this.setState({active: false})
    }.bind(this), 1000)
  }

  onTellDadJoke() {
    this.fetchDadJoke();
  };

  fetchChuckJoke() {
    this.setState({ isFetchingChuckJoke: true, active: true});
    fetch('https://api.chucknorris.io/jokes/random', {
	  method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
        this.setState({
          joke: json.value,
          isFetchingChuckJoke: false,
          type:2
        });
      });
      setTimeout(function() {
        this.setState({
          active: false
        })
      }.bind(this), 1000)
  }


  onTellChuckJoke() {
    this.fetchChuckJoke();
  };

  fetchProgrammingJoke() {
    this.setState({ isFetchingProgrammingJoke: true, active: true });
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
        this.setState({
          joke: json.joke,
          isFetchingProgrammingJoke: false,
          type:3
        });
      });
      setTimeout(function() {
        this.setState({
          active: false
        })
      }.bind(this), 1000)
  }


  onTellProgrammingJoke() {
    this.fetchProgrammingJoke();
  };

  fetchManateeJoke() {
  this.setState({ isFetchingManateeJoke: true, active: true });
  fetch('https://manatee-jokes.p.rapidapi.com/manatees/random', {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'X-RapidAPI-Key': 'fb68e4c436msh84a364a35c0b581p113af8jsn274d8d2e0b6e',
    'X-RapidAPI-Host': 'manatee-jokes.p.rapidapi.com'
    }
  })
  .then(response => response.json())
  .then(json => {
     this.setState({
      joke: json.setup.concat('\n', json.punchline),
      isFetchingManateeJoke: false,
       type: 4
    });
  });
  setTimeout(function() {
    this.setState({
      active: false
    })
  }.bind(this), 1000)
}


  onTellManateeJoke() {
    this.fetchManateeJoke();
  };

  onTellThumbsUpEmoji() {
    this.setState({
      thumbsup: true,
      emojiType: 1,
      thumbsUpOpen: !this.state.thumbsUpOpen,
      heartOpen:false,
      thumbsDownOpen:false,
      angryOpen:false

    });
      setTimeout(function() {
        this.setState({
          thumbsup: false
        })
      }.bind(this), 500)
  };

  onTellHeartEmoji() {
    this.setState({
      heart: true,
      emojiType: 2,
      heartOpen: !this.state.heartOpen,
      thumbsUpOpen: false,
      thumbsDownOpen: false,
      angryOpen: false
    });
    setTimeout(function() {
      this.setState({
        heart: false
      })
    }.bind(this), 500)
  };

  onTellThumbsDownEmoji() {
    this.setState({
      thumbsdown: true,
      emojiType:3,
      thumbsDownOpen: !this.state.thumbsDownOpen,
      thumbsUpOpen: false,
      heartOpen: false,
      angryOpen: false
    });
    setTimeout(function() {
      this.setState({
        thumbsdown: false
      })
    }.bind(this), 500)
  };

  onTellAngryEmoji() {
    this.setState({
      angry: true,
      emojiType:4,
      angryOpen: !this.state.angryOpen,
      thumbsUpOpen: false,
      heartOpen: false,
      thumbsDownOpen: false
    });
    setTimeout(function() {
      this.setState({
        angry: false
      })
    }.bind(this), 500)
  };
 
  render() {
  const angryClasses = this.state.angryOpen ? 'basket' : 'basket hide';
  const thumbsUpClasses = this.state.thumbsUpOpen ? 'basket' : 'basket hide';
  const thumbsDownclasses = this.state.thumbsDownOpen ? 'basket' : 'basket hide';
  const heartClasses = this.state.heartOpen ? 'basket' : 'basket hide';
    return (
      <div className="interactive-container">

          <button className={"dad-button "  + (this.state.active ? 'active' : '')} onClick={this.onTellDadJoke} disabled={this.state.isFetchingDadJoke}>Dad joke</button>
          <button className={"chuck-button " + (this.state.active ? 'active' : '')} onClick={this.onTellChuckJoke} disabled={this.state.isFetchingChuckJoke}>Chuck Joke</button>
          <button className={"programming-button "+ (this.state.active ? 'active' : '')} onClick={this.onTellProgrammingJoke} disabled={this.state.isFetchingProgrammingJoke}>Programming Joke</button>
          <button className={"manatee-button "+ (this.state.active ? 'active' : '')} onClick={this.onTellManateeJoke} disabled={this.state.isFetchingManateeJoke}>Manatee Joke</button>
          <button className = {"thumbs-up-image thumbsup " + (this.state.thumbsup ? 'active' : '')} onClick = {this.onTellThumbsUpEmoji}></button>
          <button className = {"heart-image heart " + (this.state.heart ? 'active' : '')} onClick = {this.onTellHeartEmoji}></button>
          <button className = {"thumbs-down-image thumbsdown " + (this.state.thumbsdown ? 'active' : '')} onClick = {this.onTellThumbsDownEmoji}></button>
          <button className = {"angry-image angry " + (this.state.angry ? 'active' : '')} onClick = {this.onTellAngryEmoji}></button>

        <div className="machine-container">
          <div className="machine-foreground">
            <img className="pipes" src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/pipes-fg.png" 
                  alt="pipe description"/>
        {
            {
              1: <p>{<img className="title bubble" src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/title.gif" alt="description"/>}</p>,
              2: < p > {
                  < span > < span className = "programming-title" > THE CHUCK < /span > <
                  span className = "programming-generator-title" > JOKE GENERATOR < /span ></span >
              }</p>,
              3: < p > {
                < span > < span className = "programming-title" > THE PROGRAMMING < /span > <
                span className = "programming-generator-title" > JOKE GENERATOR < /span ></span >
              } < /p>,
              4: < p > {
                < span > < span className = "programming-title" > THE MANATEE < /span > <
                span className = "programming-generator-title" > JOKE GENERATOR < /span ></span >
              } < /p>

            }[this.state.type]
          }

           {
             {
               1: < p > {<img className = {"hat bubble " + (this.state.active ? 'active' : '')}
                 src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/hat.png"
                 alt = "description" / >} < /p>,
               2: < p > {<img className = {"hat bubble man " + (this.state.active ? 'active' : '')}
                 src = {man} alt = "description" / >} < /p>,
               3: < p > {< img className = {"hat bubble laptop " + (this.state.active ? 'active' : '')}
                 src = {laptop} alt = "description" / >} < /p>,
               4: < p > {<img className = {"hat bubble manatee " + (this.state.active ? 'active' : '')}
                 src = {manatee} alt = "description" / >} < /p>
             }[this.state.type]
           }

           {
             {
               1: < p >{<img className={"tie bubble " + (this.state.active ? 'active' : '')} 
             src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/tie.png" alt="description"/> }< /p>,
               2: < p > {<img className = {"tie bubble yourself " + (this.state.active ? 'active' : '')}
                 src = {yourself} alt = "description" / >} < /p>,
               3: < p > {< img className = {"tie bubble python " + (this.state.active ? 'active' : '')}
                 src = {python} alt = "description" / >} < /p>,
               4: < p > {<img className = {"tie bubble griffin " + (this.state.active ? 'active' : '')}
                 src = {griffin} alt = "description" / >} < /p>
             }[this.state.type]
           }

           {
             {
               1: < p >{<img className={"hammer bubble "  + (this.state.active ? 'active' : '')} 
             src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/hammer.png" alt="description"/>}< /p>,
               2: < p > {<img className = {"hammer bubble name " + (this.state.active ? 'active' : '')}
                 src = {name} alt = "description" / >} < /p>,
               3: < p > {< img className = {"hammer bubble java " + (this.state.active ? 'active' : '')}
                 src = {java} alt = "description" / >} < /p>,
               4: < p > {<img className = {"hammer bubble realManatee " + (this.state.active ? 'active' : '')}
                 src = {realManatee} alt = "description" / >} < /p>
             }[this.state.type]
           }

           {
             {
               1: < p >{<img className={"mustache bubble " + (this.state.active ? 'active' : '')} 
             src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/mustache.png" alt="description"/>}< /p>,
               2: < p > {<img className = {"mustache bubble chuckJoke " + (this.state.active ? 'active' : '')}
                 src = {chuck} alt = "description" / >} < /p>,
               3: < p > {< img className = {"mustache bubble c " + (this.state.active ? 'active' : '')}
                 src = {c} alt = "description" / >} < /p>,
               4: < p > {<img className = {"mustache bubble manatea " + (this.state.active ? 'active' : '')}
                 src = {manatea} alt = "description" / >} < /p>
             }[this.state.type]
           }

           {
             {
               1: < p >{<img className={"whale bubble "  + (this.state.active ? 'active' : '')} 
               src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/fish.png" alt="description"/>}< /p>,
               2: < p > {<img className = {"whale bubble cartoon " + (this.state.active ? 'active' : '')}
                 src = {cartoon} alt = "description" / >} < /p>,
               3: < p > {< img className = {"whale bubble html " + (this.state.active ? 'active' : '')}
                 src = {html} alt = "description" / >} < /p>,
               4: < p > {<img className = {"whale bubble familyGuy " + (this.state.active ? 'active' : '')}
                 src = {familyGuy} alt = "description" / >} < /p>
             }[this.state.type]
           }

           {
             {
               1: < p >{<img className={"bubble dadJoke "  + (this.state.active ? 'active' : '')} 
               src={dadJoke} alt="description"/>}< /p>,
               2: < p > {<img className = {"bubble realChuck " + (this.state.active ? 'active' : '')}
                 src = {realChuck} alt = "description" / >} < /p>,
               3: < p > {< img className = {"bubble css " + (this.state.active ? 'active' : '')}
                 src = {css} alt = "description" / >} < /p>,
               4: < p > {<img className = {"bubble cartoonManatee " + (this.state.active ? 'active' : '')}
                 src = {cartoonManatee} alt = "description" / >} < /p>
             }[this.state.type]
           }

            <img className={"wheel bubble " + (this.state.active ? 'active' : '')} src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/steeringwheel.png" alt="description"/>
            <img className={"lights bubble " + (this.state.active ? 'active' : '')} src="https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/lights.gif" alt="description"/>
          </div>
        </div>
        <div className="machine-output-area">
          {
            {
              1: <p>{this.state.isFetchingDadJoke ? 'Loading joke...' : this.state.joke}</p>,
              2: <p>{this.state.isFetchingChuckJoke ? 'Loading joke...' : this.state.joke}</p>,
              3: <p>{this.state.isFetchingProgrammingJoke ? 'Loading joke...' : this.state.joke}</p>,
              4: <p>{this.state.isFetchingManateeJoke ? 'Loading joke...' : this.state.joke}</p>

            }[this.state.type]
          }
        </div>
        < div >
            {
              {
                1: < div className = {"emojiReact emojiReactThumbsUp basket " + thumbsUpClasses} > < /div>,
                2: < div className = {"emojiReact emojiReactHeart basket " + heartClasses}> < /div>,
                3: < div className = {"emojiReact emojiReactThumbsDown basket " + thumbsDownclasses}> < /div>,
                4: < div className = {"emojiReact emojiReactAngry basket " + angryClasses}> < /div>

              } [this.state.emojiType]
            }
      </div>
      </div>
      
    );
  }
}

export default App;