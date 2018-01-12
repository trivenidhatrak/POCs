import React from 'react'

class TableTD extends React.Component {
  render() {
      return(
        <td dangerouslySetInnerHTML={{__html: this.props.row}}/>
      )
     }

}
export default TableTD;
