import React from "react";
import { useSelector } from "react-redux";
import OfferItem from "../components/OfferItem/OfferItem";
import { Offer } from "../../../@types/index.d";
import { AppButton } from "../../../components";
import "./OffersList.css";

export default function OffersList() {
  const { offersData } = useSelector((state: any) => state.offers);
  return (
    <div className="listWrapper">
      {offersData?.offers?.map((offer: Offer, index: number) => {
        return (
          <div className="offerItemWrapper">
            <OfferItem data={offer} key={index} />
            <AppButton />
          </div>
        );
      })}
    </div>
  );
}
