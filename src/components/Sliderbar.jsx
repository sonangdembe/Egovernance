import { Flex, Menu} from 'antd';
import React from 'react';
import { IoMdWater } from 'react-icons/io';
import { 
   UserOutlined,
   ProfileOutlined,
   LogoutOutlined,
   OrderedListOutlined,
   CarryOutOutlined,
   SettingOutlined
 } from '@ant-design/icons';

const Sliderbar = () => {
  return (
    <>
    <Flex align='center' justify='center'>
      <div className='logo'>
      <IoMdWater/>
      </div>
    </Flex>

    <Menu 
    mode='inline' 
    defaultSelectedKeys={['1']} 
    className="menu-bar" 
    items={[
      {
        key:'1',
        icon : <UserOutlined />,
        label :"Dashboard",
      },
      {
        key:'2',
        icon : <CarryOutOutlined />,
        label :"my order",
      },
      {
        key:'3',
        icon : <OrderedListOutlined />,
        label :"todo",
      },
      {
      key:'4',
      icon : <ProfileOutlined />,
      label :"profile",
    },
    {
      key:'5',
      icon : <SettingOutlined />,
      label :"setting",
    },
    {
      key:'6',
      icon : <LogoutOutlined/>,
      label :"Logout",
    },
    
  
  ]} />
    </>
  )
}

export default Sliderbar