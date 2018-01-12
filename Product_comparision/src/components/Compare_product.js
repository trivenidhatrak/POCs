import React, {Component} from 'react';

class Compare_product extends Component
{

    render()
    {
        return(
            <div>
                <div className="row compare">
                    <div className="col-12 mt-5 text-center">
                        <table className="table">
                            <thead className="thead-default">
                                <tr>
                                    <th></th>
                                    {this.props.productsArr.map(product =>
                                        <th key={product.id}>
                                        {product.name}
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="price">
                                    <th scope="row">Price</th>
                                    {this.props.productsArr.map(product =>
                                        <td className="text-center" key={product.id}>{product.price}</td>
                                        
                                    )}
                                </tr>
                                <tr className="colors">
                                    <th scope="row">Colors</th>
                                    {this.props.productsArr.map(product =>
                                        <td className="text-center">
                                        {product.colors.map((color, index) =>
                                            <span key={index} className={"bg-" + color}></span>
                                        )}
                                    
                                        </td>
                                    )}
                                
                                </tr>
                                <tr className="condition">
                                    <th scope="row">Condition</th>
                                    {this.props.productsArr.map(product =>
                                        <td key={product.id} className={product.condition === "Used" ? "bg-red" : "bg-green"}>
                                        {product.condition}
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        )
    }
}
export default Compare_product