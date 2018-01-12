import React from 'react'
import TableRow from './TableRow'
import Header from './Header'

class AccordionTable extends React.Component {
  constructor(props){
    super(props)
    this.state={
      accordionFlag: true,
      currentPage: 1,
      rowsPerPage: 3
    }

    this.renderRows = this.renderRows.bind(this)
    this.onShowTable = this.onShowTable.bind(this)
    this.onHideTable = this.onHideTable.bind(this)
    this.handleClick = this.handleClick.bind(this)
}

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  onShowTable(){
    this.setState({accordionFlag:false})
  }

  onHideTable(){
    this.setState({accordionFlag:true})
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
      if(currentPage === 2){
        index= i + rowsPerPage
      }
      else if(currentPage !==1 && currentPage !==2){
        index=i +( rowsPerPage *( currentPage -1))
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
          tableHeader={this.props.tableHeader}
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
    })
    return renderPageNumbers;
  }



  render() {
    return(
      <div>

        {this.state.accordionFlag ?
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.accordionTitle}
              <button data-toggle="collapse" data-target="#demo" className="glyphicon glyphicon-chevron-down pull-right" onClick={this.onShowTable.bind(this)}/></h3>
            </div>
          </div>
          :
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.accordionTitle}
              <button data-toggle="collapse" data-target="#demo" className="glyphicon glyphicon-chevron-up pull-right" onClick={this.onHideTable.bind(this)}/></h3>
            </div>
          </div>
        }

        <div id="demo" className="collapse">
          <table className="table table-bordered">
            <thead>
              <tr>
                {this.renderHeader()}
                <th className="tableHeaders">Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
          <div>
              {this.renderPageNumbers()}
          </div>
        </div>
      </div>
    );
  }
}
export default AccordionTable;
