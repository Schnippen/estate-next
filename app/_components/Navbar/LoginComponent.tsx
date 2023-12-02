"use client";
import Link from "next/link";
import React from "react";
// ask redux state if user is logged in?
function LoginComponent() {
  return (
    <Link href={`user`}>
      <div>Log In</div>
    </Link>
  );
}

export default LoginComponent;
