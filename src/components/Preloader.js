import React, { Fragment } from "react";
import preloader from "./preloader.gif";
const Preloader = () => (
  <Fragment>
    <img
      src={preloader}
      alt="loading..."
      style={{
        width: "100px",
        height: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "200px",
        alignSelf: "center",
        display: "block"
      }}
    />
  </Fragment>
);
export default Preloader;
