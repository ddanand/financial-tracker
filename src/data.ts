
export type Payment = {
    id:string|number;
    notes: string;
    clientName: string;
    amountRecieved: number;
    paymentDate: string;
}

export type Expense = {
    id:string|number;
    notes: string;
    clientName: string;
    amountSpent: number;
    transactionDate: string;
    paidTo: string;
}

const payments: Array<Payment> = [{
    id:1,
    clientName: "Microsoft",
    amountRecieved: 10000,
    paymentDate: "Apr 03 2022",
    notes: "Salary paid for employee X",
}, {
    id:2,
    clientName: "Apple",
    amountRecieved: 12000,
    paymentDate: "Apr 04 2022",
    notes: "Salary paid for employee Y",
}, {
    id:3,
    clientName: "Apple",
    amountRecieved: 11000,
    paymentDate: "Apr 09 2022",
    notes: "",
}];

const expenses: Array<Expense> = [{
    id:1,
    clientName: "Microsoft",
    paidTo: "ABC Airlines",
    amountSpent: 800,
    transactionDate: "Apr 03 2022",
    notes: "Ticket booked to travel to client's office",
}, {
    id:2,
    clientName: "Apple",
    paidTo: "Computers Inc",
    amountSpent: 1800,
    transactionDate: "Apr 07 2022",
    notes: "Setup work from home office",
}];

export {
    expenses,
    payments
}