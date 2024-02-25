import React from 'react'
import style from './ModalWindow.module.scss'
import img from '../../../../../assets/nav/bin.jpeg'
import { IoClose } from 'react-icons/io5'

export default function ModalWindow({ active, setActive }) {
    const {
        txt,
        main,
        title,
        modal,
        modalContent,
        activeWindow,
        cross,
        button,
        footerBin,
    } = style

    return (
        <div
            className={`${modal} ${active ? activeWindow : ''}`}
            onClick={() => setActive(false)}
        >
            <div className={modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={title}>
                    <h1 className={txt}>Кошик</h1>
                    <IoClose
                        className={cross}
                        onClick={() => setActive(false)}
                    />
                </div>
                <hr />
                <div className={main}>
                    <div>
                        <img src={img} alt="" />
                        <p>У вашому кошику немає товарів.</p>
                    </div>
                </div>
                <div className={footerBin}>
                    <button className={button} onClick={() => setActive(false)}>
                        Продовжити покупки
                    </button>
                </div>
            </div>
        </div>
    )
}
