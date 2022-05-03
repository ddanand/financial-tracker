import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./index";

describe("Modal", function () {
  it("should display note", function () {
    const closeNoteFn = jest.fn();
    const screen = render(<Modal note="Test note" closeNote={closeNoteFn} />);

    expect(screen.getByText("Test note")).toBeDefined();
  });

  it("should display button to close the modal", function () {
    const closeNoteFn = jest.fn();
    const screen = render(<Modal note="Test note" closeNote={closeNoteFn} />);

    fireEvent.click(screen.getByRole("button"));
    expect(closeNoteFn).toHaveBeenCalledTimes(1);
  });

  it("should display backdrop to close the modal", function () {
    const closeNoteFn = jest.fn();
    const screen = render(<Modal note="Test note" closeNote={closeNoteFn} />);

    fireEvent.click(screen.getByTestId('backdrop'));
    expect(closeNoteFn).toHaveBeenCalledTimes(1);
  });
});