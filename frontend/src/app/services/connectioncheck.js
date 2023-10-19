import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/connectionContext/apiContext';

function ConnectionTestService() {
    const api = useContext(ApiContext);
    const [result, setResult] = useState("");

    useEffect(() => {
        api.get("/")
            .then(res => {
                setResult(`Test connection successful: ${res.data}`);
            })
            .catch(err => console.log(err));
    }, [api]);

    return result;
}

export default ConnectionTestService;
