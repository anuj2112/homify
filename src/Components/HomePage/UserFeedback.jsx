import React from "react";
import UserFeedbackStyles from './UserFeedback.module.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const UserFeedback = () => {
    return (
        <>
            <div className={UserFeedbackStyles.container}>
        

            <div className={UserFeedbackStyles.tileParent}>
                <div style={{  padding: '20px 20px 20px 20px', display : "inline-flex" }}>
                    <div className={UserFeedbackStyles.outerTile}>
                        <div className={UserFeedbackStyles.roundedIconStyles}> <FormatQuoteIcon fontSize="large"
                            sx={{ left: '-30px' }} /></div>
                        <div className={UserFeedbackStyles.tileStyle}>
                            <p className={UserFeedbackStyles.quoteMessage}>
                                {`A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`}
                            </p>
                        </div>
                        <div className={UserFeedbackStyles.quoteSenderStyle}>
                            <div className={UserFeedbackStyles.userIcon} />
                            <div className={UserFeedbackStyles.userNameStyle}>
                                <b> John Doe</b>
                                <br />
                                Creative Director
                            </div>


                        </div>
                    </div>
                </div>




                <div style={{padding: '20px 20px 20px 20px' , display : "inline-flex" }}>
                    <div className={UserFeedbackStyles.outerTile}>
                        <div className={UserFeedbackStyles.roundedIconStyles}> <FormatQuoteIcon fontSize="large"
                            sx={{ left: '-30px' }} /></div>
                        <div className={UserFeedbackStyles.tileStyle}>
                            <p className={UserFeedbackStyles.quoteMessage}>
                                {`A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`}
                            </p>
                        </div>
                        <div className={UserFeedbackStyles.quoteSenderStyle}>
                            <div className={UserFeedbackStyles.userIcon} />
                            <div className={UserFeedbackStyles.userNameStyle}>
                                <b> John Doe</b>
                                <br />
                                Creative Director
                            </div>


                        </div>
                    </div>
                </div>



               










            </div>




        </div>
        </>

    );
}
export default UserFeedback;