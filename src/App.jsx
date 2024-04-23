
import React, { useState } from 'react'
import { Button, Layout,Flex } from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons' 
import Sliderbar from './components/Sliderbar'
import CustomerHeader from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import './App.css';


const {Sider,Header, Content} = Layout
const App = () => {
  const [collapsed,setCollapsed] = useState(false)
  return (
  <Layout>
    <Sider 
    theme='light' 
    trigger={null}
    collapsed={collapsed} 
    className='sider'>
    <Sliderbar />


      <Button type='text' 
       icon={collapsed ? < MenuUnfoldOutlined/> : <MenuFoldOutlined/>} 
       onClick={() => setCollapsed(!collapsed)}
       className= "triger-btn"
        />
     </Sider>
   
    <Layout>

      <Header className='header'>
      <CustomerHeader />
        </Header> 

      <Content className='content'>
        <Flex gap='large'>
        <MainContent className='header-icon'/>
        <SideContent className='header-icon'/>
      </Flex>
      </Content>

       
    </Layout>
    
  </Layout>
   
  )
}

export default App
