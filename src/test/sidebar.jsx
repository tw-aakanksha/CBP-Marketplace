
import './sidebar.css'

import { Link, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../App";
import { useState } from 'react';


const Sidebar = ({sidebar,closeSidebar}) => {

    const userLogInfo = useContext(UserContext);

    const signoutHandler = () =>
    {
        userLogInfo.setIsLoggedIn(false);
    }

    // const navigate = useNavigate();

    console.log(userLogInfo,"userloginfo");

    return (
        <div className={sidebar ? "sidebar sidebar--open": "sidebar"} >
            
            <div className='close'  onClick={closeSidebar}> X </div>

            <li>
            <Link className='nav-link' to='/' onClick={closeSidebar}>     
                Home
            </Link>
            </li>
            {
                !userLogInfo.isLoggedIn
                ? 
                <>
                    <li>      
                        <Link className="nav-link" to='/SignupBuyer' onClick={closeSidebar} >  
                            Signup as a Buyer
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/SignupSeller' onClick={closeSidebar}>
                            Signup as a Seller
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/LoginBuyer' onClick={closeSidebar}>
                            Login as a Buyer
                        </Link>

                    </li>

                    <li>
                        <Link className="nav-link" to='/LoginSeller' onClick={closeSidebar}>
                            Login as a Seller
                        </Link>

                    </li>
                </>

                : 

                <>
                    <li>      
                        <Link className="nav-link" to='/' onClick={signoutHandler} >  
                            Signout
                        </Link>
                    </li>
                    
                </>

            }
            
            
            
        </div>
    )
}

export default Sidebar;