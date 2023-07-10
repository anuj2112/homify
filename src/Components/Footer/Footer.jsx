import React from "react";
import FooterStyles from "./FooterStyles.module.css";
const Footer = () => {
    return (
        <>
            <div className={FooterStyles.container}>
                <div className={FooterStyles.list}>

                    <ol><h5>Home</h5></ol>
                    <ol>About Us</ol>

                    <ol>Services</ol>
                    <ol>Places</ol>
                    <ol>Destination</ol>
                    <ol>Terms</ol>
                    <ol>Privacy</ol>

                </div>



                <div className={FooterStyles.list}>

                    <ol><h5> Practice Area</h5></ol>
                    <ol>Travel</ol>

                    <ol>Popular places
                    </ol>
                    <ol>Destination</ol>
                    <ol>Destination</ol>
                    <ol>Tour
                    </ol>
                    <ol>Family Vacation
                    </ol>

                </div>
            </div>
        </>
    );
}
export default Footer;