import React from "react";
import NavbarStyles from './navbarstyles.module.css'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () =>{
    return(
        <>
        <div className={NavbarStyles.navbarbase}>
            <h2 style={{position : "absolute",paddingLeft: "30px", paddingTop : "10px"}}>Homify</h2>
            <Link to = '/services'>
            <h2 style={{position : "relative",paddingRight: "30px", paddingTop : "10px" ,  display : "inline-block" , color : "beige" }}>Services</h2>
            </Link>
            <Link to = '/contactus'>
            <h2 style={{position : "relative",paddingRight: "30px", paddingTop : "10px" , display : "inline-block" , color : "beige" }}>Contact Us</h2>
            </Link>
            <PersonIcon fontSize="large" sx = {{paddingRight : "30px" , paddingTop : "10px" , display : "inline-block"}}></PersonIcon>
            
            
        </div>
        </>
    );
}
export default Navbar;