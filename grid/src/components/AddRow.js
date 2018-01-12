import React from 'react'

class AddRow extends React.Component{
  constructor(props){
    super(props)
    this.addRow = this.addRow.bind(this)
  }
  addRow() {
    var obj = {};
    var size = Object.keys(this.props.tempData[0]).length;
    var arr=Object.keys(this.props.tempData[0]);
    for(var i=0;i< size;i++){
      var key = arr[i]
      obj[key] = ''
    }

    this.props.tempData.push(obj);
    this.props.updateTable(this.props.tempData);
  }
  render(){
    return(
      <div>
        <button className="btn btn-default navbar-btn pull-right" onClick={this.addRow.bind(this)}> Add Row</button>
      </div>
    )
  }
}
export default AddRow
