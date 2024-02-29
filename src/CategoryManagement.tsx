import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const CategoryManagement = () => {
    return (
        <>
            <Link to="/category/incomes">収入項目管理</Link>
            <Outlet />
        </>
    )
}