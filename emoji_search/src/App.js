import React, { Component } from 'react';
import Emoji_list from './components/Emoji_list.js' ;
import filterEmoji from './components/Filter_emoji.js' ;
import Header from './components/Header';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 50),
    };
  }

  searchEmoji =(event)=> {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 50),
    });
  }
  render() {
   
    return (
      <div className="App">
      <Header />
      <center>
       <Emoji_list textChange={this.searchEmoji} emojiData={this.state.filteredEmoji}/>
       </center>  </div>
    );
  }
}

export default App;
