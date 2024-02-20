import React from 'react'
import style from '../Login.module.scss'
import axios from 'axios'
import { useLocalStorage } from '../../../../../../hooks/useLocalStorage'

export default function FormLogin() {
    const { label, input, autorisation, labelCheck, formRemmember, button } =
        style

    const [email, setEmail] = useLocalStorage('email', '')
    const [password, setPassword] = useLocalStorage('password', '')
    // Функція для авторизації
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

    function handleLoginSubmit(event) {
        event.preventDefault()
        setEmail(event.target.elements.email.value)
        setPassword(event.target.elements.password.value)
        login(email, password)
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div className={autorisation}>
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
                <div className={autorisation}>
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
                <div className={formRemmember}>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label class={labelCheck} for="">
                            {' '}
                            Запам'ятати вас{' '}
                        </label>
                    </div>
                </div>
                <button className={button}>Увійти</button>
            </form>
        </div>
    )
}
