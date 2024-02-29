import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from './Form';
import { IncomesCategory } from './IncomesCategory';
import { MyButton } from './MyButton';
import { Header } from './Header';
import { IncomesCategoryContext } from './IncomesCategoryProvider';
import { CategoryManagement } from './CategoryManagement';

export const Home = () => {
    return(
        <div className="Home">
            <h1>WalletApp</h1>
            <Header />
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/category" element={<CategoryManagement />} >
                    <Route path="incomes" element={<IncomesCategory />}/>
                </Route>
            </Routes>
        </div>
    );
}