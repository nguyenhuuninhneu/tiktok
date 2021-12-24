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
const shopInfo = services.getShopInfo;
var objSetting = new Object();
var objShop = new Object();

function GetSetting(shopInfoParam) {
    axios.get(config.rootLink + '/FrontEnd/GetSetting?shop=' + shopInfoParam)
        .then(function (response) {
            if (response !== null && response !== undefined && response.IsSuccess) {
                objSetting = response.setting;
                objShop = response.shop;
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

}
GetSetting(shopInfo);
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnable: objSetting !== null ? objSetting.Active : true,
            getLogo: objSetting == null ? logo : (objSetting.ButtonStyle === 0 ? logo : objSetting.ButtonStyle === 1 ? logo1 : logo2 ),
            indexActiveLogo: objSetting !== null ? objSetting.ButtonStyle : 0,
            userName: objSetting !== null ? objSetting.TiktokUsername  : '',
            isBottom: objSetting !== null && objSetting.ButtonPositionBottomTop === 1 ? true : false,
            isLeft: objSetting !== null && objSetting.ButtonPositionLeftRight  === 1 ? true : false,
            objSetting: objSetting,
            objShop: objShop
        }
        this.handleEnableApp = this.handleEnableApp.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleBottomTop = this.handleBottomTop.bind(this);
        this.handleLeftRight = this.handleLeftRight.bind(this);
    }

    handleEnableApp() {
        this.state.objSetting.Active = !this.state.isEnable;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: this.state.objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.IsSuccess) {
                    this.setState(state => ({ isEnable: !state.isEnable }));
                    this.setState(state => ({ objSetting: response.setting }));
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    changeLogo(logoSelected, index) {
        this.state.objSetting.ButtonStyle  = this.state.indexActiveLogo;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: this.state.objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.IsSuccess) {
                    this.setState(state => ({ getLogo: logoSelected }));
                    this.setState(state => ({ indexActiveLogo: index }));
                    this.setState(state => ({ objSetting: response.setting }));
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    handleChangeUserName(newValue) {
        if (newValue !== '' && newValue !== null) {
            this.state.objSetting.TiktokUsername = newValue;
            axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: this.state.objSetting })
                .then(function (response) {
                    // handle success
                    if (response !== null && response !== undefined && response.IsSuccess) {
                        this.setState({ userName: newValue })
                        this.setState(state => ({ objSetting: response.setting }));
                    }
    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };

    handleBottomTop() {
        this.state.objSetting.ButtonPositionBottomTop = !this.state.isBottom ? 0 : 1;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: this.state.objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.IsSuccess) {
                    this.setState(state => ({ isBottom: !state.isBottom }));
                    this.setState(state => ({ objSetting: response.setting }));
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    handleLeftRight() {
        this.state.objSetting.ButtonPositionLeftRight  = !this.state.isLeft ? 0 : 1;
        axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: this.state.objSetting })
            .then(function (response) {
                // handle success
                if (response !== null && response !== undefined && response.IsSuccess) {
                    this.setState(state => ({ isLeft: !state.isLeft }));
                    this.setState(state => ({ objSetting: response.setting }));
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        const unitPos = '20px';
        const contentStatus = this.state.isEnable ? 'Enable App' : 'Disable App';
        const contentClassStatus = this.state.isEnable ? 'btnEnableApp active' : 'btnEnableApp';
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