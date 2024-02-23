import React, { useEffect, useState } from "react";
import { Form } from './Form';
import { IncomesCategory } from './IncomesCategory';

export const App  = () => {
    return (
        <div className="App">
            <IncomesCategory />            
            <Form />
        </div>
    );
};