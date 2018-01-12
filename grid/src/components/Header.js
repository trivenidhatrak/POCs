import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      sortDirection: 'ASC'
    }
    this.sortDataAsc=this.sortDataAsc.bind(this)
    this.sortDataDesc=this.sortDataDesc.bind(this)
  }
  sortDataAsc(){
      let sortData=this.props.tempData;
      let l=sortData.length;
      let temp=null;
      if(this.props.headerTitle.sortType === 'Number'){
        sortData.map((data,index1) =>{
          sortData.map((data2,index2) =>{
            if(sortData[index1][''+this.props.headerTitle.propertyToSort] > sortData[index2][''+this.props.headerTitle.propertyToSort])
            {
                       temp = sortData[index1];
                        sortData[index1] = sortData[index2];
                       sortData[index2] = temp;
                    }
          })
        })
        this.props.sortSet(sortData);
        this.setState({'sortDirection' : 'DESC'})
      }
      else{
        sortData.map((data,index1) =>{
          sortData.map((data2,index2) =>{
            if(sortData[index1][''+this.props.headerTitle.propertyToSort].toLowerCase() > sortData[index2][''+this.props.headerTitle.propertyToSort].toLowerCase())
            {
                       temp = sortData[index1];
                        sortData[index1] = sortData[index2];
                       sortData[index2] = temp;
                    }
          })
        })

        this.props.sortSet(sortData);
        this.setState({'sortDirection' : 'DESC'})
      }
  }

  sortDataDesc(){
      let sortData=this.props.tempData;
      let l=sortData.length;
      let temp=null;
      if(this.props.headerTitle.sortType === 'Number'){
        sortData.map((data,index1) =>{
          sortData.map((data2,index2) =>{
            if(sortData[index1][''+this.props.headerTitle.propertyToSort] < sortData[index2][''+this.props.headerTitle.propertyToSort])
            {
                       temp = sortData[index1];
                        sortData[index1] = sortData[index2];
                       sortData[index2] = temp;
                    }
          })
        })
        this.props.sortSet(sortData);
        this.setState({'sortDirection' : 'ASC'})
      }
      else{
        sortData.map((data,index1) =>{
          sortData.map((data2,index2) =>{
            if(sortData[index1][''+this.props.headerTitle.propertyToSort].toLowerCase() < sortData[index2][''+this.props.headerTitle.propertyToSort].toLowerCase())
            {
                       temp = sortData[index1];
                        sortData[index1] = sortData[index2];
                       sortData[index2] = temp;
                    }
          })
        })

        this.props.sortSet(sortData);
        this.setState({'sortDirection' : 'ASC'})
      }
  }

   render() {
     if(this.props.headerTitle.sortType === 'Array'){
       return(
         <th colSpan="2" className="tableHeaders" style={{textAlign:'center'}}>{this.props.headerTitle.commonHeader}
         <tr>{this.props.headerTitle.headerName.map((header,i) =>
            <th className="tableHeaders" key={i}>{header.headerName}</th> )}
         </tr>
         </th>
       );
     }
      return(
        <th className="tableHeaders">
          {this.props.headerTitle.headerName}
          {this.props.headerTitle.enableSort ?
            <div className="btnGlyphicon">
              {this.state.sortDirection === 'ASC' ?
              <button onClick={this.sortDataAsc.bind(this)} className="glyphicon glyphicon-triangle-top pull-right"/>
              :
              <button onClick={this.sortDataDesc.bind(this)} className="glyphicon glyphicon-triangle-bottom pull-right"/>
              }
            </div>
          :
            null
          }
        </th>
      );
   }
}

export default Header;
