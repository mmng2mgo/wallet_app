import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calender">カレンダー</Link></li>
                <li><Link to="/category">収支テーブル管理</Link></li>
            </ul>       
        </div>
    )
}