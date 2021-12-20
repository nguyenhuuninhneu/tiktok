import React, { Component } from 'react';
import { Card, Link, Heading, ResourceList, ResourceItem, TextStyle, Avatar, Button, ButtonGroup, TextField, Layout, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, Icon } from '@shopify/polaris';
import { CirclePlusMinor } from '@shopify/polaris-icons';
import '../../assets/css/faq.css';
import '../../App.css';

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
                                        <Icon source={CirclePlusMinor} />
                                    </div>
                                    <div className={'item-right'}>
                                        <div className={'btnEnableApp active'}>
                                            <Button>Chat with us</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <Icon source={CirclePlusMinor} />
                                    </div>
                                    <div className={'item-right'}>
                                        <Link url="https://help.shopify.com/manual">orichi247@gmail.com</Link>
                                    </div>
                                </div>
                                <div className={'item-touch'}>
                                    <div className={'item-left'}>
                                        <Icon source={CirclePlusMinor} />
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
                                    <Heading>Inventory UI change</Heading>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='colRight w66pc'>
                    <div className={'Preview'}>
                        <Card sectioned>
                            <div className={'common-title'}>
                                Preview
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