import React from "react";

const TextGrey = ({ text, l = false }) => {
  return (
    <p
      className={`bg-[#D3D3D3] rounded-full w-fit ${!l && "mx-auto"} px-4 py-2`}
    >
      {text}
    </p>
  );
};

export default TextGrey;
