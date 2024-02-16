import React from 'react';
type DataTypes = {
    id: string;
    categoryname: string;
};
type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;


export const Category = ({ datas, onSubmit}: { datas: DataTypes[], onSubmit: SubmitHandler}) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="categoryname"/>
                <button type="submit">add</button>
            </form>
            <table>
                <tbody>
                    <tr>
                        <th>収入カテゴリー</th>
                    </tr>
                        {datas.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}:{data.categoryname}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};