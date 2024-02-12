import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ButtonGroup.module.scss'
import Popup from 'reactjs-popup'

export default function PopUpModalWindow() {
    const {
        flexWindow,
        anchorWindow,
        anchor,
        windowPopUp,
        navBarClothes,
        navClothes,
        title,
        windowFlex
    } = style
    return (
        <div className={windowPopUp}>
            <ul>
                <h2 className={title}>Меню</h2>
                <NavLink className={anchor} to={'/'}>
                    <li>Головна</li>
                </NavLink>
                <NavLink className={anchor} to={'/shop'}>
                    <li>Магазин</li>
                </NavLink>
                <Popup
                    trigger={<li className={anchor}>Покупцям</li>}
                    position="right center"
                >
                    <div className={flexWindow}>
                        <NavLink className={anchorWindow} to="/about">
                            Про Нас
                        </NavLink>
                        <br />
                        <NavLink className={anchorWindow} to="/delivery">
                            Доставка та оплата
                        </NavLink>
                    </div>
                </Popup>

                <NavLink className={anchor} to={'/blogs'}>
                    <li>Блог</li>
                </NavLink>
                <NavLink className={anchor} to={'/contacts'}>
                    <li>Контакти</li>
                </NavLink>
            </ul>
            <ul className={navClothes}>
                <h2 className={title}>Каталог</h2>
                <NavLink className={navBarClothes} to="/underpants">
                    Трусики
                </NavLink>
                <NavLink className={navBarClothes} to="/bicini">
                    Бюстгалтери
                </NavLink>
                <NavLink className={navBarClothes} to="/news">
                    Новинки
                </NavLink>
                <NavLink className={navBarClothes} to="/pyjamas">
                    Боді
                </NavLink>
                <NavLink className={navBarClothes} to="/sales">
                    Піжами
                </NavLink>
                <NavLink className={navBarClothes} to="/underpants">
                    Знижки
                </NavLink>
            </ul>
        </div>
    )
}
