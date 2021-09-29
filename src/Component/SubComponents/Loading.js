import React from "react";
import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
import PuffLoader from "react-spinners/PuffLoader"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
  // let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading mt-5">
      <PuffLoader color="#3a92e5" loading={true} css={override} size={200} />
    </div>
  );
}

export default Loading;
