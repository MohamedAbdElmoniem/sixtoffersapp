import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoadingSpinner } from "../components";
import { ErrorScreen, OffersList } from "../screens";

const AppNavigation = () => {
  const { loading } = useSelector((state: any) => state.app);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<OffersList />}></Route>
          <Route path="offers" element={<OffersList />}></Route>
          <Route path="*" element={<ErrorScreen />}></Route>
        </Routes>
      </BrowserRouter>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default AppNavigation;
