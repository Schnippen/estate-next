import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <section style={{ backgroundColor: "pink" }}>{children} </section>;
}

export default layout;
