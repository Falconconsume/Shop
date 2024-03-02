import React, { useState } from 'react'
import style from './ClothesCards.module.scss'
export default function Details() {
    const {
        color,
        sizes,
        itemSize,
        buttonColor,
        colorSquareBlack,
        blockColor,
        btnBuyItem,
        descriptionItem,
    } = style

    const [isSelectedColor, setIsSelectedColor] = useState(false)
    return (
        <div>
            <div className={descriptionItem}>
                <div className={color}>
                    <button
                        onClick={() => setIsSelectedColor(true)}
                        className={`${buttonColor} ${colorSquareBlack}`}
                    >
                        <div className={blockColor}></div>
                    </button>
                    <button className={buttonColor}></button>
                </div>
                <div className={sizes}>
                    <button className={itemSize}>XS</button>
                    <button className={itemSize}>S</button>
                    <button className={itemSize}>M</button>
                    <button className={itemSize}>L</button>
                    <button className={itemSize}>XL</button>
                </div>
                <button className={btnBuyItem}>Придбати</button>
            </div>
        </div>
    )
}
