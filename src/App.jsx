
import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons' 
import Sliderbar from './components/Sliderbar'
import './App.css';


const {Sider,Header, Content} = Layout
const App = () => {
  const [collapsed,setCollapsed] = useState(false)
  return (<Layout>
    <Sider theme='light' 
    trigger={null}
     collapsed={collapsed} 
     className='sider'>
      <Sliderbar />


      <Button type='text' 
       icon={collapsed ? < MenuUnfoldOutlined/> : <MenuFoldOutlined/>} 
       onclick={() => setCollapsed(!collapsed)}
       className= "triger-btn"
        />
     </Sider>
   
    <Layout>
      <Header className='headeer'></Header>
      <Content className='content'></Content>
    </Layout>
  </Layout>
   
  )
}

export default App