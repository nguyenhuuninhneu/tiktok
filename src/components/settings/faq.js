import React, { Component } from 'react';
import { Card, Link, Heading, Thumbnail, TextStyle, Button, TextContainer, Icon, Pagination, VideoThumbnail, MediaCard } from '@shopify/polaris';
import { EmailMajor, ChatMajor, PhoneMajor, PromoteMinor } from '@shopify/polaris-icons';
import '../../assets/css/faq.css';
import '../../App.css';
import user from '../../assets/images/user.png'

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className={'faq'}>
                <div className={'colLeft w30pc'}>
                    <div className={'touch-section mb-20'}>
                        <Card sectioned>
                            <div className={'common-title title-fix'}>
                                Getting in touch
                            </div>
                            <div className={'group-touch'}>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <Icon source={ChatMajor} />
                                    </div>
                                    <div className={'item-right'}>
                                        <div className={'btnEnableApp active'}>
                                            <Button>Chat with us</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <Icon source={EmailMajor} />
                                    </div>
                                    <div className={'item-right'}>
                                        <Link url="https://help.shopify.com/manual">orichi247@gmail.com</Link>
                                    </div>
                                </div>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <Icon source={PhoneMajor} />
                                    </div>
                                    <div className={'item-right'}>
                                        <Link url="https://help.shopify.com/manual">+84877566048</Link>
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
                                <div className={'item-resource'}>
                                    <TextContainer>
                                        <Heading>Inventory UI change</Heading>
                                        <p>
                                            We have switched the position of the Shopify and
                                            Zapiet locations in the Inventory integration section. You can now connect multiple Zapiet locations ...
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
                                            <TextStyle variation="subdued">Posted by Alex on Friday, August 27, 2021
                                            </TextStyle>
                                        </div>
                                    </div>
                                    <div className={'view-our-site'}>
                                        <Link url="https://help.shopify.com/manual">View our site </Link>
                                        <Button><Icon source={PromoteMinor} /></Button>
                                    </div>
                                </div>
                                <div className={'item-resource'}>
                                    <TextContainer>
                                        <Heading>Inventory UI change</Heading>
                                        <p>
                                            We have switched the position of the Shopify and
                                            Zapiet locations in the Inventory integration section. You can now connect multiple Zapiet locations ...
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
                                            <TextStyle variation="subdued">Posted by Alex on Friday, August 27, 2021
                                            </TextStyle>
                                        </div>
                                    </div>
                                    <div className={'view-our-site'}>
                                        <Link url="https://help.shopify.com/manual">View our site </Link>
                                        <Button><Icon source={PromoteMinor} /></Button>
                                    </div>
                                </div>
                                <div className={'item-resource'}>
                                    <TextContainer>
                                        <Heading>Inventory UI change</Heading>
                                        <p>
                                            We have switched the position of the Shopify and
                                            Zapiet locations in the Inventory integration section. You can now connect multiple Zapiet locations ...
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
                                            <TextStyle variation="subdued">Posted by Alex on Friday, August 27, 2021
                                            </TextStyle>
                                        </div>
                                    </div>
                                    <div className={'view-our-site'}>
                                        <Link url="https://help.shopify.com/manual">View our site </Link>
                                        <Button><Icon source={PromoteMinor} /></Button>
                                    </div>
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
                                <div className={'item-video'}>
                                    <MediaCard
                                        title="Turn your side-project into a business"
                                        primaryAction={{
                                            content: 'Learn more',
                                            onAction: () => { },
                                        }}
                                        description={`In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.`}
                                        popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                                    >
                                        <VideoThumbnail
                                            videoLength={80}
                                            thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                                        />
                                    </MediaCard>
                                </div>
                                <div className={'item-video'}>
                                    <MediaCard
                                        title="Turn your side-project into a business"
                                        primaryAction={{
                                            content: 'Learn more',
                                            onAction: () => { },
                                        }}
                                        description={`In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.`}
                                        popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                                    >
                                        <VideoThumbnail
                                            videoLength={80}
                                            thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                                        />
                                    </MediaCard>
                                </div>
                                <div className={'cb'}>

                                </div>
                            </div>
                            <div className={'pagination'}>
                                <Pagination
                                    hasPrevious
                                    onPrevious={() => {
                                        console.log('Previous');
                                    }}
                                    hasNext
                                    onNext={() => {
                                        console.log('Next');
                                    }}
                                />
                                <div className={'title-page'}>
                                    <TextStyle variation="subdued">1/4</TextStyle>
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