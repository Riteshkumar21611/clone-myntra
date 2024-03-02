import React from "react";
import BagSummary from "../BagSummary";
import BagItem from "../BagItem";
import { useSelector } from "react-redux";

function Bag() {
  const bagItem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const cartItems = items.filter((currItem) => {
    const itemFound = bagItem.indexOf(currItem?.id) >= 0;
    return itemFound;
  });

  console.log(cartItems, `,<items in cart`);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {cartItems.map((item) => {
              return <BagItem item={item} />;
            })}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
}

export default Bag;
