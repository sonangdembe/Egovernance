import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'


const MainContent = () => {
  return (
    <div style ={{flex :1}}>
      <Flex vertical gap= "2.3rem">
         <Banner/>     
      </Flex>
    </div>
  )
}

export default MainContent