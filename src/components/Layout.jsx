import React from "react";
import Card from "./Card";
import generals from "../Data";

const Layout = () => {
  return (
    <div className="flex flex-wrap justify-center border-2 mt-[40px]">
      {generals.map((item) => (
        <Card key={item.id} name={item.name} image={item.image} />
      ))}
    </div>
  );
};

export default Layout;
