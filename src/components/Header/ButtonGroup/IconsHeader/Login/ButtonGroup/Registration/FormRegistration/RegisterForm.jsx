import React, { useState, useRef, useEffect } from 'react'
import style from './RegisterForm.module.scss'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useLocalStorage } from '../../../../../../../../hooks/useLocalStorage'
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../../../../../../../../api/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const REGISTER_URL = '/api/register'

export default function RegisterForm() {
    const {
        label,
        section,
        input,
        button,
        errmsg,
        offscreen,
        instructions,
        valid,
        hide,
        invalid,
    } = style
    const [value, setValue] = useState()
    const [password, setPassword] = useLocalStorage('')
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [validEmail, setValidEmail] = useState(false)
    const [email, setEmail] = useState('')
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])
    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        const v3 = EMAIL_REGEX.test(email)
        if (!v1 || !v2 || !v3) {
            setErrMsg('Неправильний запис')
            return
        }
        try {
            const res = await axios.post(
                REGISTER_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )
            console.log(res.data)
            setSuccess(true)
        } catch (err) {
            if (!err?.res) {
                setErrMsg('No Server Response')
            } else if (err.res?.status === 409) {
                setErrMsg('Username Taken!')
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus()
        }
    }

    const notify = () => toast('Wow, you Registered!')

    return (
        <section>
            <p
                ref={errRef}
                className={errMsg ? errmsg : offscreen}
                aria-live="assertive"
            >
                {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
                <div className={section}>
                    <label className={label} htmlFor="username">
                        Ім'я:
                        <span className={validName ? valid : hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validName || !user ? hide : invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? 'false' : 'true'}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p
                        id="uidnote"
                        className={
                            userFocus && user && !validName
                                ? instructions
                                : offscreen
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 до 24 знаків. <br />
                        Повинно починатися з букви. <br />
                        Літери, цифри, нижні дефіси, апострофи доволенні! <br />
                        Повинна бути @ і крапка;
                    </p>
                </div>
                <div className={section}>
                    <label className={label} htmlFor="">
                        Телефон
                    </label>
                    <PhoneInput
                        className={input}
                        value={value}
                        onChange={setValue}
                    />{' '}
                </div>
                <div className={section}>
                    <label className={label} htmlFor="email">
                        Email:
                        <span className={validEmail ? valid : hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validEmail || !user ? hide : invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        className={input}
                        id="email"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? 'false' : 'true'}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p
                        id="emailnote"
                        className={
                            emailFocus && user && !validName
                                ? instructions
                                : offscreen
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 до 24 знаків. <br />
                        Повинно починатися з букви. <br />
                        Літери, цифри, нижні дефіси, дефіси!
                    </p>
                </div>
                <div className={section}>
                    {' '}
                    <label className={label} htmlFor="password">
                        Пароль:
                        <span className={validPwd ? valid : hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPwd || !pwd ? hide : invalid}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        className={input}
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? 'false' : 'true'}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p
                        id="pwdnote"
                        className={
                            pwdFocus && !validPwd ? instructions : offscreen
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 до 24 знаки. <br />
                        Великі літери і маленькі літери, цифри і спеціальні
                        символи <br />
                        Літери, цифри, нижні дефіси, апострофи дозволенні!{' '}
                        <br />
                        Дозволенні спеціальні символи:{' '}
                        <span aria-label="exclamation mark">!</span>
                        <span aria-label="at symbol">@</span>
                        <span aria-label="hashtag">#</span>
                        <span aria-label="percent">%</span>
                    </p>
                </div>
                <div className={section}>
                    {' '}
                    <label className={label} htmlFor="comfirm_pwd">
                        Повторіть пароль:
                        <span className={validMatch && matchPwd ? valid : hide}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span
                            className={validMatch || !matchPwd ? hide : invalid}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        className={input}
                        id="confirmPassword"
                        autoComplete="off"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? 'false' : 'true'}
                        aria-describedby="comfirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p
                        id="pwdnote"
                        className={
                            matchFocus && !validMatch ? instructions : offscreen
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Ваш пароль не співпадає з веденим паролем!
                    </p>
                </div>
                <button
                    className={button}
                    onClick={notify}
                    disabled={
                        !validName || !validPwd || !validMatch ? true : false
                    }
                >
                    Зареєструватися
                </button>
            </form>
        </section>
    )
}
