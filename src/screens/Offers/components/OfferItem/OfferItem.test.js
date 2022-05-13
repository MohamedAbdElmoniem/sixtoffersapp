import { render, screen } from "@testing-library/react";
import { currency_symbols } from "../../../../utils/constants";
import OfferItem from "./OfferItem";

const testData = {
  description: "dummy desc",
  prices: {
    totalPrice: {
      amount: { currency: "EUR", value: 100, display: 100 },
    },
  },
};

describe("Test OfferItem Component", () => {
  test("render OfferItem successfully", () => {
    render(<OfferItem data={testData} />);
    const totalPrice = testData?.prices?.totalPrice?.amount;
    const displayedPrice =
      totalPrice?.display + currency_symbols?.[totalPrice?.currency];
    expect(screen.queryByText(testData.description).textContent).toBe(
      testData.description
    );
    expect(screen.queryByText(displayedPrice).textContent).toBe(displayedPrice);
    expect(screen.getByRole("img")).toBeDefined();
  });
});
