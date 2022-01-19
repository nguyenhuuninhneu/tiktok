import React, { useState, useCallback, useEffect } from 'react';
import moreAppConfig from '../../config/moreAppConfig';
import { TextField, Card, Heading, TextStyle, Button } from '@shopify/polaris';
import '../../assets/css/banner.css';
import '../../App.css';
import lightvertical from '../../assets/images/light-vertical.png'
import lighthorizontal from '../../assets/images/light-horizontal.png'
import dismiss from '../../assets/images/dismiss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ShowMoreText from "react-show-more-text";


const Banner = () => {

    return (

        <div className='banner'>
            <div className='banner-block'>
                {/* <div className='intro'>
                    <div className='info'>
                        <Heading>Vietnamese lunar new year</Heading>
                        <div className='year'>
                            20
                        </div>
                        <div className='year'>
                            22
                        </div>
                        <div className='underline'>
                        </div>
                        <div className='cb'>
                        </div>
                        <p className='mt-10'>Orichi would like to inform you about the schedule of New Year Holiday 2022 as following:</p>
                        <p className='paragraph'><span className='c_DB4F6D'>27/01/2022</span> will be closed to
                            observe Tet Holidays 2022 from
                            <span className='c_DB4F6D'> Thursday, January 27th, 2022 </span>
                            to <span className='c_DB4F6D'>Friday, February 06th, 2022</span></p>
                        <p className='mb-10'>On this occasion, we would like
                            to thank you for your support
                            and cooperation in the year 2021
                            and look forward to receiving
                            your continuing assistance in
                            2022. We would like to extend
                            the trial day up to <span className='c_DB4F6D'>30 days</span> and
                            provide a <a href="javascript://"><span className='c_DB4F6D'>discount code</span></a>  of <span className='DB4F6D'>20%</span></p>
                        <div className='holiday_code'>
                            HOLIDAY_CODE
                        </div>
                        <div className='message'>
                            Wish you and your family a healthy, happy,
                            and successful new year.
                        </div>
                    </div>
                </div> */}
                <div className='main'>
                    <div className='frame'>
                        <div className='content'>
                            <div className='title'>
                                Holiday_code
                            </div>
                            <Button >Apply Now</Button>
                            <div className='common'>
                                <div className='vote-star'>
                                    <div className='enjoy'>
                                        Enjoying Our Service?
                                    </div>
                                    <div className='message'>
                                        Could you take 60 seconds to
                                        share your happy experience
                                    </div>
                                    <div className='star'>

                                    </div>
                                </div>
                                {/* <div className='send-improvement'>
                                    <p>Sorry to hear that! How could we improve?</p>
                                    <TextField
                                        placeholder=""
                                        autoComplete="off"
                                        multiline={4}
                                    />
                                    <Button >Send</Button>
                                </div>
                                <div className='thank-you'>
                                    <p>Thank you for your feedback regarding our app.
                                        What you shared with me will help me to improve the experience.</p>
                                        <Button >Close</Button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Banner