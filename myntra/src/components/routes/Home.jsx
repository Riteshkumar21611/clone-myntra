import React from "react";
import HomeItem from "../HomeItem";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((state) => state.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => {
            return <HomeItem key={item.id} item={item} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
