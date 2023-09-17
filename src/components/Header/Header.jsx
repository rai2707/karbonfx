import React from "react";
import {FaUser} from 'react-icons/fa';
import './Header.css'
import UserList from "../UserList/UserList";
import UserCard from "../UserCard/UserCard";

const Header = () =>{
    return(

       <>
         <div>
            <div className="user_inventory">
                <h4>USER'S INVENTORY</h4>
                <div className="user_icon">
                <FaUser className="fa_user"></FaUser>
                </div>
            </div>
            
        </div>
       </>
    )
}
export default Header;