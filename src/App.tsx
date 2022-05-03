import React from 'react';
import ActivitySummary from './components/ActivitySummary/index';
import { payments, expenses } from './data';

const App = ()=>{
    return <ActivitySummary paymentsData={payments} expenseData={expenses} />;
}

 export default App;