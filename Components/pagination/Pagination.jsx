import React, { useState } from 'react';
import { Pagination } from 'antd';
import styles from './style.css'

function Paginations(props) {
    const [current, setCurrent] = useState(1);

  const onChange= (page) => {
    setCurrent(page);
  };
    return (
          <Pagination current={current} onChange={onChange} total={80} />  
    );
}

export default Paginations;