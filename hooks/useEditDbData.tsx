import { useForm, SubmitHandler } from 'react-hook-form';
//return register, handleSubmit, updateData arg url string
export function useEditDbData<T,>(url: string){
    const { register, handleSubmit } = useForm<T>();

    const updateData: SubmitHandler<T> = async (data) => {
        try{
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch(error) {
            console.log(error);
        }
    };
    return { register, handleSubmit, updateData }
}