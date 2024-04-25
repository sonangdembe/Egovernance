import React, { useState } from 'react';
import { DatePicker, Input, Button, Typography, Space, Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import Khalti from './khalti/Khalti';
import '../App.css'; 

const Payment = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(null);
  const [previousAmount, setPreviousAmount] = useState('');
  const [fine, setFine] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handlePreviousAmountChange = (e) => {
    setPreviousAmount(e.target.value);
  };

  const calculateFine = () => {
    if (!date) {
      return;
    }

    const currentDate = moment();
    const dueDate = moment(date);
    const daysDifference = currentDate.diff(dueDate, 'days');

    if (daysDifference >= 90) {
      setFine(previousAmount * 0.5);
    } else if (daysDifference >= 60) {
      setFine(previousAmount * 0.15);
    } else if (daysDifference >= 30) {
      setFine(previousAmount * 0.05);
    } else {
      setFine(0);
    }
  };

  const handleCalculateTotal = () => {
    const previousAmountValue = parseFloat(previousAmount);
    const total = previousAmountValue + fine;
    setTotalAmount(total.toFixed(2));
  };

  return (
    <div className="container">
      <div className="center">
      <div className='content'> 
        <Typography.Title level={2}>Payment System</Typography.Title>
        <Row justify="center">
          <Col span={8}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <DatePicker placeholder="Due Date" onChange={handleDateChange} />
              <Input
                placeholder="Previous Amount"
                value={previousAmount}
                onChange={handlePreviousAmountChange}
              />
              <Button type="primary" onClick={calculateFine}>Calculate Fine</Button>
              <Typography.Text>Fine: ${fine.toFixed(2)}</Typography.Text>
              <Button type="primary" onClick={handleCalculateTotal}>Calculate Total</Button>
              <Typography.Title level={4}>Total Amount: ${totalAmount}</Typography.Title>
            </Space>
          </Col>
        </Row>
        {/* <Link to='/paymentProcess'> < Button style={{ marginTop: '0px' }}> Proceed </Button></Link> */}

      <Khalti />
        </div>
      </div>
    </div>
  );
};

export default Payment;

