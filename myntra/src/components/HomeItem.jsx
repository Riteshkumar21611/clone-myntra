import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBag, removeBag } from "./redux-store/bagSlice";

function HomeItem({ item }) {
  const bagElement = useSelector((state) => state.bag);
  const availItem = bagElement.indexOf(item.id) >= 0;

  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addBag(item.id));
  };

  const removeCart = (item) => {
    dispatch(removeBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item?.image} alt="item image" />
      <div className="rating">
        {item?.rating?.stars} ⭐ | {item?.rating?.count}
      </div>
      <div className="company-name">{item?.company}</div>
      <div className="item-name">{item?.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item?.current_price}</span>
        <span className="original-price">Rs {item?.original_price}</span>
        <span className="discount">({item?.discount_percentage}% OFF)</span>
      </div>

      {!availItem ? (
        <button
          type="button"
          className=" btn-add-bag btn btn-sucess"
          onClick={() => handleAddCart(item)}
        >
          Add to Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-remove-bag btn-danger"
          onClick={() => removeCart(item)}
        >
          Remove from Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;
