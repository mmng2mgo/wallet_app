import { useForm, SubmitHandler } from 'react-hook-form';

//return register,handleSubmit, addData
export function usePostDbData<T,>(url: string){
   const { register, handleSubmit } = useForm<T>();

    const addData: SubmitHandler<T> = async (data) => {
        try{
            const response = await fetch(url, {
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

    return {
        register,
        handleSubmit,
        addData
    };
};