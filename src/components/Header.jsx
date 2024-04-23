import React from 'react';
import {Avatar,Flex, Typography } from 'antd';
import {  NotificationOutlined, UserOutlined} from '@ant-design/icons';
const CustomerHeader = () => {
  return(
   <Flex align='center' justify='space-between'>
   
   <Typography.Title level={3} type="secondary">
      Welcome to water payment  
    </Typography.Title>

    <Flex align="center" gap="10px">
     <NotificationOutlined />
     <Avatar icon={<UserOutlined/>}/>
    </Flex>
  </Flex>
  );
};

export default  CustomerHeader