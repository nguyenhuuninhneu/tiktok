import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
import { Card, Button, ButtonGroup, TextField, Layout, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, ContextualSaveBar, Frame, Toast } from '@shopify/polaris';
import logo1 from '../../assets/images/tiktok-1.png'
import logo2 from '../../assets/images/tiktok-2.png'
import logo3 from '../../assets/images/tiktok-3.png'
import logo4 from '../../assets/images/tiktok-4.png'
import '../../assets/css/setting.css';
import Loading from '../plugins/Loading'

const listLogoData = [logo1, logo2, logo3, logo4];
const shopInfo = config.shop;
var objSetting = {};

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingSave: false,
            isHideSaveBar: true,
            isLoaded: false,
            isShowStepChoosePosition: false,
            showToast: null,
            Setting: {
                Active: true,
                getLogo: '',
                indexActiveLogo: 0,
                userName: ' ',
                isBottom: true,
                isLeft: true
            }
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
                    // objShop = response.data.shop;
                    that.setState({
                        Setting: {
                            ...that.state.Setting,
                            Active: response.data.setting.Active,
                            getLogo: response.data.setting.ButtonStyle === 1 ? logo1 : response.data.setting.ButtonStyle === 2 ? logo2 : response.data.setting.ButtonStyle === 3 ? logo3 : response.data.setting.ButtonStyle === 4 ? logo4 : '',
                            indexActiveLogo: response.data.setting.ButtonStyle,
                            userName: response.data.setting.TiktokUsername,
                            isBottom: response.data.setting.ButtonPositionBottomTop === 0 ? true : false,
                            isLeft: response.data.setting.ButtonPositionLeftRight === 0 ? true : false
                        }
                    });
                    if (objSetting.ButtonStyle === 0) {
                        that.setState(state => ({ isShowStepChoosePosition: false }));
                    }
                    else {
                        that.setState(state => ({ isShowStepChoosePosition: true }));

                    }
                    that.setState(state => ({ isLoaded: true }));
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }
    DiscardChange() {
        var that = this;
        that.setState(state => ({ isLoadingSave: false }));
        that.setState(state => ({ isHideSaveBar: true }));
        if (objSetting.ButtonStyle === 0) {
            that.setState(state => ({ isShowStepChoosePosition: false }));
        }
        that.setState({
            Setting: {
                ...that.state.Setting,
                Active: objSetting.Active,
                getLogo: objSetting.ButtonStyle === 1 ? logo1 : objSetting.ButtonStyle === 2 ? logo2 : objSetting.ButtonStyle === 3 ? logo3 : objSetting.ButtonStyle === 4 ? logo4 : '',
                indexActiveLogo: objSetting.ButtonStyle,
                userName: objSetting.TiktokUsername,
                isBottom: objSetting.ButtonPositionBottomTop === 0 ? true : false,
                isLeft: objSetting.ButtonPositionLeftRight === 0 ? true : false
            }
        });
    }
    handleEnableApp() {
        var that = this;
        that.setState({
            Setting: {
                ...that.state.Setting,
                Active: !that.state.Setting.Active
            }
        });
        that.setState(state => ({ isHideSaveBar: false }));
    }
    changeLogo(logoSelected, index) {
        let that = this;
        that.setState({
            Setting: {
                ...that.state.Setting,
                getLogo: logoSelected,
                indexActiveLogo: index
            }
        });
        that.setState(state => ({ isShowStepChoosePosition: true }));
        that.setState(state => ({ isHideSaveBar: false }));
    }
    handleChangeUserName(newValue) {
        let that = this;
        that.setState({
            Setting: {
                ...that.state.Setting,
                userName: newValue.trim()
            }
        });
        that.setState(state => ({ isHideSaveBar: false }));
    };

    handleBottomTop() {
        let that = this;
        that.setState({
            Setting: {
                ...that.state.Setting,
                isBottom: !that.state.Setting.isBottom
            }
        });
        that.setState(state => ({ isHideSaveBar: false }));
    }
    handleLeftRight() {
        let that = this;
        that.setState({
            Setting: {
                ...that.state.Setting,
                isLeft: !that.state.Setting.isLeft
            }
        });
        that.setState(state => ({ isHideSaveBar: false }));
    }

    render() {
        const unitPos = '20px';
        const contentStatus = !this.state.Setting.Active ? 'Enable App' : 'Disable App';
        const contentClassStatus = !this.state.Setting.Active ? 'btnEnableApp active' : 'btnEnableApp';
        const cssPositionLogo =
            `.setting .colRight .Preview .logo img{`
            + (this.state.Setting.isBottom ? `bottom:` + unitPos + `;` : `top:` + unitPos + `;`)
            + (this.state.Setting.isLeft ? `left: ` + unitPos + `;` : `right:` + unitPos + `;`) +
            +`}`;
        if (!this.state.isLoaded) {
            return (<Loading />);
        } else {
            return (

                <>
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
                                                    <div key={index + 1} className={this.state.Setting.indexActiveLogo === index + 1 ? 'item-logo active' : 'item-logo'}>
                                                        <Button onClick={() => { this.changeLogo(logoitem, index + 1) }}>
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
                            {this.state.isShowStepChoosePosition &&
                                <>
                                    <div className={'button-position-section flexible-p mb-20'}>
                                        <Card sectioned>
                                            <div className={'common-title'}>
                                                Step 2: Choose the button position
                                            </div>
                                            <div className={'group-position'}>
                                                <div className={'item-left'}>
                                                    <ButtonGroup segmented>
                                                        <div className={this.state.Setting.isBottom ? 'choose-bottom active' : ''}>
                                                            <Button onClick={this.handleBottomTop} >Bottom</Button>
                                                        </div>
                                                        <div className={!this.state.Setting.isBottom ? 'choose-top active' : ''}>
                                                            <Button onClick={this.handleBottomTop} >Top</Button>
                                                        </div>
                                                    </ButtonGroup>
                                                </div>
                                                <div className={'item-right'}>
                                                    <ButtonGroup segmented>
                                                        <div className={this.state.Setting.isLeft ? 'choose-left active' : ''}>
                                                            <Button onClick={this.handleLeftRight} >Left</Button>
                                                        </div>
                                                        <div className={!this.state.Setting.isLeft ? 'choose-right active' : ''}>
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
                                                    value={this.state.Setting.userName}
                                                    onChange={this.handleChangeUserName}
                                                    error={this.state.Setting.userName === '' ? 'User name is required' : ''}
                                                    autoComplete="off"
                                                />
                                            </div>

                                        </Card>
                                    </div>
                                </>}
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
                                            <img src={this.state.Setting.getLogo} alt="" />
                                        </div>
                                    </div>

                                </Card>
                            </div>

                        </div>
                        <div className={'cb'}>
                        </div>
                        <div className={this.state.isHideSaveBar ? 'hide' : ''}>
                            <Frame>
                                <ContextualSaveBar
                                    message="Unsaved changes"
                                    saveAction={{
                                        content: "Save",
                                        onAction: () => {
                                            var that = this;
                                            if ((that.state.Setting.userName !== '' && that.state.Setting.userName !== null && that.state.Setting.userName.trim() !== '') || (that.state.Setting.indexActiveLogo === 0 && that.state.Setting.userName.trim() === '')) {
                                                that.setState(state => ({ isLoadingSave: true }));
                                                objSetting.Active = that.state.Setting.Active;
                                                objSetting.TiktokUsername = that.state.Setting.userName;
                                                objSetting.ButtonStyle = that.state.Setting.indexActiveLogo;
                                                objSetting.ButtonPositionBottomTop = that.state.Setting.isBottom ? 0 : 1;
                                                objSetting.ButtonPositionLeftRight = that.state.Setting.isLeft ? 0 : 1;
                                                axios.post(config.rootLink + '/FrontEnd/UpdateSetting', { obj: objSetting })
                                                    .then(function (response) {
                                                        // handle success
                                                        if (response !== null && response !== undefined && response.data !== undefined && response.data !== null) {
                                                           
                                                           if (response.data.IsSuccess) {
                                                            that.setState(state => ({ isLoadingSave: false }));
                                                            that.setState(state => ({ isHideSaveBar: true }));
                                                            that.setState({ showToast: <Toast content={"Save!"} onDismiss={() => { that.setState({ showToast: null }) }} duration={4500}></Toast> });
                                                            objSetting = response.data.Setting;
                                                           } else {
                                                            that.setState(state => ({ isLoadingSave: false }));
                                                            that.setState(state => ({ isHideSaveBar: true }));
                                                            that.setState({ showToast: <Toast content={response.data.Messenger} onDismiss={() => { that.setState({ showToast: null }) }} duration={4500}></Toast> });
                                                           }
                                                        }

                                                    })
                                                    .catch(function (error) {
                                                        
                                                        var that = this;
                                                        that.DiscardChange();
                                                        that.setState({ showToast: <Toast content={"Error!"} onDismiss={() => { that.setState({ showToast: null }) }} duration={4500}></Toast> });
                                                        // handle error
                                                        console.log(error);
                                                    });
                                            }

                                        },
                                        loading: this.state.isLoadingSave,
                                        disabled: false,
                                    }}
                                    discardAction={{
                                        content: "Discard",
                                        onAction: () => {
                                            var that = this;
                                            that.DiscardChange();

                                        },
                                    }}
                                />
                                {this.state.showToast}
                            </Frame>
                        </div>

                    </div>
                </>

            );
        }

    }
}

export default Setting;