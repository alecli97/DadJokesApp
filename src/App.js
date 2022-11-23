import React from "react";
import "./styles.css";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      dadJoke: null,
      isFetchingDadJoke: false,
      isFetchingChuckJoke: false,
      chuckJoke: null,
      type: 0
    };
    this.onTellDadJoke = this.onTellDadJoke.bind(this);
    this.onTellChuckJoke = this.onTellChuckJoke.bind(this);
  }

  componentDidMount() {
    this.fetchDadJoke();
    this.fetchChuckJoke();
  }

  fetchDadJoke() {
    this.setState({
      isFetchingDadJoke: true
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
          dadJoke: json.joke,
          isFetchingDadJoke: false,
          type: 1
        });
      });
  }


  onTellDadJoke() {
    this.fetchDadJoke();
  };

  fetchChuckJoke() {
    this.setState({
      isFetchingChuckJoke: true
    });
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single/', {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({
          chuckJoke: json.joke,
          isFetchingChuckJoke: false,
          type: 2
        });
      });
  }


  onTellChuckJoke() {
    this.fetchChuckJoke();
  };

  render() {

    return ( <
      div className = "interactive-container" >
      <
      button className = "dad-button"
      onClick = {
        this.onTellDadJoke
      }
      disabled = {
        this.state.isFetchingDadJoke
      } > Tell me a joke < /button> <
      button className = "chuck-button"
      onClick = {
        this.onTellChuckJoke
      }
      disabled = {
        this.state.isFetchingChuckJoke
      } > Chuck Joke < /button>

      <
      div className = "machine-container" >
      <
      div className = "machine-foreground" >
      <
      img className = "pipes"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/pipes-fg.png"
      alt = "pipe description" / >

      <
      img className = "ball"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/ball.png"
      alt = "description" / >
      <
      img className = "ball"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/ball.png"
      alt = "description1" / >
      <
      img className = "ball"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/ball.png"
      alt = "description" / >

      <
      img className = "title bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/title.gif"
      alt = "description" / >

      <
      img className = "hat bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/hat.png"
      alt = "description" / >
      <
      img className = "tie bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/tie.png"
      alt = "description" / >
      <
      img className = "wheel bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/steeringwheel.png"
      alt = "description" / >
      <
      img className = "hammer bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/hammer.png"
      alt = "description" / >
      <
      img className = "mustache bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/mustache.png"
      alt = "description" / >
      <
      img className = "lights bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/lights.gif"
      alt = "description" / >
      <
      img className = "whale bubble"
      src = "https://cdn.cnn.com/cnn/interactive/2019/06/us/dad-joke-generator-trnd/media/fish.png"
      alt = "description" / >
      <
      /div> <
      /div> <
      div className = "machine-output-area" > {
        {
          1: < p > {
            this.state.isFetchingDadJoke ? 'Loading joke...' : 'dadJoke'
          } < /p>,
          2: < p > {
            this.state.isFetchingChuckJoke ? 'Loading joke...' : this.state.chuckJoke
          } < /p>
        } [this.state.type]
      } <
      /div> <
      /div>

    );
  }
}

export default App;