import axios from "axios";
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import LoginSuccess from "../LoginSuccess";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(false);
    const [error, setError] = useState(false);
    const [mailSucces, setMailSucces] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [token, setToken] = useState("empty")
    const navigate = useNavigate();

    async function handleEmail(e) {
        setEmail(e.target.value);
        setState(true);
        setMailSucces(false);
        setError(false);
        setLoginError(false);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        setLoginError(false);
    }

    const loginData = {
        email,
        password
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        if (!loginError && !mailSucces & !error) {
            await axios.post('https://password-reset-vbrg.onrender.com/user/login', loginData)
                .then(res => {
                    console.log(res.data.data)
                    setToken(res.data.token)
                    return navigate("/login/success")
                })
                .catch((err) => {
                    console.log(err.message);
                    setLoginError(!loginError);
                })
        }
    }

    const emailData = {
        email
    }

    const handleForgetPassword = async () => {

        if (!mailSucces && !error) {
            await axios.post("https://password-reset-vbrg.onrender.com/user/forgotpassword", emailData)
                .then((res) => {
                    console.log(res.data.data);
                    setMailSucces(!mailSucces);
                })
                .catch((err) => {
                    console.log(err.message)
                    setError(!error);
                })
        }
    }

    return (
        <>
            <div className="text">
                {
                    error ? <h2 style={{ color: "#fb544f" }}>Invalid Email</h2> : ""
                }
                {
                    mailSucces ? <h4 style={{ color: "#515151" }}>Mail sent: Please check your mail and click link for reset password</h4> : ""
                }
                {
                    loginError ? <h2 style={{ color: "#fb544f" }}>Invalid Email or Password</h2> : ""
                }
            </div>
            <div className="formpage" >
                <Form onSubmit={(e) => handleLogin(e)} className="form">

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => handleEmail(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => handlePassword(e)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    {
                        state ? <div className="forgetPassword">
                            <p onClick={handleForgetPassword}>Forget Password?</p>
                        </div> : ""
                    }
                </Form>
            </div>
            {
                token !== "empty" ? <LoginSuccess token={token} /> : ""
            }

        </>
    )
}

export default Login