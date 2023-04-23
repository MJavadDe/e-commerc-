import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({
  url,
  children,
  className = "",
  onClick = () => {},
  onMouseEnter
}) {
  const router = useRouter();
  return (
    <Link href={`/${url} `}>
      <span
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`${className} ${
          router.pathname == `/${url}` ? "active" : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
}
