import { useState, useEffect } from "react";
// Custom hooks have to start with use.

// MY FIRST CUSTOM HOOK :DDD
const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    
    useEffect(() => {
        const abortController = new AbortController();

        // This returns a promise
        setTimeout(() =>
            fetch(url, {signal: abortController.signal })
                .then(res => {
                    if(!res.ok) {
                        // throws an error that .catch catches and sets is as a state.
                        throw Error('could not fetch the data for that resource.');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log(err.message);
                    } else {
                        console.log(err.message);
                        setError(err.message);
                        setIsLoading(false);
                    }
                })
            ,300);

      return () => abortController.abort();
    }, [url]);

    // return hooks values
    return { data, isLoading, error }
}

export default useFetch;
