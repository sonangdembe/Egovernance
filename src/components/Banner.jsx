

import React from 'react';
import { Card, Flex, Typography, Input, Button } from 'antd';
import { Link } from 'react-router-dom';


const Banner = () => {

  return (
    <Card style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Flex  style={{ marginBottom: '20px' }}>
        <Flex vertical align='flex-start'>
          <Typography.Title level={4} style={{ marginBottom: '10px' }}>
            Enter your Credentials
          </Typography.Title>
          <Flex gap="10px" align="left">
            <Typography.Text type='secondary' text='number' strong style={{ width: '120px'}}>
              Customer ID:
            </Typography.Text>
            <Input placeholder="Enter customer ID"  style={{ flex: 1 }} />
          </Flex>
          <Flex gap="10px" align="center">
            <Typography.Text type='secondary'  strong style={{ width: '120px', marginTop: '10px' }}>
              Counter:
            </Typography.Text>
            <Input placeholder="Enter counter" style={{flex:1, marginTop: '15px'}}/>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="large">
    
      <Button  size='Large'>Procees </Button>
      </Flex>
    </Card>
  );
};

export default Banner;
