import React from "react";
import { Offer } from "../../../../@types/index.d";
import "./OfferItem.css";
type Props = {
  data: Offer;
};

export default function OfferItem({ data }: Props) {
  const displayedPrice = data?.prices?.totalPrice?.amount?.display;
  return (
    <div className="wrapper">
      <img src={data?.splashImages?.[0]?.narrowMedium} alt="" className="img" />
      <h3>{data?.description}</h3>
      <h4>{displayedPrice}</h4>
    </div>
  );
}
