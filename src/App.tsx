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

//post処理
    const addData = async (data: DataType) => {
        try{
            const response = await fetch("http://localhost:3001/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch(error) {
            console.log(error);
        }
    };
//delete処理
    const deleteData = async (id: string) => {
        try{
            console.log(id);
            console.log(datas.filter((data) => data.id === id));
            const response = await fetch(`http://localhost:3001/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(!response.ok){
                throw new Error("Failed to delete data");
            }
            const newData = datas.filter((data) => data.id !== id);
            setDatas(newData)
            console.log(newData);
        } catch(error) {
            console.log(error);
        }
    };
//get処理
    useEffect(() => {
        fetch('http://localhost:3001')
        .then((response) => response.json())
        .then((data: DataTypes[]) => {
            setDatas(data);
        })
        .catch((error) => console.error('Error:', error));
    }, [datas]);

    return (
        <div className="App">
            <h1>Wallet App</h1>
            <form onSubmit={handleSubmit(addData)}>
                <input type="text" {...register("categoryname")}/>
                <button type="submit">add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>収入カテゴリー</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data) => (
                        <tr key={data.id}>
                            <td>{data.categoryname}</td>
                            <td>
                                <button onClick={() => deleteData(data.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Form />
        </div>
    );
};