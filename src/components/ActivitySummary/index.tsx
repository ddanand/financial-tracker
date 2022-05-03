import React from 'react';
import classes from "./styles.module.scss";
import PaymentsAndExpenses from '../PaymentsAndExpenses/index';
import { Payment, Expense } from "../../data";

type ActivitySummaryProps = {
  paymentsData: Array<Payment>;
  expenseData: Array<Expense>;
}

const ActivitySummary = (props: ActivitySummaryProps) => {
  const { paymentsData, expenseData } = props;

    return <div className={classes.container}>
        Financial Tracker 
        <div className={classes.grid}>
            <div className={classes.type}>Type</div>
            <div className={classes.columnHeaders}>
              <div>Client Name</div>
              <div>Amount</div>
              <div>Date</div>
              <div>Paid to</div>
            </div>
            {paymentsData.length > 0 ? <div 
              className={classes.payment}
              //assign dynamic styles based on data
              style={{gridRowEnd: paymentsData.length+2}}
            >
              Payments Received
            </div> : ""}
            
            <PaymentsAndExpenses expenseData = {expenseData} paymentsData = {paymentsData} />
           
            {expenseData.length ? <div
              className={classes.expenses}
              //assign dynamic styles based on data
              style={{
                gridRowStart: paymentsData.length + 2,
                gridRowEnd: paymentsData.length + 2 + expenseData.length
              }}
            >
              Expenses Incurred
            </div> : ""}
        </div>
     </div>
}
export default ActivitySummary;