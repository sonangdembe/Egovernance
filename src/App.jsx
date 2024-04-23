
import React, { useState } from 'react'
import { Button, Layout,Flex } from 'antd'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons' 
import Sliderbar from './components/Sliderbar'
import CustomerHeader from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import Banner from './components/Banner';
import LayoutP from './LayoutP';
import Payment from './components/Payment'

import './App.css';

// const {Sider,Header, Content} = Layout
const App = () => {

  return (

<>

<Router>
        <Routes>
          <Route path='/' element={<LayoutP />} />
          <Route path='/payment' element={<Payment />} />
            
          
        </Routes>
      </Router>

</>

  )
};

export default App
