

import { Pagination } from "antd";
import { useState } from "react";
import React from "react";
import styles from "./pagaination.module.css";

function Paginations(props) {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="flex justify-center">
      <Pagination
      className={styles.anticon}
      current={current}
      onChange={onChange}
      total={50}
    />
    </div>
  );
}

export default Paginations;
