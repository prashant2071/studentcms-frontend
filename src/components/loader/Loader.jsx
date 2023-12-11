import React, { useState } from "react";

import { ClipLoader} from "react-spinners";

const Loader = () => {
  let [color, setColor] = useState("#36d7b7");
  const Loaderoverride = {
    display: "block",
    marginTop:"250px",
    marginLeft:"600px"

  };
  return (
    <>
      <ClipLoader color={color} cssOverride={Loaderoverride} size={80} />
    </>
  );
};

export default Loader;