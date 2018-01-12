import React, {Component} from 'react';
import Emoji_img from './Emoji_img.js';

class Emoji_list extends Component{
    constructor() {
        super();
        this.updateState = this.updateState.bind(this);
    }
   
    updateState(e) {
        this.props.textChange(e);
    }
    render()
    {
        return (
            <div>
            <div className="search-div">
            <input type="text"  onChange={this.updateState} />
            </div>
           
            <table>
                {  this.props.emojiData.map((emojiData) => { 
                    return(  <Emoji_img key={emojiData.title} symbol={emojiData.symbol}
                    title={emojiData.title} />)
                })}
            </table>
            </div>
        )
    }
}

  export default Emoji_list
