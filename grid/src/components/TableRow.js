import React from 'react'
import TableTD from './TableTD'
import TableInputTD from './TableInputTD'

class TableRow extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isEdit:false
    }
    this.renderRow = this.renderRow.bind(this)
    this.renderTDs = this.renderTDs.bind(this)
    this.onSaveClick = this.onSaveClick.bind(this)
    this.editRow = this.editRow.bind(this)
  }

  renderTDs(){
    var rowObj=this.props.row;
    var arr = Object.keys(rowObj).map(function (key) { return rowObj[key]; });
    const rendertd = arr.map((row, index) => {
      return <TableTD key={index} row={row} />
    })
    return rendertd;
  }
  renderInputTDs(i){
    var rowObj=this.props.row;
    var arr = Object.keys(rowObj).map(function (key) { return rowObj[key]; });
    const rendertd = arr.map((row, index) => {
      return <TableInputTD key={index} row={row} rowId={i} arr={arr} index={index} onChange={this.props.onChange.bind(this)}/>
    })
    return rendertd;
  }

  renderRow(){
    if(this.state.isEdit){
      return(
          <tr
            data-id={this.props.index}
            draggable="true"
            onDragEnd={this.props.onDragEnd}
            onDragStart={this.props.onDragStart}
            id={this.props.id}
            onDragOver={this.props.onDragOver}>

            {this.renderInputTDs(this.props.index)}

              {this.actions(this.props.row)}
          </tr>
      )
    } else {
      return(
          <tr
            data-id={this.props.index}
            draggable="true"
            onDragEnd={this.props.onDragEnd}
            onDragStart={this.props.onDragStart}
            id={this.props.id}
            onDragOver={this.props.onDragOver}
            >

            {this.renderTDs()}
              {this.actions(this.props.index)}

          </tr>
      )
    }
  }

  onSaveClick(row){
    this.setState({isEdit: false})
    this.actions(this.props.row)
   }

  actions(row){
    if(this.state.isEdit){
      return(
        <td>
          <button onClick={this.onSaveClick.bind(this,row)} className="glyphicon glyphicon-saved" />
        </td>
      );
    }
    return(
      <td>
        <button onClick={this.editRow.bind(this,row)} className="glyphicon glyphicon-edit"/>
      </td>
     );
  }
  editRow(row){
    this.setState({isEdit: true});
  }
  render() {
    return this.renderRow()

  }
}
export default TableRow;
