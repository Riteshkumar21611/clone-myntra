import React from "react";
import { useSelector } from "react-redux";

function BagSummary() {
  const bagItem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const cartItems = items.filter((currItem) => {
    const itemFound = bagItem.indexOf(currItem?.id) >= 0;
    return itemFound;
  });
  const item = {
    totalItem: cartItems.length,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };

  cartItems.forEach((curr) => {
    item.totalMRP += curr?.original_price;
    item.totalDiscount += curr?.original_price - curr?.current_price;
  });

  const deliveryCharges = 99;

  item.finalPayment = item.totalMRP - item.totalDiscount + deliveryCharges;
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({item.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{item.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{item.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{item.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default BagSummary;
