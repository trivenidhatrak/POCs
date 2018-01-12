import React from 'react'
import TableRow from './TableRow'
import Header from './Header'

class NoAccordionTable extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentPage: 1,
      rowsPerPage: 3
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      handleClickLeft(event) {
            this.setState({
              currentPage: Number(event.target.id-1)
            });
          }
  renderHeader(){
    return this.props.tableHeader.map((header,i) =>
      <Header key={i} headerTitle={header} tempData={this.props.tempData}
          sortSet={this.props.sortSet}/>)
  }

  renderRows(){
    const { currentPage, rowsPerPage } = this.state;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = this.props.tempData.slice(indexOfFirstRow, indexOfLastRow);
    const renderRows = currentRows.map((row, index) => {
      var i= index;
      if(currentPage !== 1){
        index= i + rowsPerPage
      }
      return (
        <TableRow
          id={`id-${index}`}
          index={index}
          key={index}
          row={row}
          onChange={this.props.onChange}
          onDragStart={this.props.dragStart}
          onDragEnd={this.props.dragEnd}
          onDragOver={this.props.dragOver}
        />
      )
    })
      return renderRows;
    }


  renderPageNumbers(){
    let dataPerPage=Math.ceil(this.props.tempData.length / this.state.rowsPerPage);

    const pageNumbers=[];
    for(var i=1;i<=dataPerPage;i++){
      pageNumbers.push(i);
    }
    const renderPageNumbers=pageNumbers.map(number =>{
      return(
        <button
          key={number}
          id={number}
          onClick={this.handleClick.bind(this)}>
          {number}
        </button>
      )
    });
    return renderPageNumbers;
  }

   render() {
    return(
      <div>
        <table className="table table-bordered">
          <thead>
            <tr  rowSpan="2">
              {this.renderHeader()}
              <th className="tableHeaders">Edit</th>
            </tr>
          </thead>
            {this.renderRows()}
        </table>
        <div>
            {this.renderPageNumbers()}
        </div>
      </div>
    );
  }
}
export default NoAccordionTable;
