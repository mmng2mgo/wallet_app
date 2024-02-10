import React, { useEffect, useState } from "react";
import { Form } from './Form';
import "../static/styles.css";
 
export const App: React.FC = () => {
    const [data, setData] = useState<string>('');

    useEffect(() => {
        fetch('http://localhost:3001')
        .then((response) => response.text())
        .then((responseData) => setData(responseData))
        .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="App">
            <h1>Hello frm React!</h1>
            <p>Server Response: {data} </p>
            <Form />
        </div>
    );
};