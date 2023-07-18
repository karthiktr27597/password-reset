// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const LoginSuccess = (props) => {

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZkNTkwMmNkNDkyNGExZTkzYWRjOSIsImlhdCI6MTY4OTI0NTEwNywiZXhwIjoxNjkxODM3MTA3fQ.y516XKFytFJP1AWWah4bfjn_aQ50EPN5Dqho9TJQ97w"

    // const config = {
    //     headers: { 'x-auth-token': `Bearer ${token}` }
    // };

    // const headers = {
    //     "Content-Type": "text/json"
    // }

    // const data = { 'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZkNTkwMmNkNDkyNGExZTkzYWRjOSIsImlhdCI6MTY4OTI0NTEwNywiZXhwIjoxNjkxODM3MTA3fQ.y516XKFytFJP1AWWah4bfjn_aQ50EPN5Dqho9TJQ97w" }

    // const [token] = useState(props.token);

    // const navigate = useNavigate();

    // const authCheck = async (data, headers) => {
    //     try {
    //         console.log("data", data, "header", headers);
    //         const response = await axios.post('http://localhost:9000/home', data, headers)
    //         // response.data.headers['Content-Type'];

    //         console.log(response);
    //         if (response.status = 200) {
    //             console.log('Authorized user');
    //             return
    //         }
    //     }
    //     catch (err) {
    //         console.log(err);
    //         navigate("/");
    //     }
    // }

    // useEffect(() => {
    //     authCheck(data, headers);
    // }, [])


    return (
        <div className="text" >
            <h1>Welcome to our APP</h1>
            <alert>Your Successfully logged in</alert>
        </div>
    )
}

export default LoginSuccess;