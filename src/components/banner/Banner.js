import React, { useState, useEffect, useRef } from 'react';
import moreAppConfig from '../../config/moreAppConfig';
import { TextField, Heading, Button } from '@shopify/polaris';
import '../../assets/css/banner.css';
import '../../App.css';
import StarRatings from 'react-star-ratings';
import background from '../../assets/images/background.png';

const Banner = () => {
    const [rating, setStateRating] = useState(0);
    const [stepVote, setStepVote] = useState(0);
    const [closeBanner, setCloseBanner] = useState(false);
    const [textImprove, setTextImprove] = useState('');
    const [textImproveValid, setTextImproveValid] = useState('');
    const handleChangeTextImprove = (newValue) => {
        setTextImprove(newValue);
        if (newValue == '') {
            setTextImproveValid(moreAppConfig.ImproveValidationText);
        } else {
            setTextImproveValid('');
        }
    };
    const changeRating = (newRating) => {
        setStateRating(newRating)
        if (newRating >= 4) {
            window.open(' https://apps.shopify.com/yuri-facebook-multi-pixels?reveal_new_review=true', '_blank');
        } else {
            setStepVote(2);
        }
    }
    const sendImprovement = () => {
        if (textImprove == '') {
            setTextImproveValid(moreAppConfig.ImproveValidationText);
        } else {
            setTextImproveValid('');
            setStepVote(3);
        }
    }
    const changeCloseBanner = () => {
        setCloseBanner(true);
    }
    const applyNow = () => {
        setCloseBanner(true);
    }
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };

    const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });


    return (
        <div id='root-banner'>
            <div className={closeBanner || clickedOutside ? 'hide-banner' : 'banner'}>
                <div className='banner-block' ref={myRef} onClick={handleClickInside}
                >
                    {
                        stepVote === 0 ?
                            <>
                                <div className='intro' style={{ backgroundImage: `url(${background})` }}>
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
                                            provide a <a href="#" title='discount code' onClick={() => { setStepVote(1) }}><span className='c_DB4F6D'>discount code</span></a>  of <span className='DB4F6D'>20%</span></p>
                                        <div className='holiday_code'>
                                            HOLIDAY_CODE
                                        </div>
                                        <div className='message'>
                                            Wish you and your family a healthy, happy,
                                            and successful new year.
                                        </div>
                                    </div>
                                </div>
                            </>
                            : ''
                    }
                    {
                        stepVote > 0 ?
                            <>
                                <div className='main'>
                                    <div className='frame'>
                                        <div className='content'>
                                            <div className='title'>
                                                Holiday_code
                                            </div>
                                            <Button onClick={() => { applyNow()}}>Apply Now</Button>
                                            <div className='common'>
                                                {
                                                    stepVote === 1 ?
                                                        <>
                                                            <div className='vote-star'>
                                                                <div className='enjoy'>
                                                                    Enjoying Our Service?
                                                                </div>
                                                                <div className='message'>
                                                                    Could you take 60 seconds to
                                                                    share your happy experience
                                                                </div>
                                                                <div className='star'>
                                                                    <StarRatings
                                                                        rating={rating}
                                                                        starRatedColor="C33D45"
                                                                        changeRating={changeRating}
                                                                        numberOfStars={5}
                                                                        name='rating'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                        : stepVote === 2 ?
                                                            //Ideals
                                                            <>
                                                                <div className='send-improvement'>
                                                                    <p>Sorry to hear that! How could we improve?</p>
                                                                    <TextField
                                                                        placeholder="..."
                                                                        value={textImprove}
                                                                        error={textImproveValid}
                                                                        onChange={(e) => { handleChangeTextImprove(e) }}
                                                                        autoComplete="off"
                                                                        multiline={4}
                                                                    />
                                                                    <Button onClick={() => { sendImprovement() }}>Send</Button>
                                                                </div>
                                                            </>
                                                            : stepVote === 3 ?
                                                                <>
                                                                    <div className='thank-you'>
                                                                        <p>Thank you for your feedback regarding our app.
                                                                            What you shared with me will help me to improve the experience.</p>
                                                                        <Button onClick={() => { changeCloseBanner() }}>Close</Button>
                                                                    </div>
                                                                </>
                                                                : ''
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : ''
                    }

                </div>
            </div>
        </div>



    )
}

export default Banner