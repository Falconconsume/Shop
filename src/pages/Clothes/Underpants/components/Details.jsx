import React, { useState } from 'react'
import style from './ClothesCards.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'

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
                    <div>
                        <button
                            onClick={() => setIsSelectedColor(true)}
                            className={`${buttonColor} ${colorSquareBlack}`}
                        >
                            <div className={blockColor}></div>
                        </button>
                        <button className={buttonColor}></button>
                    </div>

                    <div>
                        <FavoriteIcon />
                    </div>
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
