import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns/fp';
import { ja } from 'date-fns/locale';
registerLocale('ja', ja);

export const Calender = () => {
    const Today = new Date();
    const [startDate, setStartDate] = useState(Today);
    const [dateString, setDateString] = useState('');
    let formatDate = format('yyyy-MM-dd');
    
    const getSelectDate = (selectedDate:Date) => {
        setStartDate(selectedDate || Today);
    }
    useEffect(() => {
        let formattedDate = formatDate(startDate);
        setDateString(formattedDate);
    },[startDate]);

    return(
        <div>
            <DatePicker
            showIcon
            dateFormatCalendar="yyyy年 MM月"
            dateFormat="yyyy-MM-dd"
            locale="ja"
            selected={startDate}
            onChange={getSelectDate} />
            <p>{dateString}</p>
        </div>
    );
};