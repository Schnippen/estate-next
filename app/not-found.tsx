import Link from "next/link";
import React from "react";

function NotFound() {
  const styleContiner: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    userSelect: "none",
    backgroundColor: "#554971",
    color: "#fff",
  };
  const styleWrapper: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: " 300px",
    height: "300px",
  };
  return (
    <div style={styleContiner}>
      <Link href={"/"} style={styleWrapper}>
        <h1>Not Found</h1>
        <h2>Go to homepage</h2>
      </Link>
    </div>
  );
}

export default NotFound;
