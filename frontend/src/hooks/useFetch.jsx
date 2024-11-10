import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw Error('could not fetch characters');
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                console.log(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;