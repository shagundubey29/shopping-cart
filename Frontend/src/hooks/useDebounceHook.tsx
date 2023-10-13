import { useEffect, useState } from "react"

export const useDebounceHook = <T,>(value: T, delay = 500) : T => {
    const [debounceValue, setDebounceValue]  = useState<T>(value);

    useEffect(() => {
        const timeout = setInterval(()=>{
            setDebounceValue(value);
        }, delay);
        return () =>  clearInterval(timeout);
    }, [value, delay]);

    return debounceValue;
}
