import React from 'react';
import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import {MessageOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
const CustomerHeader = () => {
  return <Flex>
    <Typography.Title level={3} type="secondary">
      Welcome back, 
      </Typography.Title>

      <Flex align='center' gap='3rem'> 
        <Search placeholder='Search Dashboard' allowClear />
      <Flex align='center' gap='10px'>
           <MessageOutlined className='header-icon' />
           <NotificationOutlined />
           <Avatar icon={<UserOutlined/> }/>
      </Flex>
      </Flex>
  </Flex>
};

export default  CustomerHeader