import React, { useState } from 'react';
import moment from 'moment';
import Modal from '../Modal/index';

import { Payment, Expense } from '../../data';

import classes from "./styles.module.scss";

type PaymentsAndExpensesProps = {
    paymentsData: Array<Payment>;
    expenseData: Array<Expense>;
}

type PaymentsAndExpensesState = {
    note: string,
    openNote: boolean,
};

const PaymentsAndExpenses = (props: PaymentsAndExpensesProps) => {
    const [state, setState] = useState<PaymentsAndExpensesState>({
        note: '',
        openNote: false,
    });

    const showNote=(itemNote)=>{
        if (!itemNote) return;
        
        setState({
            note: itemNote,
            openNote: true,
        });
    }
    const closeNoteHandler = () => {
        setState({
            note: '',
            openNote: false,
        });
    }
    return (
        <>
            {
                props.paymentsData.map((item) => {
                    return (
                        <div
                          className={classes.grid}
                          key={item.id}
                          onClick={() => showNote(item.notes)}
                          data-testid="payment-div"
                        >
                            <div>{item.clientName}</div>
                            <div>{item.amountRecieved}</div>
                            <div>{moment(item.paymentDate).format("MMM Do YY")}</div> 
                            <div>-</div>
                        </div>
                    )
                })
            }
            {
                props.expenseData.map((item) => {
                    return (
                        <div
                          className={classes.grid}
                          key={item.id}
                          onClick={() => showNote(item.notes)}
                          data-testid="expense-div"
                        >
                            <div>{item.clientName}</div>
                            <div>{item.amountSpent}</div>
                            <div>{moment(item.transactionDate).format("MMM Do YY")}</div> 
                            <div>{item.paidTo}</div>
                        </div>
                    )
                })
            }
            {state.openNote && <Modal note={state.note} closeNote={closeNoteHandler}/>}
        </>
    )

}
export default PaymentsAndExpenses;