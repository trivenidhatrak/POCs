import React from 'react'
import AccordionTable from './AccordionTable'
import NoAccordionTable from './NoAccordionTable'

class Table extends React.Component {
 
  render() {
    return(
      <div>
        {this.props.accordionRequired ?
          <AccordionTable tableHeader={this.props.tableHeader}
                      tempData={this.props.tempData}
                      accordionRequired={this.props.accordionRequired}
                      onChange={this.props.onChange.bind(this)}
                      sortSet={this.props.sortSet.bind(this)}
                      accordionTitle={this.props.accordionTitle}
                      dragStart={this.props.dragStart}
                      dragEnd={this.props.dragEnd}
                      dragOver={this.props.dragOver}
                      updateState={this.props.updateState}
                    />
        :
        <NoAccordionTable tableHeader={this.props.tableHeader}
                          tempData={this.props.tempData}
                          onChange={this.props.onChange}
                          sortSet={this.props.sortSet}
                          dragStart={this.props.dragStart}
                          dragEnd={this.props.dragEnd}
                          dragOver={this.props.dragOver}
                          updateState={this.props.updateState}/>
        }

      </div>
    );
  }
}
export default Table;
