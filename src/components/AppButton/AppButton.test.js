import { render, screen } from "@testing-library/react";
import { strings } from "../../localization";
import AppButton from "./AppButton";
describe("Test AppButton Component", () => {
  test("render AppButton successfully", () => {
    const text = strings.bookNow.toUpperCase();
    render(<AppButton />);
    expect(screen.queryByText(text).textContent).toBe(text);
  });
});
