import { SubmitHandler } from "react-hook-form";
import React from 'react';
import './Edit.css';
import { EditMoneyDataType, MoneyDataTypes } from './MoneyData';
import { useEditDbData } from '../hooks/useEditDbData';

type EditProps = {
    editData: MoneyDataTypes;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Edit({editData, show, setShow}: EditProps){

    //update処理
    const { register, handleSubmit, updateData } = useEditDbData<EditMoneyDataType>("http://localhost:3001/incomes/update");
    const onSubmit: SubmitHandler<EditMoneyDataType> = async (data) => {
        await updateData(data);
        setShow(false);
    };
    if(show){
        return(
            <div id="overlay">
                <div id="content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" {...register("id",{ value: editData.id })}/>
                        <input type="text" {...register("editCategoryname",{value: editData.categoryname})}/>
                        <button type="submit">submit</button>
                    </form>
                    <button onClick={() => setShow(false)}>Cancel</button>
                </div>
            </div>
            );
    }else{
        return null;
    }
}