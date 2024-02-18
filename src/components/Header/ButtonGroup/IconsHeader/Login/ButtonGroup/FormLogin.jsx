import React from 'react'
import style from '../Login.module.scss'

export default function FormLogin() {
    const { label, input, autorisation, labelCheck, formRemmember, button } =
        style

    return (
        <div>
            <form action="submit">
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
