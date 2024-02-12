import { useState } from 'react'
import React from 'react'
import 'react-bootstrap'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { GrUserManager } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa'
import { IoBag } from 'react-icons/io5'

import HamburgerWindow from './ButtonGroup/HamburgerWindow'

export default function Header() {
    const {
        flex,
        anchor,
        container,
        img,
        nav,
        icons,
        navFlex,
        navClothes,
        navCenter,
        navBarClothes,
        line,
        flexWindow,
        anchorWindow,
        screenMopile,
    } = style

    return (
        <>
            <div className={container}>
                <div className={navFlex}>
                    <nav className={nav}>
                        <HamburgerWindow />
                        <ul className={flex}>
                            <div className={screenMopile}>
                                <NavLink className={anchor} to={'/'}>
                                    Головна
                                </NavLink>
                                <NavLink className={anchor} to={'/shop'}>
                                    <li>Магазин</li>
                                </NavLink>
                                <Popup
                                    trigger={
                                        <li className={anchor}>Покупцям</li>
                                    }
                                    position="bottom center"
                                >
                                    <div className={flexWindow}>
                                        <NavLink
                                            className={anchorWindow}
                                            to="/about"
                                        >
                                            Про Нас
                                        </NavLink>
                                        <br />
                                        <NavLink
                                            className={anchorWindow}
                                            to="/delivery"
                                        >
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
                            </div>
                        </ul>
                        <img
                            className={img}
                            src="https://demox-000-18.site-x.pro/Media/demox-000-18/icons/logo/demox_18_logo.svg"
                            alt="Here must be a photo!"
                        />
                        <ul className={flex}>
                                <GrUserManager className={icons} />
                                <NavLink to={'/desired'}>
                                    <FaRegHeart className={icons} />
                                </NavLink>
                                <IoBag className={icons} />
                        </ul>
                    </nav>
                </div>
            </div>
            <nav className={navCenter}>
                <div className={line}></div>
                <div className={screenMopile}>
                <ul className={navClothes}>
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
                <div className={line}></div>
            </nav>
        </>
    )
}
