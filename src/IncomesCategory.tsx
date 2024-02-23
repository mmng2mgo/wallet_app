import React, {useEffect, useState, createContext} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from './Form';
import { Category } from './Category';
import { Edit } from './Edit';
import "../static/styles.css";

type DataTypes = {
    id: string;
    categoryname: string;
};
   
type DataType = {
categoryname: string;
editCategoryName: string;
};

export const DatasContext = createContext(null);

export function IncomesCategory(){

    const [datas, setDatas] = useState<DataTypes[]>([]);
    //edit画面の表示
    const [show, setShow] = useState(false);
    const [showStates, setShowStates] = useState<boolean[]>([]);
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
//update画面を表示するボタン
    const handleEditButton = (index: number) => {
        //スプレッド構文で配列をコピー
        const newShowStates = [...showStates];
        newShowStates[index] = !newShowStates[index];
        setShowStates(newShowStates);
        setShow(true);
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
        <div className="IncomesCategory">
            <h1>Wallet App</h1>
            <div>
                <h3>新規登録</h3>
                <form onSubmit={handleSubmit(addData)}>
                    <input type="text" {...register("categoryname")}/>
                    <button type="submit">add</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>収入カテゴリー</th>
                        <th>編集</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                        <tr key={data.id}>
                            <td>{data.categoryname}</td>
                            <td>
                                <button onClick={() => handleEditButton(index)}>edit</button>
                                {show && showStates[index] && <Edit editData={data} show={show} setShow={setShow}/>}
                            </td>
                            <td>
                                <button onClick={() => deleteData(data.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}