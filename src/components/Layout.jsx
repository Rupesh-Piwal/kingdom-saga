import Card from "./Card";
import generals from "../Data";
import { useState } from "react";

const Layout = () => {
  const [page, setPage] = useState(22);
  return (
    <div className="flex  bg-red-400 flex-wrap justify-center border-2 mt-[70px]">
      {generals.slice(0, page).map((item) => (
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          faction={item.faction}
          strength={item.strength}
        />
      ))}
    </div>
  );
};

export default Layout;
