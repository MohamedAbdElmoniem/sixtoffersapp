import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { LoadingSpinner } from "../components";
import { OffersList } from "../screens";

const AppNavigation = () => {
  const { loading } = useSelector((state: any) => state.app);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<OffersList />}></Route>
          <Route path="offers" element={<OffersList />}></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </BrowserRouter>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default AppNavigation;
