import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useSearchParams } from "react-router-dom";

function PasswordReset() {

    const [searchParams] = useSearchParams();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [Id, setId] = useState("");
    const [form, setForm] = useState(false);
    const navigate = useNavigate();


    async function verifyUser(id, randomstring) {
        try {
            const response = await axios.post(`https://password-reset-vbrg.onrender.com/user/password-reset?id=${id}&randomstring=${randomstring}`)
            // console.log(response);
            if (response.statusText === "OK") {
                setId(id);
                setForm(true);
            }
            else {
                console.log("Invalid link or Authorization");
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const id = searchParams.get("id")
        const randomstring = searchParams.get("randomstring")
        if (id && randomstring) {
            verifyUser(id, randomstring);
        }
    }, [searchParams])



    const handlePwdReset = async (e) => {
        e.preventDefault();
        //  console.log(Id, newPassword);
        if (newPassword === confirmPassword) {
            const response = await axios.post(`https://password-reset-vbrg.onrender.com/user/password-reset/update?id=${Id}&newpassword=${newPassword}`)
            if (response.statusText === "OK") {
                alert("password reseted successfully")
                navigate("/login/success")
            }
        }
    }



    return (
        <div className="formpage">
            {
                form ?
                    <Form onSubmit={(e) => handlePwdReset(e)} className="form">

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter New Password</Form.Label>
                            <Form.Control type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update and Login
                        </Button>
                    </Form> : ""
            }
        </div>
    )

}

export default PasswordReset;