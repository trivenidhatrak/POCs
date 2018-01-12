import React, {Component} from 'react';
import Compare_product from './Compare_product.js';

class Product extends Component
{
    
  constructor(props){ 
    super(props);
    this.state = {
        productsArr : [],
        productsComArr :[],
        product_list : [{
            "id": "1",
            "name": "Chair",
            "image": "https://devitems.com/preview/furnish/img/product/1.jpg",
            "price": "$39",
            "colors": ["red", "green", "blue"],
            "condition": "New",
            "description": "Black chair"
        },
        {
            "id": "2",
            "name": "Lamp",
            "image": "https://devitems.com/preview/furnish/img/product/2.jpg",
            "price": "$319",
            "colors": ["green", "blue"],
            "condition": "Used",
            "description": "Amazing lamp"
          },
          {
            "id": "3",
            "name": "Statue",
            "image": "https://devitems.com/preview/furnish/img/product/3.jpg",
            "price": "$239",
            "colors": ["red"],
            "condition": "Used",
            "description": "Used Statue"
          },
          {
            "id": "4",
            "name": "Seat",
            "image": "https://devitems.com/preview/furnish/img/product/4.jpg",
            "price": "$239",
            "colors": ["blue"],
            "condition": "New",
            "description": "Large Seat"
          }
        ]
    }
    this.updateProductState=this.updateProductState.bind(this);
  }


  updateProductState(e)
  { 
      var found =  this.state.productsArr.some(function (el) {
        return el === e.target.id;
      });
      if(e.target.textContent === 'Compare')
      {
        e.target.textContent = 'Remove';
        e.target.parentElement.className = "product compare";
        if (!found) 
        { 
            this.state.product_list.map((prodRow)=>{
            if(prodRow['id']===e.target.id){
              this.state.productsArr.push(prodRow)
              this.setState({
                productsArr:  this.state.productsArr
              })
            }
          })
        }
      }
      else
      {
        let proArray = this.state.productsArr;
        let proIndex = proArray.indexOf(e.target.id)
        proArray.splice(proIndex, 1);
        this.setState({productsArr: proArray });
        e.target.textContent = 'Compare';
        e.target.parentElement.className = "product ";
      }
  }

  render()
  {
      const comProductList =  (this.state.productsArr.length >=2) ? <Compare_product  productsArr={this.state.productsArr}/> :'';
      return(
          <div>
            <div class="container mt-4">
              <div class="Home mt-5">
                <div> 
                  <div class="row mt-3">
                    { 
                      this.state.product_list.map((products,key)=>{
                        return (
                          <div className="col-sm-6 col-md-3" >
                              <div className="product " >
                                <img src={`${products.image}`} alt="Chair"  />
                                <div className="image_overlay"></div>
                                <div className="view_details"  id={products.id} onClick={this.updateProductState} >Compare</div>
                                <div className="stats">
                                    <div className="stats-container">
                                      <span className="product_price">{products.price}</span><span className="product_name">{products.name}</span>
                                      <p>{products.description}</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            {comProductList}
          </div>
        )
  }
}
export default Product