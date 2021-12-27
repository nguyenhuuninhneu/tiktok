import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
import { Card, Link, Heading, Thumbnail, TextStyle, Button, TextContainer, Icon, Pagination, VideoThumbnail, MediaCard } from '@shopify/polaris';
import '../../assets/css/faq.css';
import '../../App.css';
import user from '../../assets/images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faPhoneAlt, faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons'


function convertDate(date) {
    var getDate = Number(date.replace('/Date(', '').replace(')/', ''));
    var date2 = new Date(getDate);
    return date2.toDateString();
}
class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listResource: [],
            listVideo: [],
            listVideoSliced: [],
            currentPage: 1,
            totalPage: 1,
        }
        this.LoadResource();
        this.LoadVideo();
        // this.LoadResource = this.LoadResource.bind(this);
    }
    LoadResource() {
        var that = this;
        axios.get(config.rootLink + '/FrontEnd/GetPosts')
            .then(function (response) {
                // handle success
                if (response !== undefined && response.data !== null && response.data.posts.length > 0) {
                    that.setState({
                        listResource: [...that.state.listResource, ...response.data.posts]
                    })
                    // listResource = [...response.data.posts]
                }
                else {
                    // window.location.reload();
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    LoadVideo() {
        var that = this;
        axios.get(config.rootLink + '/FrontEnd/GetVideos')
            .then(function (response) {
                // handle success
                if (response !== undefined && response.data !== null && response.data.videos.length > 0) {
                    that.setState({
                        listVideo: [...that.state.listVideo, ...response.data.videos]
                    })
                    that.setState(state => ({ currentPage: 1 }));
                    that.setState(state => ({ totalPage: Math.ceil(response.data.videos.length / 2) }));
                    that.paginate(that.state.listVideo, 2, 1);
                }
                else {
                    // window.location.reload();
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    paginate(array, page_size = 2, page_number = 1) {
        var that = this;
        that.setState({
            listVideoSliced: array.slice((page_number - 1) * page_size, page_number * page_size)
        })
        
    }
    loadChatPlugin = () => {
        const script = document.createElement("script");
        script.src = "//code.tidio.co/rvxustxuoq2e0mgcep1x1zrt3ynxmkhi.js";
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.innerHTML = ` (function() {
          function onTidioChatApiReady() {
            tidioChatApi.setVisitorData({ 
              name: "${config.shop}",  
              tags: ["Tiktok"]
            });
          }
          if (window.tidioChatApi) {
            window.tidioChatApi.on("ready", onTidioChatApiReady);
          } else {
            document.addEventListener("tidioChat-ready", onTidioChatApiReady);
          }
        })();` ;
        document.body.appendChild(script2);

    }
    render() {

        const list = this.state.listResource.map((item, index) => {
            return (
                <div className={'item-resource'} key={item.ID}>
                    <TextContainer>
                        {/* <Heading>{item.Title}</Heading> */}
                        <a href={item.Link} target="_blank" className='title-resource'> {item.Title}</a>
                        <p>
                            {item.Description}
                        </p>
                    </TextContainer>
                    <div className={'user-info'}>
                        <div className={'left'}>
                            <Thumbnail
                                source={user}
                                alt="Black choker necklace"
                            />
                        </div>
                        <div className={'right'}>
                            <TextStyle variation="subdued">Posted by {item.PostedBy} on {convertDate(item.PostedDate)}
                            </TextStyle>
                        </div>
                    </div>
                </div>
            )
        })

        return (

            <div className={'faq'}>
                <div className={'colLeft w32pc'}>
                    <div className={'touch-section mb-20'}>
                        <Card sectioned>
                            <div className={'common-title title-fix'}>
                                Getting in touch
                            </div>
                            <div className={'group-touch'}>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <FontAwesomeIcon icon={faCommentDots} />
                                    </div>
                                    <div className={'item-right'}>
                                        <div className={'btnEnableApp active'}>
                                            <Button onClick={this.loadChatPlugin}>Chat with us</Button>
                                        </div>
                                    </div>
                                    <div className='cb'>
                                    </div>
                                </div>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className={'item-right'}>
                                        <a href="mailto:orichi247@gmail.com" target="_blank">orichi247@gmail.com</a>
                                        {/* <Link url="mailto:orichi247@gmail.com" target="_blank">orichi247@gmail.com</Link> */}
                                    </div>
                                </div>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </div>
                                    <div className={'item-right'}>
                                        <a href="tel:+84877566048" target="_blank">+84877566048</a>
                                        {/* <Link url="tel:+84877566048" target="_blank">+84877566048</Link> */}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={'resources-section'}>
                        <Card sectioned>
                            <div className={'common-title'}>
                                Resources
                            </div>
                            <div className={'group-resources'}>
                                {list}
                                <div className={'view-our-site'}>
                                    <a href="https://orichi.info/" target="_blank" className={'link-our-site'}>View our site  <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </div>

                            </div>
                        </Card>
                    </div>
                </div>
                <div className='colRight w66pc'>
                    <div className={'watch-video-tutorial'}>
                        <Card sectioned>
                            <div className={'common-title'}>
                                Watch video tutorials
                            </div>
                            <TextContainer>
                                <p>
                                    Did you know we have a super comprehensive help center and video tutorial series which answers most common questions?
                                </p>
                            </TextContainer>
                            <div className={'group-video'}>
                                {/* {this.state.contentSlice} */}
                                {
                                    this.state.listVideoSliced.map((video, index) => {
                                        return (
                                            <div className={'item-video'} key={video.ID}>
                                                <MediaCard
                                                    title={video.Title}
                                                    primaryAction={{
                                                        content: 'Learn more',
                                                        onAction: () => { },
                                                    }}
                                                    description={video.Description}
                                                    popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                                                >
                                                    <VideoThumbnail
                                                        videoLength={80}
                                                        thumbnailUrl={video.ImageLink}
                                                    />
                                                </MediaCard>
                                            </div>
                                        )



                                    })}
                                <div className={'cb'}>



                                </div>
                            </div>
                            <div className={'pagination'}>
                                <Pagination
                                    hasPrevious
                                    onPrevious={() => {
                                        var that = this;
                                        if (that.state.currentPage > 1) {
                                            that.setState(state => ({ currentPage: that.state.currentPage - 1 }));
                                            that.paginate(that.state.listVideo, 2, that.state.currentPage - 1);

                                        }
                                    }}
                                    hasNext
                                    onNext={() => {
                                        var that = this;
                                        if (that.state.currentPage < that.state.totalPage) {
                                            that.setState(state => ({ currentPage: that.state.currentPage + 1 }));
                                            that.paginate(that.state.listVideo, 2, that.state.currentPage + 1);
                                        }
                                    }}
                                />
                                <div className={'title-page'}>
                                    <TextStyle variation="subdued">{this.state.currentPage}/{this.state.totalPage}</TextStyle>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
                <div className={'cb'}>
                </div>
            </div>
        );
    }
}

export default FAQ;