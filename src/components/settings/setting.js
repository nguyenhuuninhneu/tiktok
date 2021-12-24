import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
import services from '../../services/Services'
import { Card, Button, ButtonGroup, TextField, Layout, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer } from '@shopify/polaris';
import logo from '../../assets/images/tiktok.png'
import logo1 from '../../assets/images/tiktok-1.png'
import logo2 from '../../assets/images/tiktok-2.png'
import '../../assets/css/setting.css';

const listLogoData = [logo, logo1, logo2];
// const shopInfo = services.getShopInfo;
const shopInfo = 'codonqua.myshopify.com';
var objSetting = new Object();
var objShop = new Object();



class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnable: true,
            getLogo: logo,
            indexActiveLogo: 0,
            userName: ' ',
            isBottom: true,
            isLeft: true
        }
        this.GetSetting(shopInfo);

        this.handleEnableApp = this.handleEnableApp.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleBottomTop = this.handleBottomTop.bind(this);
        this.handleLeftRight = this.handleLeftRight.bind(this);

    }
    GetSetting(shopInfoParam) {
        var that = this;
        axios.get(config.rootLink + '/FrontEnd/GetSetting?shop=' + shopInfoParam)
            .then(function (response) {
                if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {
                    objSetting = response.data.setting;
                    objShop = response.data.shop;
                    that.setState(state => ({ isEnable: response.data.setting.Active }));
                    that.setState(state => ({ getLogo: response.data.setting.ButtonStyle === 0 ? logo : response.data.setting.ButtonStyle === 1 ? logo1 : logo2 }));
                    that.setState(state => ({ indexActiveLogo: response.data.setting.ButtonStyle }));
                    that.setState(state => ({ userName: response.data.setting.TiktokUsername }));
                    that.setState(state => ({ isBottom: response.data.setting.ButtonPositionBottomTop === 0 ? true: false }));
                    that.setState(state => ({ isLeft: response.data.setting.ButtonPositionLeftRight === 0 ? true: false }));
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }
    handleEnableApp() {
        var that = this;
        objSetting.Active = !that.state.isEnable;

        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {
                    that.setState(state => ({ isEnable: !that.state.isEnable }));
                    objSetting = response.data.Setting;
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    changeLogo(logoSelected, index) {
        let that = this;
        objSetting.ButtonStyle = index;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {
                    that.setState(state => ({ getLogo: logoSelected }));
                    that.setState(state => ({ indexActiveLogo: index }));
                    objSetting = response.data.Setting;
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    handleChangeUserName(newValue) {
        let that = this;
        that.setState({ userName: newValue })
        if (newValue !== '' && newValue !== null) {
            objSetting.TiktokUsername = newValue;
            axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: objSetting })
                .then(function (response) {
                    // handle success
                    if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {

                        objSetting = response.data.Setting;
                    }

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };

    handleBottomTop() {
        let that = this;
        objSetting.ButtonPositionBottomTop = !that.state.isBottom ? 0 : 1;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {
                    that.setState(state => ({ isBottom: !that.state.isBottom }));
                    objSetting = response.data.Setting;
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    handleLeftRight() {
        let that = this;
        objSetting.ButtonPositionLeftRight = !that.state.isLeft ? 0 : 1;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {
                    that.setState(state => ({ isLeft: !that.state.isLeft }));
                    objSetting = response.data.Setting;
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        const unitPos = '20px';
        const contentStatus = !this.state.isEnable ? 'Enable App' : 'Disable App';
        const contentClassStatus = !this.state.isEnable ? 'btnEnableApp active' : 'btnEnableApp';
        const cssPositionLogo =
            `.setting .colRight .Preview .logo img{`
            + (this.state.isBottom ? `bottom:` + unitPos + `;` : `top:` + unitPos + `;`)
            + (this.state.isLeft ? `left: ` + unitPos + `;` : `right:` + unitPos + `;`) +
            +`}`;
        return (
            <div className={'setting'}>
                <div className={'flexible-button flexible-p mb-20'}>
                    <Card sectioned>
                        <div className={'common-title'}>
                            Flexible Tiktok Button
                        </div>
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
                        <Card sectioned>
                            <div className={'common-title'}>
                                Step 1: Choose the button style
                            </div>
                            <p>Several options are offered as Tiktok button.</p>
                            <p>You may also use a custom image</p>
                            <div className={'group-logo'}>
                                {
                                    listLogoData.map((logoitem, index) => {
                                        return (
                                            <div key={index} className={this.state.indexActiveLogo === index ? 'item-logo active' : 'item-logo'}>
                                                <Button onClick={() => { this.changeLogo(logoitem, index) }}>
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
                        <Card sectioned>
                            <div className={'common-title'}>
                                Step 2: Choose the button position
                            </div>
                            <div className={'group-position'}>
                                <div className={'item-left'}>
                                    <ButtonGroup segmented>
                                        <div className={this.state.isBottom ? 'choose-bottom active' : ''}>
                                            <Button onClick={this.handleBottomTop} >Bottom</Button>
                                        </div>
                                        <div className={!this.state.isBottom ? 'choose-top active' : ''}>
                                            <Button onClick={this.handleBottomTop} >Top</Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                                <div className={'item-right'}>
                                    <ButtonGroup segmented>
                                        <div className={this.state.isLeft ? 'choose-left active' : ''}>
                                            <Button onClick={this.handleLeftRight} >Left</Button>
                                        </div>
                                        <div className={!this.state.isLeft ? 'choose-right active' : ''}>
                                            <Button onClick={this.handleLeftRight} >Right</Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                                <div className={'cb'}>
                                </div>
                            </div>
                            <div className={'title-username'}>
                                Tiktok Username  <span className={'required'}>(*)</span>
                            </div>
                            <div className={'w70pc mt-10'}>
                                <TextField
                                    placeholder="User name"
                                    value={this.state.userName}
                                    onChange={this.handleChangeUserName}
                                    error={this.state.userName === '' ? 'User name is required' : ''}
                                    autoComplete="off"
                                />
                            </div>

                        </Card>
                    </div>
                </div>
                <div className='colRight w48pc'>
                    <div className={'Preview'}>
                        <Card sectioned>
                            <div className={'common-title'}>
                                Preview
                            </div>
                            <div className={'skeleton-section'}>
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
                                        </Layout.Section>
                                    </Layout>
                                </SkeletonPage>
                                <div className={'logo'}>
                                    <style>
                                        {cssPositionLogo}
                                    </style>
                                    <img src={this.state.getLogo} alt="" />
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

export default Setting;