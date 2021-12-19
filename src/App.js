import React, { useState } from 'react';
import './App.css';
import LayoutPixel from './components/pixel/LayoutPixel';


export default function App() {

  const [selectedTab, setselectedTab] = useState(0);
  const AppCallbackSelectedTabFunction = (selected) => {
    setselectedTab(selected);
  }

  return (
    <LayoutPixel selectedTab={selectedTab} AppCallbackSelectedTabFunction={AppCallbackSelectedTabFunction}></LayoutPixel>
    
  );
}
