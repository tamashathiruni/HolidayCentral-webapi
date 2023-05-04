import React, { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="sweet-loading text-center">
        <BounceLoader
          color="7772"
          loading={loading}
          cssOverride=""
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
