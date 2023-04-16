import React from "react";
import SpecialHead from "../footer&components/components/SpecialHead";
import Button from "@/Commons/buttons/Button";
import Link from "next/link";

function HeadBox({ url, title, buttonTitle }) {
  return (
    <div className="flex justify-between my-14 font-vazir items-center">
      <SpecialHead title={title} className="text-secondary-400" />
      <Link href={url}>
        <Button className="bg-secondary-very-light rounded-lg px-4 py-3 text-primary">
          {buttonTitle}
        </Button>
      </Link>
    </div>
  );
}

export default HeadBox;
