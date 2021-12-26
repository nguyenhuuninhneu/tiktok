import React from "react";
import ReactDOM from "react-dom";
import {AppProvider,Frame} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';

import App from "./App";
import "@shopify/polaris/build/esm/styles.css";
import"../src/assets/css/responsive.css";


// ReactDOM.render(<AppProvider i18n={en} theme={{colorScheme: "light"}}><App /></AppProvider>, document.getElementById("root"));
ReactDOM.render(<AppProvider><Frame><div className={'orichi-main'} style={{margin : 'auto', width : '70%'}}><App /></div></Frame></AppProvider>, document.getElementById('root'));
