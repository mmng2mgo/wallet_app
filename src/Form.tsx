import React from 'react';
import './Form.css'
import { MoneyDataTypes } from './MoneyData';
//Formの引数がincomesとspendingの場合で異なるもしくはプロバイダの変更、categoryのセレクトボックスコンポーネント

interface FormProps {
    dataList: MoneyDataTypes[];
}

export function Form(props: FormProps) {
    const { dataList } = props;

    return (
        <div className="container">
            <form>
                <div className='inputrow'>
                    <label>
                        金額:
                        <input name="amount"/>
                    </label>
                </div>
                <div className='inputrow'>
                    <label>
                        カテゴリー:
                        <input name="category"/>
                    </label>
                </div>
                <div className='inputrow'>
                    <label>
                        備考:
                        <input name="memo"/>
                    </label>
                </div>
                <div className='inputrow'>
                    <label>
                        日付:
                        <input name="date"/>
                    </label>
                </div>
                <input type="submit" value="保存"/>
            </form>
            <tbody>
                {dataList.map((data) => (
                    <tr key={data.id}>
                        <td>{data.categoryname}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

// export function Form(dataList: MoneyDataTypes[]) {
//     return (
//         <div className="container">
//             <form>
//                 <div className='inputrow'>
//                     <label>
//                         金額:
//                         <input name="amount"/>
//                     </label>
//                 </div>
//                 <div className='inputrow'>
//                     <label>
//                     {/* カテゴリーのvalueはpropsで受け取る */}
//                         カテゴリー:
//                         <input name="category"/>
//                     </label>
//                 </div>
//                 <div className='inputrow'>
//                     <label>
//                         備考:
//                         <input name="memo"/>
//                     </label>
//                 </div>
//                 <div className='inputrow'>
//                     <label>
//                         日付:
//                         <input name="date"/>
//                     </label>
//                 </div>
//                 <input type="submit" value="保存"/>
//             </form>
//             <tbody>
//                     {dataList.map((data) => (
//                         <tr key={data.id}>
//                             <td>{data.categoryname}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//         </div>
//     );
// }