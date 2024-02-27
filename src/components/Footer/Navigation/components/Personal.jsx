import { Link } from 'react-router-dom'
import style from './Footer.module.scss'

export default function Personal() {
    const {footerContacts} = style;
    return (
        <div className={footerContacts}>
            <div className={style.border}>
                <ul className={style.flexFooter}>
                    <h1 className={style.title}>Особисте</h1>
                    <Link to="/desired" className={style.list}>
                        Обране
                    </Link>
                    <Link to="/orders" className={style.list}>
                        Мої замовлення
                    </Link>
                </ul>
            </div>
        </div>
    )
}
