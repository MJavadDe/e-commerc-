import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
function CartLayout({ children }) {
  return (
    <>
      <header className="px-4 py-5 my-8 bg-primary-light rounded-lg">
        <div className="flex gap-5 text-center bg-primary-dark text-white rounded-lg px-12 py-5 font-vazir items-center justify-between font-light text-lg">
          <div className="text-white">
            <ShoppingCartOutlinedIcon />
            <span className="px-2">سبد خرید</span>
          </div>
          <div className="basis-2/6 border-dashed border-t-2 border-gray-light"></div>
          <div className="text-gray-light ">
            <TextSnippetOutlinedIcon />
            <span className=" px-2">جزئیات پرداخت</span>
          </div>
          <div className="basis-2/6 border-dashed border-t-2  border-gray-light"></div>
          <div className="text-gray-light">
            <PaymentsOutlinedIcon />
            <span className="px-2">اتمام فرآیند خرید</span>
          </div>
        </div>
      </header>

      {children}
    </>
  );
}

export default CartLayout;
