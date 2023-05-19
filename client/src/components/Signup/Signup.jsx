import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import InputControl from '../InputControl/InputControl'
import styles from './signup.module.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'



export default function Signup() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg('Fill all fields');
            return;
        }
        setErrorMsg('');

        createUserWithEmailAndPassword(auth, values.email, values.pass).then(
            async (res) => {


                const user = res.user;
                await updateProfile(user,
                    {
                        displayName: values.name,
                    });
                navigate("/");
            }

        ).catch((err) => {
            setErrorMsg(err.message);
        })

    }



    return (
        <div className={styles.container} >
            <div className={styles.innerBox}>
                <h1 className={styles.heading} >Sign up</h1>
                <InputControl
                    label="Name"
                    placeholder="Enter full Name"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value }))

                    }

                />
                <InputControl
                    label="Email"
                    placeholder="Enter email address"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))

                    } />
                <InputControl
                    label="Password"
                    placeholder="Enter Password"
                    onChange={(e) =>
                        setValues((prev) => ({ ...prev, pass: e.target.value }))

                    } />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={handleSubmission}>Sign Up</button>
                    <p>Alrady have an account?
                    <span>
                            <Link to='../login'>login</Link>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}