import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>  
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <div className='row mt-3'>
                    <ExpenseList />
                </div>
                <div className='row mt-3'>
                    <h2 className='mt-3'>Change allocation</h2>
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;