import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config'
import { TextField, Card, Link, ResourceList, Thumbnail, TextStyle, Button, TextContainer, Icon, Pagination, VideoThumbnail, MediaCard } from '@shopify/polaris';
import '../../assets/css/suggestion.css';
import '../../App.css';
import lightvertical from '../../assets/images/light-vertical.png'
import lighthorizontal from '../../assets/images/light-horizontal.png'
import dismiss from '../../assets/images/dismiss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faPhoneAlt, faEnvelope, faCommentDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const Suggestion = () => {
    const [textSearch, setTextSearch] = useState('');

    const handleChangeTextSearch = useCallback((newValue) => setTextSearch(newValue), []);
    const [isShowFeature, setShowFeature] = useState(false);
    return (
        <div className='suggestion'>
            <div className={!isShowFeature ? 'light-fixed light-show' : 'light-fixed light-hide'}>
                <a href="javascript://" onClick={() => { setShowFeature(true) }} className='tag-horizontal' title="Features Suggestion" >
                    <img src={lighthorizontal} />
                </a>
            </div>
            <div className={isShowFeature ? 'feature-fixed feature-show' : 'feature-fixed feature-hide'}>
                <div className='header'>
                    <div className='block-light'>
                        <div className='title'>
                            Feature  Suggestions
                        </div>
                        <div className='image'>
                            <img src={lightvertical} />
                        </div>
                    </div>
                    <p className='label'>
                        Upvote existing ideas or suggest new ones.
                    </p>
                </div>
                <div className='new-feature'>
                    <Card>
                        <Card.Section>
                            <p>
                                <TextStyle >Can't find it below</TextStyle>
                            </p>
                            <div className='tag-feature'>
                                <TextStyle >You can always suggest a </TextStyle>
                                <a href="javascript://" onClick={() => { }} title="New feature" >
                                    New feature
                                </a>
                            </div>
                            <TextField
                                placeholder="Search your suggestion"
                                value={textSearch}
                                onChange={handleChangeTextSearch}
                                autoComplete="off"
                            />
                            <div className='list-feature'>
                                <div className='item-feature'>
                                    <div className='left'>
                                        <a href="javascript://" className='green' onClick={() => { }} title="Like" >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                        </a>
                                    </div>
                                    <div className='right'>
                                        <div className='title'>
                                            Upsell and Cross Sell options
                                        </div>
                                        <div className='description'>
                                            Send a Thank you email automatically after a costumer makes a purchase.
                                        </div>
                                    </div>
                                    <div className='cb'>
                                    </div>
                                    <div className='vote-number'>
                                        290 votes
                                    </div>
                                    <div className='your-suggestion'>
                                        your suggestion
                                    </div>
                                </div>
                                <div className='item-feature'>
                                    <div className='left'>
                                        <a href="javascript://" className='green' onClick={() => { }} title="Like" >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                        </a>
                                    </div>
                                    <div className='right'>
                                        <div className='title'>
                                            Upsell and Cross Sell options
                                        </div>
                                        <div className='description'>
                                            Send a Thank you email automatically after a costumer makes a purchase.
                                        </div>
                                    </div>
                                    <div className='cb'>
                                    </div>
                                    <div className='vote-number'>
                                        290 votes
                                    </div>
                                    <div className='your-suggestion'>
                                        your suggestion
                                    </div>
                                </div>
                                <div className='item-feature'>
                                    <div className='left'>
                                        <a href="javascript://" className='green' onClick={() => { }} title="Like" >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                        </a>
                                    </div>
                                    <div className='right'>
                                        <div className='title'>
                                            Upsell and Cross Sell options
                                        </div>
                                        <div className='description'>
                                            Send a Thank you email automatically after a costumer makes a purchase.
                                        </div>
                                    </div>
                                    <div className='cb'>
                                    </div>
                                    <div className='vote-number'>
                                        290 votes
                                    </div>
                                    <div className='your-suggestion'>
                                        your suggestion
                                    </div>
                                </div>
                                <div className='item-feature'>
                                    <div className='left'>
                                        <a href="javascript://" className='green' onClick={() => { }} title="Like" >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                        </a>
                                    </div>
                                    <div className='right'>
                                        <div className='title'>
                                            Upsell and Cross Sell options
                                        </div>
                                        <div className='description'>
                                            Send a Thank you email automatically after a costumer makes a purchase.
                                        </div>
                                    </div>
                                    <div className='cb'>
                                    </div>
                                    <div className='vote-number'>
                                        290 votes
                                    </div>
                                    <div className='your-suggestion'>
                                        your suggestion
                                    </div>
                                </div>
                                <div className='item-feature'>
                                    <div className='left'>
                                        <a href="javascript://" className='green' onClick={() => { }} title="Like" >
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                        </a>
                                    </div>
                                    <div className='right'>
                                        <div className='title'>
                                            Upsell and Cross Sell options
                                        </div>
                                        <div className='description'>
                                            Send a Thank you email automatically after a costumer makes a purchase.
                                        </div>
                                    </div>
                                    <div className='cb'>
                                    </div>
                                    <div className='vote-number'>
                                        290 votes
                                    </div>
                                    <div className='your-suggestion'>
                                        your suggestion
                                    </div>
                                </div>
                            </div>
                        </Card.Section>
                    </Card>
                </div>

                <div className='dismiss'>
                    <a href="javascript://" onClick={() => { setShowFeature(false) }} className='tag-dismiss' title="Close" >
                        <img src={dismiss} />
                    </a>
                </div>

            </div>
        </div>


    )
}

export default Suggestion