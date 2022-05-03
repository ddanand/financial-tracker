import React from "react";
import moment from 'moment';
import { render, fireEvent } from "@testing-library/react";
import PaymentsAndExpenses from "./index";
import { payments, expenses } from "../../data";

describe("PaymentsAndExpenses", function () {
  it("should display payments", function () {
    const screen = render(<PaymentsAndExpenses paymentsData={payments} expenseData={[]} />);

    expect(screen.getAllByTestId('payment-div').length).toEqual(payments.length);
    expect(screen.getByText(payments[0].clientName)).toBeInTheDocument();
    expect(screen.getByText(payments[0].amountRecieved)).toBeInTheDocument();
    expect(screen.getByText(moment(payments[0].paymentDate).format("MMM Do YY"))).toBeInTheDocument();
    expect(screen.findAllByText('-')).toBeDefined();
  });

  it("should display expenses", function () {
    const screen = render(<PaymentsAndExpenses paymentsData={[]} expenseData={expenses} />);

    expect(screen.getAllByTestId('expense-div').length).toEqual(expenses.length);
    expect(screen.getByText(expenses[0].clientName)).toBeInTheDocument();
    expect(screen.getByText(expenses[0].amountSpent)).toBeInTheDocument();
    expect(screen.getByText(expenses[0].paidTo)).toBeInTheDocument();
    expect(screen.getByText(moment(expenses[0].transactionDate).format("MMM Do YY"))).toBeInTheDocument();
  });

  it("should display notes for payment and button to close the notes modal", function () {
    const screen = render(<PaymentsAndExpenses paymentsData={payments} expenseData={[]} />);

    fireEvent.click(screen.getAllByTestId('payment-div')[0]);
    expect(screen.getByText(payments[0].notes)).toBeDefined();
    expect(screen.getByRole("button").textContent).toEqual("Close");
  });

  it("should display notes for expense and button to close the notes modal", function () {
    const screen = render(<PaymentsAndExpenses paymentsData={[]} expenseData={expenses} />);

    fireEvent.click(screen.getAllByTestId('expense-div')[0]);
    expect(screen.getByText(expenses[0].notes)).toBeDefined();
    expect(screen.getByRole("button").textContent).toEqual("Close");
  });

  it("should not display notes modal for payment if payment has no notes", function () {
    const screen = render(<PaymentsAndExpenses paymentsData={payments} expenseData={[]} />);

    fireEvent.click(screen.getAllByTestId('payment-div')[2]);
    expect(screen.queryByText('Close')).toBeNull();
  });
});