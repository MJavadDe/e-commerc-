import { Pagination } from "antd";
import { useState } from "react";
import React from "react";
import styles from "./pagaination.module.css";

function Paginations({ total, mypage }) {
  console.log(mypage);
  const [current, setCurrent] = useState(mypage);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="flex justify-center h-16 mx-auto items-center w-[320px] shadow-all rounded-lg">
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

// class="ant-pagination-item ant-pagination-item-5 ant-pagination-item-active"
