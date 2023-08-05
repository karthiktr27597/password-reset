import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUpData = {
        name,
        email,
        password
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('singupdata', signUpData);

        if (name !== "" && email !== "") {
            await axios
                .post("https://password-reset-vbrg.onrender.com/user/signup", signUpData)
                .then(response => {
                    console.log(response.data)
                    console.log('sign up successfully done')
                })
                .catch((err) => console.log(err.message));

            alert("Sing Up done successfully")
            navigate("/login");
        } else {
            alert("Error in Input");
        }
    }


    return (

        <div className="formpage">

            <Form onSubmit={(e) => handleSignup(e)} className="form">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sing up
                </Button>
                <div className="login">
                    <div onClick={() => navigate("/login")}>Go to Login page?</div>
                </div>
            </Form>
        </div>

    )
}

export default SignUp;