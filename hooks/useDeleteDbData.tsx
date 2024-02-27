
export function useDeleteDbData(url: string){
    const deleteData = 
    async (id: string) => {
        try{
            console.log(id);
            const response = await fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(!response.ok){
                throw new Error("Failed to delete data");
            }

        } catch(error) {
            console.log(error);
        }
    };
    return deleteData;
};

