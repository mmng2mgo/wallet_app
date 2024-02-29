import { useEffect } from 'react';

interface Props<T>{
    url: string;
    datas: T[];
    setDatas: React.Dispatch<React.SetStateAction<T[]>>;
}
//汎用性を持たせるためにジェネリクスインターフェースを引数にした
export const useGetDbData = <T,>({ url, datas, setDatas }: Props<T>) => {
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data: T[]) => {
            setDatas(data);
        })
        .catch((error) => console.error('Error:', error));
    }, [datas]);
    return [datas];
}