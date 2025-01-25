import { useEffect, useState } from "react";

function useFetch (url: string) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => { 
        const fetchData = async() => { 
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError('Error while fetching data');
                setLoading(false);
            }
        }
        fetchData();
    },[url])
return {loading, data, error};
}
export default useFetch;