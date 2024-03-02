import React, { useState } from 'react'
import style from './Login.module.scss'
import { IoClose } from 'react-icons/io5'
import FormLogin from './ButtonGroup/FormLogin'
import Registration from './ButtonGroup/Registration/Registration'

export default function Login({ active, setActive }) {
    const {
        modal,
        modalContent,
        activeWindow,
        title,
        txt,
        cross,
        main,
        registration,
        registr,
        registrTxt,
    } = style

    const [modalRegister, setModalRegister] = useState(false)
    return (
        <div>
            <div className={`${modal} ${active ? activeWindow : ''}`}>
                <div
                    className={modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={title}>
                        <h1 className={txt}>Увійти</h1>
                        <IoClose
                            className={cross}
                            onClick={() => setActive(false)}
                        />
                    </div>
                    <hr />
                    <div className={main}>
                        <FormLogin setActive={setActive} />
                    </div>
                    {active && (
                        <div className={registration}>
                            <p className={registrTxt}>
                                Немає облікового запису?{' '}
                                <span
                                    onClick={() => setModalRegister(true)}
                                    className={registr}
                                >
                                    Зареєструватися
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Registration active={modalRegister} setActive={setModalRegister} />
        </div>
    )
}
