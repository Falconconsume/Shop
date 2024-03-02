import React from 'react'
import { NavLink } from 'react-bootstrap'
import style from './Filter.module.scss'
import FiltersRoll from './FilterSection/FiltersRoll'

export default function Filter() {
    const { navClothes, navBarClothes, container } = style

    return (
        <div className={container}>
            <div>
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
                <FiltersRoll />
            </div>
        </div>
    )
}
