import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddInitialItems } from "./redux-store/itemSlice";
import {
  markFetchDone,
  markFetchingStart,
  markFetchingEnd,
} from "./redux-store/fetchStatusSlice";

function FetchItems() {
  const status = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status.fetchDone) return;
    const Controller = new AbortController();
    const signal = Controller.signal;
    dispatch(markFetchingStart());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items, "dat");
        dispatch(markFetchDone());
        dispatch(AddInitialItems(items[0]));
        dispatch(markFetchingEnd());
      });

    return () => {
      Controller.abort();
    };
  }, [status]);
}

export default FetchItems;
