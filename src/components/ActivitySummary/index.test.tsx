import React from "react";
import { render } from "@testing-library/react";
import ActivitySummary from "./index";
import { payments, expenses } from "../../data";

describe("ActivitySummary", function () {
  it("should display column headers", function () {
    const screen = render(<ActivitySummary paymentsData={[]} expenseData={[]} />);

    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Client Name")).toBeInTheDocument();
    expect(screen.getByText("Amount ($)")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Paid to")).toBeInTheDocument();
  });

  it("should not display Payments, Expenses text if there is no paymentsData, expenseData", function () {
    const screen = render(<ActivitySummary paymentsData={[]} expenseData={[]} />);

    expect(screen.queryByText("Payments Received")).toBeNull();
    expect(screen.queryByText("Expenses Incurred")).toBeNull();
  });

  it("should display Payments, Expenses text if there is paymentsData, expenseData", function () {
    const screen = render(<ActivitySummary paymentsData={payments} expenseData={expenses} />);

    expect(screen.queryByText("Payments Received")).not.toBeNull();
    expect(screen.queryByText("Expenses Incurred")).not.toBeNull();
  });

});