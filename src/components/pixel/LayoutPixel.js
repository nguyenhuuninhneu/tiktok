import React, {  Component } from 'react';
import { Tabs, Card } from '@shopify/polaris';
import Setting from '../settings/setting';
import FAQ from '../settings/faq';

const tabs = [
    {
        id: 'setting',
        content: 'Settings',
        accessibilityLabel: 'setting tab',
        panelID: 'setting panelId',
    },
    {
        id: 'faq',
        content: 'FAQ',
        panelID: 'faq panelId',
    }
];
class LayoutPixel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TabIndex: 0,
            tabs: tabs
        }
    }

    handleTabChange =
        (selected) => {
            this.props.AppCallbackSelectedTabFunction(selected);
        };

    render() {
        switch (this.props.selectedTab) {
            case 0:
                return (
                    <div className={'main-layout'}>
                        <div className={'header-item'}>
                            <Card>
                                <Tabs tabs={tabs} selected={this.props.selectedTab} onSelect={this.handleTabChange}>
                                </Tabs>
                            </Card>
                        </div>
                        <div className={'container'}>
                            <Setting></Setting>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className={'main-layout'}>
                        <div className={'header-item'}>
                            <Card>
                                <Tabs tabs={tabs} selected={this.props.selectedTab} onSelect={this.handleTabChange}>
                                </Tabs>
                            </Card>
                        </div>
                        <div className={'container'}>
                            <FAQ></FAQ>

                        </div>
                    </div>
                );

            default:
                break;
        }

    }
}

export default LayoutPixel;