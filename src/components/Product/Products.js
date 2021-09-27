import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
;
import './Products.css'
const Product =(props) =>{
    // console.log(props);
    
    const {name, picture, email, phone, salary, address, age}= props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return( 
      
        <div className="col-md-4  shadow p-3 mb-5 bg-white rounded">
        
        <div className="card  d-flex align-items-center card-size ">                          
          
            <img src={picture} className=" product-img " alt="..."/>

                <div className="card-body">
                    <p className="card-title">Name: <h5 className="d-inline">{name}</h5> </p>
                    <ul className="list-group list-group-flush">
                    <li className="list-item"><small>Salary:</small>$ {salary}</li>
                    <li className="list-item"><small>Age:</small> {age}</li>
                    <li className="list-item"><small>Email:</small> {email}</li>
                    <li className="list-item"><small>Phone:</small> {phone}</li>
                    <li className="list-item"><small>Country:</small> {address}</li>
                </ul>
                </div>
                <div className="card-body">
                    <button
                     onClick={()=>props.handelAddToCart(props.product)} 
                      className="btn-bottom"> {element} add to cart</button>
                </div>
    </div>         
    </div>         
      
    )
}
export default Product;