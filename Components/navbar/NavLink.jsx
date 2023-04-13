import React from "react";
import Link from "next/link";

export default function NavLink({ url, children, className }) {
  return (
    <Link href={`/${url}`}>
      <span className={`${className}`}>{children}</span>
    </Link>
  );
}
