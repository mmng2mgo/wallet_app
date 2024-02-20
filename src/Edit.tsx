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

export function Edit({editData, show, setShow}: EditProps){
        if(show){
            return(
                <div id="overlay">
                    <div id="content">
                        {editData.categoryname}
                        <button onClick={() => setShow(false)}>Cancel</button>
                    </div>
                </div>
                );
        }else{
            return null;
        }
    }