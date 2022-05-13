import React from "react";
import { strings } from "../../localization";
import "./AppButton.css";

export default function AppButton() {
  return <button className="appBtn">{strings.bookNow.toUpperCase()}</button>;
}
