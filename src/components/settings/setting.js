import React, { useState, Component } from 'react';
import { Card, Button, TextField, Layout, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer } from '@shopify/polaris';
import logo from '../../assets/images/tiktok.png'
import logo1 from '../../assets/images/tiktok-1.png'
import logo2 from '../../assets/images/tiktok-2.png'


const listLogoData = [logo, logo1, logo2];

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnable: true,
            getLogo: logo
        }
        this.handleEnableApp = this.handleEnableApp.bind(this);

    }

    handleEnableApp() {
        this.setState(state => ({ isEnable: !state.isEnable }));
    }
    changeLogo(logoSelected) {
        this.setState(state => ({ getLogo: logoSelected }));
    }
    render() {
        const contentStatus = this.state.isEnable ? 'Enable App' : 'Disable App';
        const contentClassStatus = this.state.isEnable ? 'btnEnableApp active' : 'btnEnableApp';

        return (
            <div className={'setting'}>
                <div className={'flexible-button flexible-p mb-20'}>
                    <Card title="Flexible Tiktok Button" sectioned>
                        <p>This plugin allows you to display a static/animated floating Tiktok logo or</p>
                        <p>This plugin allows you to display a static/animated fating Tiktok logo or Tikcode (on frontend) linked to your Tiktok account to increase your</p>
                        <p>Tiktok followers.</p>
                        <div className={contentClassStatus}>
                            <Button onClick={this.handleEnableApp} >{contentStatus}</Button>
                        </div>

                    </Card>
                </div>
                <div className={'colLeft w50pc'}>
                    <div className={'button-style-section flexible-p mb-20'}>
                        <Card title="Step 1: Choose the button style" sectioned>
                            <p>Several options are offered as Tiktok button.</p>
                            <p>You may also use a custom image</p>
                            <div className={'group-logo'}>

                                {
                                    listLogoData.map((logoitem, index) => {
                                        debugger
                                        return (
                                            <div key={index} className={'item-logo'}>
                                                <Button onClick={() => { this.changeLogo(logoitem) }}>
                                                    <img src={logoitem} alt="" />
                                                </Button>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className={'cb'}>

                            </div>
                        </Card>
                    </div>
                    <div className={'button-position-section flexible-p mb-20'}>
                        <Card title="Step 2: Choose the button position" sectioned>
                            <div className={title-username}>
                                Tiktok Username  <span style='color:red;'>(*)</span>
                            </div>
                            <TextField
                               placeholder="username"
                                autoComplete="off"
                            />

                        </Card>
                    </div>
                </div>
                <div className='colRight w48pc'>
                    <div className={'Preview'}>
                        <Card title="Preview" sectioned>
                            <SkeletonPage primaryAction secondaryActions={2}>
                                <Layout>
                                    <Layout.Section>
                                        <Card sectioned>
                                            <SkeletonBodyText />
                                        </Card>
                                        <Card sectioned>
                                            <TextContainer>
                                                <SkeletonDisplayText size="small" />
                                                <SkeletonBodyText />
                                            </TextContainer>
                                        </Card>
                                        <Card sectioned>
                                            <TextContainer>
                                                <SkeletonDisplayText size="small" />
                                                <SkeletonBodyText />
                                            </TextContainer>
                                        </Card>
                                    </Layout.Section>
                                </Layout>
                            </SkeletonPage>
                        </Card>
                        <div className={'logo'}>
                            <img src={this.state.getLogo} alt="" />
                        </div>
                    </div>

                </div>
                <div className={'cb'}>

                </div>
            </div>
        );
    }
}

export default Setting;