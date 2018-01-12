import React, { Component } from 'react';

class Emoji_img extends Component
{
    render()
    {
       
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <tr id={this.props.key}>
                <td className="emoji-img">
                    <img alt={this.props.title} src={src}/>
                </td>
                <td id={this.props.key}>
                    {this.props.title}
                </td>
            </tr>
        )
    }
}

export default Emoji_img

