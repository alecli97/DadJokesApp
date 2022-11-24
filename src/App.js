import React from "react";
import "./styles.css";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      joke: null,
      isFetchingDadJoke: false,
      isFetchingChuckJoke: false,
      isFetchingProgrammingJoke: false,
      isFetchingManateeJoke: false,
      type: 0,
      active: false,
      thumbsUp: false,
      heart: false,
      thumbsdown: false,
      angry: false
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
    this.setState({
      isFetchingDadJoke: true,
      active: true
    });
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
          type: 1
        });
      });

    setTimeout(function() {
      this.setState({
        active: false
      })
    }.bind(this), 1000)
  }

  onTellDadJoke() {
    this.fetchDadJoke();
  };

  fetchChuckJoke() {
    this.setState({
      isFetchingChuckJoke: true
    });
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
          type: 2
        });
      });
  }


  onTellChuckJoke() {
    this.fetchChuckJoke();
  };

  fetchProgrammingJoke() {
    this.setState({
      isFetchingProgrammingJoke: true
    });
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
          type: 3
        });
      });
  }


  onTellProgrammingJoke() {
    this.fetchProgrammingJoke();
  };

  fetchManateeJoke() {
    this.setState({
      isFetchingManateeJoke: true
    });
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
  }


  onTellManateeJoke() {
    this.fetchManateeJoke();
  };

  onTellThumbsUpEmoji() {
    this.setState({
      thumbsup: true
    });
    setTimeout(function() {
      this.setState({
        thumbsup: false
      })
    }.bind(this), 500)
  };

  onTellHeartEmoji() {
    this.setState({
      heart: true
    });
    setTimeout(function() {
      this.setState({
        heart: false
      })
    }.bind(this), 500)
  };

  onTellThumbsDownEmoji() {
    this.setState({
      thumbsdown: true
    });
    setTimeout(function() {
      this.setState({
        thumbsdown: false
      })
    }.bind(this), 500)
  };

  onTellAngryEmoji() {
    this.setState({
      angry: true
    });
    setTimeout(function() {
      this.setState({
        angry: false
      })
    }.bind(this), 500)
  };

  render() {

    return ( <
      div className = "interactive-container" >

      <
      button className = {
        "dad-button " + (this.state.active ? 'active' : '')
      }
      onClick = {
        this.onTellDadJoke
      }
      disabled = {
        this.state.isFetchingDadJoke
      } > Dad joke < /button> <
      button className = {
        "chuck-button " + (this.state.active ? 'active' : '')
      }
      onClick = {
        this.onTellChuckJoke
      }
      disabled = {
        this.state.isFetchingChuckJoke
      } > Chuck Joke < /button> <
      button className = {
        "programming-button " + (this.state.active ? 'active' : '')
      }
      onClick = {
        this.onTellProgrammingJoke
      }
      disabled = {
        this.state.isFetchingProgrammingJoke
      } > Programming Joke < /button> <
      button className = {
        "manatee-button " + (this.state.active ? 'active' : '')
      }
      onClick = {
        this.onTellManateeJoke
      }
      disabled = {
        this.state.isFetchingManateeJoke
      } > Manatee Joke < /button> <
      button className = {
        "thumbs-up-image thumbsup" + (this.state.thumbsup ? 'active' : '')
      }
      onClick = {
        this.onTellThumbsUpEmoji
      } > < /button> <
      button className = {
        "heart-image heart" + (this.state.heart ? 'active' : '')
      }
      onClick = {
        this.onTellHeartEmoji
      } > < /button> <
      button className = {
        "thumbs-down-image thumbsdown" + (this.state.thumbsdown ? 'active' : '')
      }
      onClick = {
        this.onTellThumbsDownEmoji
      } > < /button> <
      button className = {
        "angry-image angry" + (this.state.angry ? 'active' : '')
      }
      onClick = {
        this.onTellAngryEmoji
      } > < /button>

      <
      div className = "machine-container" >
      <
      div className = "machine-foreground" >
      <
      img className = "pipes"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/pipes-fg.png"
      alt = "pipe description" / > {
        {
          1: < p > {
            this.state.isFetchingDadJoke ? 'Loading joke...' : < img className = "title bubble"
            src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/title.gif"
            alt = "description" / >
          } < /p>,
          2: < p > {
            this.state.isFetchingChuckJoke ? 'Loading joke...' : < span > < span className = "programming-title" > THE CHUCK < /span > <
              span className = "programming-generator-title" > JOKE GENERATOR < /span ></span >
          } < /p>,
          3: < p > {
            this.state.isFetchingProgrammingJoke ? 'Loading joke...' : < span > < span className = "programming-title" > THE PROGRAMMING < /span > <
            span className = "programming-generator-title" > JOKE GENERATOR < /span ></span >
          } < /p>,
          4: < p > {
            this.state.isFetchingManateeJoke ? 'Loading joke...' :
              <
              span > < span className = "programming-title" > THE MANATEE < /span > <
            span className = "programming-generator-title" > JOKE GENERATOR < /span ></span >
          } < /p>

        } [this.state.type]
      }

      <
      img className = {
        "hat bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/hat.png"
      alt = "description" / >
      <
      img className = {
        "tie bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/tie.png"
      alt = "description" / >
      <
      img className = {
        "wheel bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/steeringwheel.png"
      alt = "description" / >
      <
      img className = {
        "hammer bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/hammer.png"
      alt = "description" / >
      <
      img className = {
        "mustache bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/mustache.png"
      alt = "description" / >
      <
      img className = {
        "lights bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/lights.gif"
      alt = "description" / >
      <
      img className = {
        "whale bubble " + (this.state.active ? 'active' : '')
      }
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/fish.png"
      alt = "description" / >
      <
      /div> <
      /div> <
      div className = "machine-output-area" > {
        {
          1: < p > {
            this.state.isFetchingDadJoke ? 'Loading joke...' : this.state.joke
          } < /p>,
          2: < p > {
            this.state.isFetchingChuckJoke ? 'Loading joke...' : this.state.joke
          } < /p>,
          3: < p > {
            this.state.isFetchingProgrammingJoke ? 'Loading joke...' : this.state.joke
          } < /p>,
          4: < p > {
            this.state.isFetchingManateeJoke ? 'Loading joke...' : this.state.joke
          } < /p>

        } [this.state.type]
      } <
      /div> <
      /div>

    );
  }
}

export default App;