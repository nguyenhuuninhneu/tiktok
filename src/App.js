import React, { useState } from 'react';
import './App.css';
import LayoutPixel from './components/pixel/LayoutPixel';
import Suggestion from './components/suggestion/Suggestion';
import Banner from './components/banner/Banner';


export default function App() {

  const [selectedTab, setselectedTab] = useState(0);
  const AppCallbackSelectedTabFunction = (selected) => {
    setselectedTab(selected);
  }

  return (
    <>
      <LayoutPixel selectedTab={selectedTab} AppCallbackSelectedTabFunction={AppCallbackSelectedTabFunction}></LayoutPixel>
      <Suggestion></Suggestion>
      <Banner></Banner>
    </>
  );
}
