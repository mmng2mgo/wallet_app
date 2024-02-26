import React, {useEffect, useState, createContext} from "react";
import { Edit } from './Edit';
import "../static/styles.css";
import { MoneyDataTypes, MoneyDataType } from './MoneyData';
import { useGetDbData } from '../hooks/useGetDbData';
import { usePostDbData } from '../hooks/usePostDbData';

export const DatasContext = createContext(null);

export function IncomesCategory(){

    const [incomesCategories, setIncomesCategories] = useState<MoneyDataTypes[]>([]);
    //edit画面の表示
    const [show, setShow] = useState(false);
    const [showStates, setShowStates] = useState<boolean[]>([]);
    //post処理
    const { register, handleSubmit, addData } = usePostDbData<MoneyDataType>("http://localhost:3001/add");
    //delete処理
    const deleteData = async (id: string) => {
        try{
            console.log(id);
            console.log(incomesCategories.filter((incomesCategory) => incomesCategory.id === id));
            const response = await fetch(`http://localhost:3001/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(!response.ok){
                throw new Error("Failed to delete data");
            }
            const newData = incomesCategories.filter((incomesCategory) => incomesCategory.id !== id);
            setIncomesCategories(newData)
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
    const [dataList] = useGetDbData<MoneyDataTypes>({url:'http://localhost:3001', datas: incomesCategories, setDatas:　setIncomesCategories});
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
                    {dataList.map((data, index) => (
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