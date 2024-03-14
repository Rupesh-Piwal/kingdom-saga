import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="w-[250px] h-[300px] border-2 border-gray-600 mx-20 my-5 ">
      <img className="h-[80%]" src={image} alt="" />
      <h2 className="text-center m-3 text-lg font-semibold text-gray-600">
        {name}
      </h2>
    </div>
  );
};

export default Card;
