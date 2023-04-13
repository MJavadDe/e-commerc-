import React from "react";
import { Checkbox } from "antd";

const FilterCourseCard = () => {
  return (
    <div className="font-vazir shadow-md col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <div className="flex flex-col w-[90%] p-4 gap-3">
        <h3 className=" self-start">نوع دوره</h3>
        <div className="w-[90%] h-[1px] bg-gray"></div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex justify-between">
            <div className="flex gap-2 w-[90%]">
              <Checkbox></Checkbox>
              <span className="truncate">رایگان</span>
            </div>
            <span className="text-gray">27</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 w-[90%]">
              <Checkbox></Checkbox>
              <span className="truncate">نقدی</span>
            </div>
            <span className="text-gray">27</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 w-[90%]">
              <Checkbox></Checkbox>
              <span className="truncate">تخفیف ویژه</span>
            </div>
            <span className="text-gray">27</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 w-[90%]">
              <Checkbox></Checkbox>
              <span className="truncate">در حال برگزاری</span>
            </div>
            <span className="text-gray">27</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 w-[90%]">
              <Checkbox></Checkbox>
              <span className="truncate">دوره های به اتمام رسیده</span>
            </div>
            <span className="text-gray">27</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCourseCard;
