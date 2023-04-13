import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
function CartLayout({ children }) {
  return (
    <>
      <header>
        <div className="flex bg-primary-dark text-white rounded-lg px-12 py-5 font-vazir items-center justify-between">
          <div>
            <ShoppingCartOutlinedIcon />
            <span className="text-white px-2">سبد خرید</span>
          </div>
          <div className="basis-1/6 border-dashed border-t-2"></div>
          <div className="text-gray border-gray">
            <TextSnippetOutlinedIcon />
            <span className="text-white px-2">جزئیات پرداخت</span>
          </div>
          <div className="basis-2/6 border-dashed border-t-2 text-gray border-gray"></div>
          <div className="text-gray border-gray">
            <PaymentsOutlinedIcon />
            <span className="text-white px-2">اتمام فرآیند خرید</span>
          </div>
        </div>
      </header>

      {children}
    </>
  );
}

export default CartLayout;
