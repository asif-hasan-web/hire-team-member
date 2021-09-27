import React from 'react';
import './Order.css';

// cart Function
const Order =(props) =>{
    const { cart } = props;
    let total = 0;
    for(const product of cart){
        total = total +product.salary;
    }
    return(
        <div>
            <h3>Your management Team </h3>
            {/* <h5>Total Person:  </h5> */}
            <h5>Total Person: <h3 className="text-danger d-inline">{props.cart.length}</h3> </h5>
            <br />
           
            <h5>Total Salery:$ <h3 className="text-danger d-inline">{total}</h3> </h5>
            <ul className="cart-design">
                {
                    cart.map(person=> <li>{person.name} </li>)
                }
            </ul>
            <button className="btn-bottom w-50 ms-3 bg-warning">Submit</button>
        </div>

    );
};
export default Order;