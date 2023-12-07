import React from "react";
import Loading from "../_components/Loading/Loading";
function loading() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      <Loading />
    </div>
  );
}

export default loading;
