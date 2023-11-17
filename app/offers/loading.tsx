import React from "react";
import Loading from "../_components/Loading/Loading";
function loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "var(--primary-text-color)",
      }}
    >
      <Loading />
    </div>
  );
}

export default loading;
