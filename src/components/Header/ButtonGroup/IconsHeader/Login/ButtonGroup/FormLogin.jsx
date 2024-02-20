import React, { useRef, useState, useEffect } from 'react'
import style from '../Login.module.scss'
import axios from 'axios'
import { useLocalStorage } from '../../../../../../hooks/useLocalStorage'
import { Link } from 'react-router-dom'

export default function FormLogin({ setActive }) {
    const {
        label,
        input,
        autorisation,
        labelCheck,
        formRemmember,
        button,
        errmsg,
        offscreen,
    } = style

    const [email, setEmail] = useLocalStorage('email', '')
    const [password, setPassword] = useLocalStorage('password', '')
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    async function login(email, password) {
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email: email,
                password: password,
            })
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async function handleLoginSubmit(event) {
        event.preventDefault()
        console.log(user, pwd)
        setUser('')
        setPwd('')
        setSuccess(true)
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <span onClick={() => setActive(false)}>
                            Go to main Page
                        </span>
                    </p>
                </section>
            ) : (
                <section>
                    <p
                        ref={errRef}
                        className={errMsg ? errmsg : offscreen}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <form onSubmit={handleLoginSubmit}>
                        <div className={autorisation}>
                            <label className={label} htmlFor="username">
                                Логін
                            </label>
                            <input
                                type="text"
                                className={input}
                                ref={userRef}
                                id="username"
                                required
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                            />{' '}
                        </div>
                        <div className={autorisation}>
                            <label className={label} htmlFor="password">
                                Пароль
                            </label>
                            <input
                                type="password"
                                id="required"
                                className={input}
                                required
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                            />
                        </div>
                        <div className={formRemmember}>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                />
                                <label class={labelCheck} for="">
                                    {' '}
                                    Запам'ятати вас{' '}
                                </label>
                            </div>
                        </div>
                        <button className={button}>Увійти</button>
                    </form>
                </section>
            )}
        </>
    )
}
