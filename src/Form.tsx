import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Form.css'
import { MoneyDataTypes } from './MoneyData';
//引数にurlを追加。usePostDbDataを用いてdbを操作できるようにする

interface FormProps {
    dataList: MoneyDataTypes[];
}

export function Form(props: FormProps) {
    const { dataList } = props;
    const { register, handleSubmit } = useForm();

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
                <select {...register("incomesCategoryId")}>
                    {dataList.map((data) => {
                        return (
                            <option key={data.id} value={data.id}>
                                {data.categoryname}
                            </option>
                        );
                    })}
                </select>
                <input type="submit" value="保存"/>
            </form>
        </div>
    );
}