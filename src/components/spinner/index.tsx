import React from "react";

function Spinner() {
  return (
    <div className="lds-grid animate-pulse">
      <div className="bg-[#8D3123]"></div>
      <div className="bg-[#3D5D0D]"></div>
      <div className="bg-[#F17C4A]"></div>
      <div className="bg-[#EE3A43]"></div>
      <div className="bg-[#7B9F19]"></div>
      <div className="bg-[#F5BD25]"></div>
      <div className="bg-[#FF0018]"></div>
      <div className="bg-[#A65031]"></div>
      <div className="bg-[#76892B]"></div>
    </div>
  );
}

export default Spinner;
