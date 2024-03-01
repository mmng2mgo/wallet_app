import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from './Wrapper';
import { IncomesCategory } from './IncomesCategory';
import { Header } from './Header';
import { CategoryManagement } from './CategoryManagement';
import { Calender } from './Calender';
import { Incomes } from './Incomes';
import { Spending } from './Spending';

export const Home = () => {
    return(
        <div className="Home">
            <h1>WalletApp</h1>
            <Header />
            <Routes>
                <Route path="/" element={<Wrapper />} >
                    <Route path="incomes" element={<Incomes />} />
                    <Route path="spending" element={<Spending />} />
                </Route>
                <Route path="/calender" element={<Calender />}/>
                <Route path="/category" element={<CategoryManagement />} >
                    <Route path="incomes" element={<IncomesCategory />}/>
                </Route>
            </Routes>
        </div>
    );
}