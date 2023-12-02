import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Link href={"/user/createuser"}>CREATE NEW USER</Link>
      <Link href={"/user//loginuser"}>LOGIN IN USER</Link>
    </div>
  );
}

export default page;
