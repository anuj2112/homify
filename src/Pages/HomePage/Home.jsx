import React from 'react';
import Navbar from '../../Components/NavbarFiles/Navbar';
import HomePageStyles from './home.module.css'

import SearchComponents from '../../Components/HomePage/SearchComponents';
import Services from '../../Components/HomePage/Services';
import UserFeedback from '../../Components/HomePage/UserFeedback';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <>

            <div className={HomePageStyles.homePage}>

                <div className={HomePageStyles.image}></div>
                <Navbar></Navbar>
                <div className={HomePageStyles.flexText}>
                    <h1>Once a year go someplace you've never been before.</h1>
                </div>
                <SearchComponents></SearchComponents>
                <Services></Services>
                <br></br>
                <UserFeedback></UserFeedback>
                <Footer></Footer>

            </div>
        </>
    )
}
export default Home;