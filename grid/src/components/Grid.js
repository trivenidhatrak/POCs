import React from 'react';
import SearchBar from './SearchBar';
import Table from './Table';
import AddRow from './AddRow';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempData: this.props.rowData
    }
    this.dragStart = this.dragStart.bind(this)
    this.dragEnd = this.dragEnd.bind(this)
    this.dragOver = this.dragOver.bind(this)
    this.updatedRowData = this.updatedRowData.bind(this)
    this.updateTable = this.updateTable.bind(this)
    this.onChange=this.onChange.bind(this)
    this.sortSet = this.sortSet.bind(this)
  }

  onChange(index,rowId,event){
    const tempData = this.state.tempData;
    const arr=Object.keys(this.state.tempData[0]);
    const property = '';
    arr.map((val,key)=>{
      if(key===index){
        this.property= val;
      }
    })
    
     switch(this.property) {
      case `${this.property}` : tempData[rowId][''+this.property] = event.target.value;
        break;
        default :

    }
    this.setState({
      tempData: tempData
    });
  }

  dragOver(e) {
    e.preventDefault()
    const placeholder = document.getElementById(e.currentTarget.id)
    if(e.currentTarget.id === placeholder) return
    this.over = e.currentTarget
    e.currentTarget.parentNode.insertBefore(placeholder, e.currentTarget)
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  dragEnd(e) {
    const placeholder = document.getElementById(e.target.id)
    const fromRow = this.dragged.dataset.id
    const toRow = this.over.dataset.id
    this.props.updateState(fromRow, toRow)
  }

  render() {
    return (
      <div >
        <div className="mainSection">
        <div>
        <SearchBar searchObject={this.props.searchObject}
                    rowData={this.props.rowData}
                    tempData={this.state.tempData}
                    updatedRowData={this.updatedRowData.bind(this)}/>
        </div>
        <div>
        <AddRow tempData={this.state.tempData}
                tableHeader={this.props.tableHeader}
                updateTable={this.updateTable.bind(this)}/>
        </div>
        <div className="tableContent">
        <Table  tableHeader={this.props.tableHeader}
                tempData={this.state.tempData}
                accordionRequired={this.props.accordionRequired}
                onChange={this.onChange.bind(this)}
                              sortSet={this.sortSet.bind(this)}
                accordionTitle={this.props.accordionTitle}
                dragStart={this.dragStart}
                dragEnd={this.dragEnd}
                dragOver={this.dragOver}
                updateState={this.props.updateState}/>
        </div>
        </div>
      </div>
      );
   }

   updateTable(row){
      this.setState({'tempData': row});
    }
   sortSet(rows){
     this.setState({'tempData': rows});
   }
   updatedRowData(tempData){
     this.setState({'tempData': tempData});
   }
}

export default Grid;
