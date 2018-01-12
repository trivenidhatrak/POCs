import React from 'react'

class TableInputTD extends React.Component {
  render() {
      return(
        <td><input type="text" value={this.props.row} name={this.props.index}
         onChange={this.props.onChange.bind(this,this.props.index,this.props.rowId)}/></td>
      )
     }

}
export default TableInputTD;
