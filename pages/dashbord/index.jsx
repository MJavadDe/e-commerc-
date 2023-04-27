import DashboardTable from "@/Components/dashboardTable/dashboardTable";
import Layout from "@/layouts/layout";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import Avatar from "@/Components/avatar/Avatar";
// import Avatar from "@/Components/profileAvatar/Avatar";
// import avatarimg from "public/teacher-doing-her-classes-online-home_23-2148572340.png";

const Dashbord = () => {
  return (
    <div className="flex h-full gap-40 ">
    <div className="h-[450px] w-[20%] bg-primary-light">
      <Avatar/>
    </div>
    <div className="w-[70%]">
    <DashboardTable/>
    </div>
    </div>
  );
};

export default Dashbord;
