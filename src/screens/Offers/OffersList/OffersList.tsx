import React from "react";
import { useSelector } from "react-redux";
import OfferItem from "../components/OfferItem/OfferItem";
import { Offer } from "../../../@types/index.d";

export default function OffersList() {
  const { offersData } = useSelector((state: any) => state.offers);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {offersData?.offers?.map((offer: Offer, index: number) => {
        return <OfferItem data={offer} key={index} />;
      })}
    </div>
  );
}
