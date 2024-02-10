import React from 'react';
import './Form.css'
export function Form(){
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
                    {/* カテゴリーのvalueはpropsで受け取る */}
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
        </div>
    );
}