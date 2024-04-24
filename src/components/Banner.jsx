


import React, { useState } from 'react';
import { Card, Flex, Typography, Input,Button,Select } from 'antd';
import { Link, NavLink } from 'react-router-dom';

const { Option } = Select;

const Banner = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <Card style={{ padding: '10px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Flex  style={{ marginBottom: '10px' }}>
        <Flex vertical align='flex-start'>
          <Typography.Title level={3} style={{ marginBottom: '15px', marginTop:'10px' }}>
            Enter your Credentials
          </Typography.Title>
          <Flex gap="1px" align="left">
            <Typography.Text  text='number' strong style={{ width: '120px',marginTop:'20px'}}>
              Customer ID:
            </Typography.Text>
 
            <Input placeholder="Enter customer ID"  style={{ flex: 10 ,marginTop:'10px'}} />
       

    <Flex gap="10px" align="center">
       <Typography.Text strong style={{ width: '60px', margin: '20px 0px 0px 80px' }}>
         Counter:
     
       {/* <Input placeholder="Enter counter"  style={{ flex: 10 ,marginTop:'10px'}} /> */}
       </Typography.Text>
       <Select
     
         style={{width: 200, marginTop: '20px',flex:100, margin:'20px 100px 0px 0px' }}
         onChange={handleSelectChange}
         value={selectedValue}
       
       >
         <Select.Option >Banasthali Khanepani</Select.Option>
         <Select.Option >Goldhunga Khanepani</Select.Option>
         <Select.Option > Dharan Khanepani </Select.Option>
         <Select.Option >Damak KhanePani</Select.Option>
         <Select.Option >Devisddha KhanePani Devinagar, Butwal</Select.Option>
         <Select.Option >KhanePani Sansthan, Nepaljung</Select.Option>
         <Select.Option >Biratnager KhanePani</Select.Option>
         <Select.Option >KhanePani Sastha, Dhangadi</Select.Option>
         <Select.Option >Shivamarg KhanePani, Dhangadi</Select.Option>
         <Select.Option >KhanePani Sasthan, Birjang</Select.Option>
       </Select>
 
     </Flex>


      </Flex>
      </Flex>
      <Flex gap="large">
      <Link to='/payment'> < Button style={{ marginTop: '150px' }}> Proceed </Button></Link>
   
      </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
