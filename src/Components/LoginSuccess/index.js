import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginSuccess = (props) => {

    const navigate = useNavigate();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjZhY2QxMzAyOGRlMDBiNDExYTI0NyIsImlhdCI6MTY4OTc5MTM5MCwiZXhwIjoxNjkyMzgzMzkwfQ.PrvLLBalSKoDIKQRJTr94HSXS0gMCQ2jiX6k6t29-iA"

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZkNTkwMmNkNDkyNGExZTkzYWRjOSIsImlhdCI6MTY4OTI0NTEwNywiZXhwIjoxNjkxODM3MTA3fQ.y516XKFytFJP1AWWah4bfjn_aQ50EPN5Dqho9TJQ97w"

    const config = {
        headers: { 'x-auth-token': token }
    };

    // const headers = {
    //     "Content-Type": "text/json"
    // }

    const data = { check: 'ok' }

    // const [token] = useState(props.token);

    const authCheck = async (config) => {
        try {
            console.log("data", config);
            const response = await axios.post('https://password-reset-vbrg.onrender.com/home', data, config)
            // response.data.headers['Content-Type'];

            console.log(response);
            if (response.status = 200) {
                console.log('Authorized user');
                return
            }
        }
        catch (err) {
            console.log(err);
            navigate("/");
        }
    }

    useEffect(() => {
        authCheck(config);
    }, [])


    return (
        <div className="text" >
            <h1>Welcome to our APP</h1>
            <alert>Your Successfully logged in</alert>
        </div>
    )
}

export default LoginSuccess;