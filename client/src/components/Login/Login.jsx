import React from 'react'
import styles from './login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase'

function Login() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmission = () => {
        if ( !values.email || !values.pass) {
            setErrorMsg('Fill all fields');
            return;
        }
        setErrorMsg('');

        signInWithEmailAndPassword(auth, values.email, values.pass).then(
            async (res) => {
                navigate("/");
            }

        ).catch((err) => {
            setErrorMsg(err.message);
        })

    }

    return (
        <div className={styles.container} >
            <div className={styles.innerBox}>
                <h1 className={styles.heading} >Login</h1>
                <InputControl
                    label="Email"
                    placeholder="Enter email address"
                    onChange={(evant) => {
                        setValues((prev) => ({ ...prev, email: evant.target.value }))
                    }} />
                <InputControl
                    label="Password"
                    placeholder="Enter Password"
                    onChange={(evant) => {
                        setValues((prev) => ({ ...prev, pass: evant.target.value }))
                    }} />
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button
                        onClick={handleSubmission}>Login</button>
                    <p>Please sign up?
                        <span>
                            <Link to='../signup'>signup</Link>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Login;