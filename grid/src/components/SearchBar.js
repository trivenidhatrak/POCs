import React from 'react'

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      filterText: ''
    }
    this.handleSearch=this.handleSearch.bind(this)
    this.onChange=this.onChange.bind(this)
  }

  onChange(event){
    this.setState({"filterText":event.target.value})
  }

  handleSearch(){
    let result = [];
    var filterText=this.state.filterText;
    if(filterText === "") {
      this.props.updatedRowData(this.props.rowData);
    }
    else {
      let arr=Object.keys(this.props.tempData[0]);
      console.log(typeof this.props.tempData[0].id);
      arr.map((val,key)=>{
         let property= val;
         this.props.rowData.map((row,key) =>
               {
                if( typeof property === 'number'){
                  if (row.property === this.state.filterText){
                    result.push(row);
                  }
                }
                else if(typeof property === 'string'){
                  if (row[''+property] === this.state.filterText){
                    result.push(row);
                  }
                }

           });
      })
       this.props.updatedRowData(result);
    }
  }
  render() {
    return (
      <div className="navbar-form navbar-left">
          <input type="text" className="form-control" placeholder="Search..." value={this.state.filterText} onChange={this.onChange.bind(this)}/>
                <button className="btn btn-default" onClick={this.handleSearch.bind(this)}>
                  {this.props.searchObject.buttonText}
                </button>
        </div>

    );
  }
}
export default SearchBar;
