import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Emoji_img extends Component
{
    render()
    {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <tr>
            <td>
            <title>{this.props.title}</title>
            </td>
            <td>
            <img alt={this.props.title}
            src={src}/>
            </td>
            </tr>
        )
    }
}
Emoji_img.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
  };
export default Emoji_img

