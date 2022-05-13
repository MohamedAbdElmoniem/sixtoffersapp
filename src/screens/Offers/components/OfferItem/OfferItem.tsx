import React from "react";
import { Offer } from "../../../../@types/index.d";
import { currency_symbols, defaultCarImg } from "../../../../utils/constants";
import "./OfferItem.css";

type Props = {
  data: Offer;
};

export default function OfferItem({ data }: Props) {
  const totalPrice = data?.prices?.totalPrice?.amount;
  const displayedPrice =
    totalPrice?.display + currency_symbols?.[totalPrice?.currency];
  return (
    <div className="wrapper">
      <img
        src={data?.splashImages?.[0]?.wideLarge || defaultCarImg}
        className="img"
        alt=""
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultCarImg;
        }}
      />
      <div className="content">
        <h3>{data?.description}</h3>
        <h4>{displayedPrice}</h4>
      </div>
    </div>
  );
}
