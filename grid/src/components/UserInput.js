import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';

class UserInput extends Component{
  constructor(){
  super();
  this.state = {
      rowData:[
        {
               id: 1,
               Name: 'Triveni',
               LastName:'Kapse',
               Age: 23,
               Class: 'FYBCS',
               College: 'NWC',
               Marks: 80,
               per: 78
        },
        {
              id: 2,
              Name: '<font color="red">Komal</font>',
              LastName:'Kale',
              Age: 20,
              Class: 'SYBCS',
              College: 'Modern',
              Marks: 85,
              per: 78
        },
        {
              id: 3,
              Name: 'Charu',
              LastName:'Surve',
              Age: 24,
              Class: 'TYBCS',
              College: 'Indira',
              Marks: 90,
              per: 78
        },
        {
              id: 4,
              Name: 'Kanchan',
              LastName:'Nair',
              Age: 21,
              Class: 'MCA',
              College: 'FC',
              Marks: 95,
              per: 78
        },
        {
              id: 5,
              Name: 'Triveni',
              LastName:'Dhatrak',
              Age: 21,
              Class: 'MCA',
              College: 'FC',
              Marks: 95,
              per: 79
        },
        {
               id: 6,
               Name: 'Akshata',
               LastName:'Patil',
               Age: 23,
               Class: 'FYBCS',
               College: 'NWC',
               Marks: 80,
               per: 74
        }
      ],
      tableHeader:
        [
          {
            headerName:'StudentId',
            enableSort:true,
            sortType:"Number",
            propertyToSort: 'id'
          },
          {
            headerName:[
            {
              headerName:'First Name',
              enableSort:false,
              sortType:"Number",
              propertyToSort: 'Id'
            },
            {
              headerName:'Last Name',
              enableSort:false,
              sortType:"String",
              propertyToSort: 'Name'
            }
          ],
          commonHeader:'Full Name',
          sortType:"Array"
        },
          {
            headerName:'Age',
            enableSort:true,
            sortType:"Number",
            propertyToSort: 'Age'
          },
          {
            headerName:'Class',
            enableSort:true,
            sortType:"String",
            propertyToSort: 'Class'
          },
          {
            headerName:'College',
            enableSort:false,
            sortType:"String",
            propertyToSort: 'College'
          },
          {
            headerName:'Marks',
            enableSort:true,
            sortType:"Number",
            propertyToSort: 'Marks'
          },
          {
            headerName:'Percentage',
            enableSort:true,
            sortType:"Number",
            propertyToSort: 'per'
          }
        ],
      searchObject:{
        buttonText: 'Go',
      },
      searchRequired:true,
      accordionRequired: true ,
      filterText:'',
      isUpdated:false,
      accordionTitle: 'Student Information',



    }
    this.updateState = this.updateState.bind(this)
  }

  updateState(fromRow, toRow) {
    var data = this.state.rowData
    const temp = data[toRow]
    data[toRow] = data[fromRow]
    data[fromRow] = temp
    this.setState({
       rowData: data
     })
   }


render(){
    return(
      <div>
      
        <Grid tableHeader= {this.state.tableHeader}
              searchRequired={this.state.searchRequired}
              searchObject={this.state.searchObject}
              accordionRequired={this.state.accordionRequired}
              rowData={this.state.rowData}
              isUpdated={this.state.isUpdated}
              accordionTitle={this.state.accordionTitle}
              updateState={this.updateState}
              />
      </div>
    );
  }
}

UserInput.defaultProps = {
  tableHeader  : [],
  rowData: [],

}
UserInput.propTypes= {
    tableHeader: PropTypes.array,
    rowData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      Name: PropTypes.string,
      Age: PropTypes.number,
      Class: PropTypes.string,
      College: PropTypes.string,
      Marks: PropTypes.number
  }))
}        
export default UserInput;
