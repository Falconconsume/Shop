import React from 'react'
import App from './App'
import style from './index.module.scss'

export default function AppWraper() {
    return (
        <div className={style.layoutBody}>
            <div className={style.reset}>
                <App />
            </div>
        </div>
    )
}
