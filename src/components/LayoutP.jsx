
import React, { useState } from 'react'
import { Button, Layout,Flex } from 'antd'

import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons' 
import Sliderbar from './Sliderbar'
import CustomerHeader from './Header';
import MainContent from './MainContent';
import SideContent from './SideContent';
import Banner from './Banner';



const {Sider,Header, Content} = Layout
const LayoutP = () => {
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
{/* <Banner /> */}
    </Layout>

</Layout>
   
  )
}

export default LayoutP
