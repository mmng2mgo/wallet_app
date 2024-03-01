import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Spending } from './Spending';
import { Incomes } from './Incomes';

export const Wrapper = () => {
    const [ selectTab, setSelectTab ] = useState('');
    return (
        <div>
            <Link to="/spending" onClick={() => setSelectTab('spending')}>支出</Link>
            <Link to="/incomes" onClick={() => setSelectTab('incomes')}>収入</Link>
            <Outlet />
        </div>
    );
}