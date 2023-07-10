import React from "react";
import ServiceStyles from "./Services.module.css"
import HikingIcon from '@mui/icons-material/Hiking';
import MapIcon from '@mui/icons-material/Map';
import RestaurantIcon from '@mui/icons-material/Restaurant';
const Services = () => {
    return (
        <div>
            <div className={ServiceStyles.serviceTileParent}>
                <div className={ServiceStyles.serviceTile}>
                    <div
                        className={ServiceStyles.iconsStyle}>
                        <HikingIcon
                            sx={{ color: "cadetblue" }}
                            fontSize="large"
                        ></HikingIcon>
                    </div>
                    <h3
                        style={{
                            color: 'GrayText',
                            textAlign: 'center'
                        }}
                    >
                        {`   Trekking`}</h3>
                    <br></br>
                    <p className={ServiceStyles.paraText}>
                        {`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`}
                    </p>

                </div>
                <div className={ServiceStyles.serviceTile}>
                    <div
                        className={ServiceStyles.iconsStyle}>


                        <MapIcon
                            sx={{ color: "cadetblue" }}
                            fontSize="large"
                        ></MapIcon>
                    </div>
                    <h3
                        style={{
                            color: 'GrayText',
                            textAlign: 'center'
                        }}
                    >
                        {`The Map`}</h3>
                    <br />
                    <p className={ServiceStyles.paraText}>
                        {`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`}
                    </p>


                </div>
                <div className={ServiceStyles.serviceTile}>
                    <div
                        className={ServiceStyles.iconsStyle}>


                        <RestaurantIcon
                            sx={{ color: "cadetblue" }}
                            fontSize="large"
                        ></RestaurantIcon>
                    </div>
                    <h3
                        style={{
                            color: 'GrayText',
                            textAlign: 'center'
                        }}
                    >
                        {`Food`}</h3>
                    <br />
                    <p className={ServiceStyles.paraText}>
                        {`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`}
                    </p>

                </div>
            </div>
            <div className={ServiceStyles.aboutHotelParent}>
                <div className={ServiceStyles.rectangleStyle}>

                </div>
                <div className={ServiceStyles.aboutImage}>

                </div>
                <div className={ServiceStyles.aboutText}>
                    <h2>{`About Hotel`}</h2>
                </div>

            </div>
            <div className={ServiceStyles.aboutInfo}>
                <p>
                    {`Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`} <br /><br></br>{` Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`}
                </p>
            </div>
        </div>
    );

}
export default Services;
