import { SubmitHandler, useForm } from "react-hook-form";
import React from 'react';
import './Edit.css';
type DataTypes = {
    id: string;
    categoryname: string;
};
type EditProps = {
    editData: DataTypes;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
type DataType = {
    id: string;
    editCategoryname: string;
   };

export function Edit({editData, show, setShow}: EditProps){

    const { 
        register, 
        handleSubmit 
    } = useForm<DataType>();
    //update処理
    const updateData = async (data: DataType) => {
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
                        <input type="text" {...register("editCategoryname")}/>
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