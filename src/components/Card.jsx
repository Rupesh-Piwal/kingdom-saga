import React from "react";

const Card = ({ name, image, faction, strength }) => {
  return (
    <div
      className="w-[350px] h-[400px] border-2 border-gray-600 mx-10 my-5 relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-center m-3 text-lg font-semibold text-white bg-black p-1 rounded absolute top-[0px] left-[1px]">
        {name}
      </h2>
      <p className="absolute top-[7px] right-[7px] bg-black p-2 rounded-3xl text-white font-bold">
        {faction}
      </p>
      <p className="absolute top-[55px] left-[11px]  bg-black px-2.5 py-2  rounded-[50%] text-white font-bold">
        {strength}
      </p>
    </div>
  );
};

export default Card;
