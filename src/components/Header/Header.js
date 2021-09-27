import React from 'react';
import logo from '../../bright.jpg'
import './Header.css'


const Header = () =>{
    return(
        <div className="container" >
           <div className="header p-2  ">
                <div className=" d-flex align-items-center justify-content-center">
                        <img className="logo" src={logo} alt="" />
                        <h2 className="text-secondary">Bright Future</h2>
                </div>
               
                <div className="header-footer justify-content-center p-4">
                    <h5>We Will Make History Together</h5>
                    <p className="text-secondary">Bright Future is the easiest way to connect with the best developers from around the world and grow your career !</p>
                    <hr />
                    <div className="details-top  pt-5 text-dark justify-content-center">
                        <h2>Create a Community group with world best 10 programmers </h2>
                        <h3  className="text-secondary">Total Budget: <b  className="text-danger"> 10 millon</b></h3>
                     </div>
                </div>
           </div>
        </div>
    )
}
export default Header;
