import React, { useState } from 'react'
import axios from 'axios'
import style from './RegisterForm.module.scss'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function RegisterForm() {
    const { label, section, input, button } = style
    const [value, setValue] = useState()

    async function register(email, password) {
        try {
            const response = await axios.post(
                'https://reqres.in/api/register',
                {
                    email: email,
                    password: password,
                }
            )
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    function handleRegisterSubmit(event) {
        event.preventDefault()
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        register(email, password)
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handleRegisterSubmit}>
                <div className={section}>
                    <label className={label} htmlFor="">
                        Ім'я
                    </label>
                    <input type="name" className={input} required />
                </div>
                <div className={section}>
                    <label className={label} htmlFor="">
                        Прізвище
                    </label>
                    <input type="surname" className={input} required />
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
                    <label className={label} htmlFor="">
                        Email
                    </label>
                    <input
                        type="email"
                        className={input}
                        required
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    />{' '}
                </div>
                <div className={section}>
                    {' '}
                    <label className={label} htmlFor="">
                        Пароль
                    </label>
                    <input
                        type="password"
                        className={input}
                        pattern="/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
                        "
                        required
                    />
                </div>
                <div className={section}>
                    {' '}
                    <label className={label} htmlFor="">
                        Повторіть пароль
                    </label>
                    <input
                        type="password"
                        className={input}
                        pattern="/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
                        "
                        required
                    />
                </div>
                <button className={button}>Зареєструватися</button>
            </form>
        </div>
    )
}
