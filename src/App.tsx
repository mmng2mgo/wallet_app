import React, { useEffect, useState } from "react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from './Form';
import { Category } from './Category';
import "../static/styles.css";
 
type DataTypes = {
 id: string;
 categoryname: string;
};

type DataType = {
 categoryname: string;
};

export const App  = () => {
    const [datas, setDatas] = useState<DataTypes[]>([]);
    const { 
        register, 
        handleSubmit 
    } = useForm<DataType>();

    const addData = async (event: DataType) => {
        const { categoryname } = event;
        console.log(categoryname);
        try{
            const response = await fetch("http://localhost:3001", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: { categoryname } }),
            });
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetch('http://localhost:3001')
        .then((response) => response.json())
        .then((data: DataTypes[]) => {
            setDatas(data);
        })
        .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="App">
            <h1>Wallet App</h1>
            <form onSubmit={handleSubmit(addData)}>
                <input type="text" {...register("categoryname")}/>
                <button type="submit">add</button>
            </form>
            <Form />
        </div>
    );
};