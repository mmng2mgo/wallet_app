import { SubmitHandler, useForm, } from "react-hook-form";
import React, { useState } from 'react';
import './Edit.css';
import { EditMoneyDataType, MoneyDataTypes } from './MoneyData';

type EditProps = {
    editData: MoneyDataTypes;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Edit({editData, show, setShow}: EditProps){

    const { 
        register, 
        handleSubmit,
    } = useForm<EditMoneyDataType>({});
    //update処理
    const updateData = async (data: EditMoneyDataType) => {
        try{
            const response = await fetch("http://localhost:3001/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch(error) {
            console.log(error);
        }
        setShow(false);
    };

    if(show){
        return(
            <div id="overlay">
                <div id="content">
                    <form onSubmit={handleSubmit(updateData)}>
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