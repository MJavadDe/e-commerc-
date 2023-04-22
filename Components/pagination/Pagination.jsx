import { Pagination } from "antd";
import { useState } from "react";
import React from "react";
import styles from "./pagaination.module.css";
import { useRouter } from "next/router";

function Paginations({ total, mypage }) {
  const router = useRouter()
  console.log(router);
  const [current, setCurrent] = useState(router.query.page ? router.query.page : 1);
  const onChange = (page) => {
    setCurrent(page);
    router.push(`?page=${page}`)
  };
  return (
    <div className="flex justify-center h-16 mx-auto items-center w-[320px] shadow-all rounded-lg mt-10">
      <Pagination
        className={styles.anticon}
        current={current}
        onChange={onChange}
        total={total}
      />
    </div>
  );
}

export default Paginations;

// class="ant-pagination-item ant-pagination-item-5 ant-pagination-item-active"
