import React, { useState } from 'react';
import { Form } from './Form';
import { useGetDbData } from '../hooks/useGetDbData';
import { MoneyDataTypes } from './MoneyData';

export const Incomes = () => {
    const [incomesCategories, setIncomesCategories] = useState<MoneyDataTypes[]>([]);
    const [dataList] = useGetDbData<MoneyDataTypes>({url:'http://localhost:3001/incomes', datas: incomesCategories, setDatas:　setIncomesCategories});
    
    return (
        <div>
            <h1>収入</h1>
            {dataList.length > 0 && <Form dataList={dataList}/>}
        </div>
    );
}
