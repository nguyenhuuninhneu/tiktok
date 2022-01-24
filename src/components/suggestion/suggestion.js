import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import config from '../../config/config'
import moreAppConfig from '../../config/moreAppConfig';
import { TextField, Card, Heading, TextStyle, Button } from '@shopify/polaris';
import '../../assets/css/suggestion.css';
import '../../App.css';
import lightvertical from '../../assets/images/light-vertical.png'
import lighthorizontal from '../../assets/images/light-horizontal.png'
import dismiss from '../../assets/images/dismiss.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ShowMoreText from "react-show-more-text";

const listSuggest = [
    {
        Id: 1,
        Status: 0,
        Vote: 220,
        YourSuggestion: true,
        Title: "0 Upsell and Cross Sell options",
        Description: "0 Send a Thank you email automatically after a costumer makes a purchase. Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 2,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "1 Upsell and Cross Sell options",
        Description: "1 Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 3,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 4,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 5,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 6,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 7,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 8,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 9,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 10,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 11,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
    {
        Id: 12,
        Status: 0,
        Vote: 220,
        YourSuggestion: false,
        Title: "Upsell and Cross Sell options",
        Description: " Send a Thank you email automatically after a costumer makes a purchase."
    },
]

const Suggestion = () => {
    const [textSearch, setTextSearch] = useState('');
    const [textTitleValid, setTitleValid] = useState('');
    const [textDescriptionValid, setDescriptionValid] = useState('');
    const handleChangeTextSearch = (newValue) => {
        setTextSearch(newValue);
        debugger;
        if (newValue !== '') {
            const newList = listSuggest.filter((item) => item.Title.toLowerCase().includes(newValue.toLowerCase()) || item.Description.toLowerCase().includes(newValue.toLowerCase()));
            setList(newList);
        } else {
            setList(listSuggest);
        }
    }
    const [textTitle, setTextTitle] = useState('');
    const handleChangeTextTitle = (newValue) => {
        setTextTitle(newValue);
        if (newValue == '') {
            setTitleValid(moreAppConfig.TilteValidationText);
        } else {
            setTitleValid('');
        }

    };
    const [textDes, setTextDes] = useState('');
    const handleChangeTextDes = (newValue) => {
        setTextDes(newValue);
        if (newValue == '') {
            setDescriptionValid(moreAppConfig.DescriptionValidationText);
        } else {
            setDescriptionValid('');
        }
    };
    const [isShowFeature, setShowFeature] = useState(false);
    const [addNewFeature, setAddNewFeature] = useState(false);
    const [list, setList] = React.useState(listSuggest);
    function changeSuggestStatus(suggest) {
        const newList = list.map((item) => {
            if (item.Id === suggest.Id) {
                const updatedItem = {
                    ...item,
                    Status: suggest.Status === 0 ? 1 : 0,
                    Vote: suggest.Status === 0 ? item.Vote + 1 : item.Vote - 1,
                };
                return updatedItem;
            }
            return item;
        });

        setList(newList);
    }
    function handleSendSuggestion() {
        if (textTitle == '') {
            setTitleValid(moreAppConfig.TilteValidationText);
            return false;
        }
        if (textDes == '') {
            setDescriptionValid(moreAppConfig.DescriptionValidationText);
            return false;
        }
        var newItem = {
            Id: 100,
            Title: textTitle,
            Description: textDes,
            Vote: 1,
            Status: 1,
            YourSuggestion: true,
        }
        list.unshift(newItem);
        setList(list);
        setAddNewFeature(false);
    }
    const openFormAddNewFeature = () => {
        setTextTitle('');
        setTextDes('');
        setAddNewFeature(true);

    }
    return (

        <div className='suggestion'>
            <div className={!isShowFeature ? 'light-fixed light-show' : 'light-fixed light-hide'}>
                <a href="#" onClick={() => { setShowFeature(true) }} className='tag-horizontal' title="Features Suggestion" >
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
                            {
                                !addNewFeature ?
                                    <>
                                        <div className='search-featrue search-hide'>
                                            <p>
                                                <TextStyle >Can't find it below</TextStyle>
                                            </p>
                                            <div className='tag-feature'>
                                                <TextStyle >You can always suggest a </TextStyle>
                                                <a href="#" onClick={() => { openFormAddNewFeature() }} title="New feature" >
                                                    New feature
                                                </a>
                                            </div>
                                            <TextField
                                                placeholder="Search your suggestion"
                                                value={textSearch}
                                                onChange={(e) => { handleChangeTextSearch(e) }}
                                                autoComplete="off"
                                            />
                                        </div>
                                    </> :
                                    <>
                                        <div className='form-add-feature mb-10'>
                                            <Heading>Suggest another feature</Heading>
                                        </div>
                                        <p className='mb-10'>Title <span className='valid'>(*)</span> </p>
                                        <TextField
                                            placeholder="Title"
                                            value={textTitle}
                                            error={textTitleValid}
                                            onChange={(e) => { handleChangeTextTitle(e) }}
                                            autoComplete="off"
                                            maxLength="150"
                                        />
                                        <p className='mt-10 mb-10'>Description <span className='valid'>(*)</span> </p>
                                        <TextField
                                            placeholder="Description"
                                            value={textDes}
                                            error={textDescriptionValid}
                                            onChange={(e) => { handleChangeTextDes(e) }}
                                            autoComplete="off"
                                            multiline={4}
                                        />
                                        <div className='mt-20'>
                                            <Button onClick={() => { setAddNewFeature(false) }}>Cancel</Button>
                                            <Button onClick={() => { handleSendSuggestion() }} primary>Send</Button>
                                        </div>
                                        <hr className='mb-20 mt-20' />
                                    </>
                            }

                            <div className='list-feature'>
                                {
                                    list.map((suggest, index) => {
                                        return (
                                            <div className='item-feature' key={index}>
                                                <div className='left'>
                                                    <a href="#" className={suggest.Status == 0 ? 'gray' : 'green'} onClick={() => { changeSuggestStatus(suggest) }} title={suggest.Status == 0 ? 'Like' : 'Dislike'} >
                                                        <FontAwesomeIcon icon={faThumbsUp} />
                                                    </a>
                                                </div>
                                                <div className='right'>
                                                    <div className='title'>
                                                        {suggest.Title}
                                                    </div>
                                                    <div className='description mb-10'>
                                                        <ShowMoreText
                                                            /* Default options */
                                                            lines={2}
                                                            more="view more"
                                                            less="view less"
                                                            className="content-css"
                                                            anchorClass="my-anchor-css-class"
                                                            expanded={false}
                                                            truncatedEndingComponent={"... "}
                                                        >
                                                            {suggest.Description}

                                                        </ShowMoreText>
                                                    </div>
                                                </div>
                                                <div className='cb'>
                                                </div>
                                                <div className='vote-number'>
                                                    {suggest.Vote} votes
                                                </div>
                                                {suggest.YourSuggestion ?
                                                    <>
                                                        <div className='your-suggestion'>
                                                            your suggestion
                                                        </div>
                                                    </> : ''}

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className='dismiss'>
                                <a href="#" onClick={() => { setShowFeature(false) }} className='tag-dismiss' title="Close" >
                                    <img src={dismiss} />
                                </a>
                            </div>
                        </Card.Section>
                    </Card>
                </div>



            </div>
        </div>


    )
}

export default Suggestion