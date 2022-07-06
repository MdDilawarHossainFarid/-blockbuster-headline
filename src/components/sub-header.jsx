import React from "react";

function SubHeader() {
  return (
    <div className="d-flex">
      <p className="text-black-50">About {0} result found</p>
      <p className="text-black-50 ms-auto">
        {1} page of {100}
      </p>
    </div>
  );
}

export default SubHeader;
