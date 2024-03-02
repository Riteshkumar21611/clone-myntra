import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import FetchItems from "../fetchItems";
import { useSelector } from "react-redux";
import Loader from "../Loader";

function App() {
  const status = useSelector((status) => status.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {status.fetchDone ? <Outlet /> : <Loader />}
      <Footer />
    </>
  );
}

export default App;
