import React, { useState } from 'react'
import HeaderMainSection from '../../../Shop/MainPart/components/Header/HeaderMainSection'
import { ways } from '../../../../data/data'
import style from './ClothesCards.module.scss'
import '@fontsource/roboto'

export default function ClothesCards({ item, category }) {
    const {
        color,
        sizes,
        itemSize,
        buttonColor,
        headerMainSection,
        img,
        title,
        description,
        price,
        listOfUnderClothes,
        colorSquareBlack,
        blockColor,
        listOfItem,
        descriptionItem,
        hoverItem,
        btnBuyItem,
        lineThrough,
    } = style

    const [ShowDetailsAboutItem, setShowDetailsAboutItem] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const handleEnteringOnItem = (e) => {
        setShowDetailsAboutItem(true)
        setSelectedItem(e)
    }
    return (
        <div>
            <HeaderMainSection className={headerMainSection} titleSite={item} />
            <ul className={listOfUnderClothes}>
                {ways
                    .filter(
                        (e) => e.categories && e.categories.includes(category)
                    )
                    .map((e) => {
                        return (
                            <li
                                onMouseEnter={() => handleEnteringOnItem(e.id)}
                                onMouseLeave={() =>
                                    setShowDetailsAboutItem(false)
                                }
                                className={listOfItem}
                                key={e.id}
                            >
                                <div className={hoverItem}>
                                    <img
                                        className={img}
                                        src={e.image}
                                        alt="Here must be an img"
                                    />
                                    <h2 className={title}>{e.title}</h2>
                                    <h3 className={description}>
                                        {e.description}
                                    </h3>
                                    <h3
                                        className={`${e.sales} ? ${price} : ${e.price} ${e.discount}`}
                                    >
                                        {e.discount}
                                    </h3>
                                    <span className={lineThrough}>
                                        {e.price}
                                    </span>
                                    {ShowDetailsAboutItem &&
                                        selectedItem === e.id &&
                                        !e.disabled && (
                                            <div className={descriptionItem}>
                                                <div className={color}>
                                                    <button
                                                        className={`${buttonColor} ${colorSquareBlack}`}
                                                    >
                                                        <div
                                                            className={
                                                                blockColor
                                                            }
                                                        ></div>
                                                    </button>
                                                    <button
                                                        className={buttonColor}
                                                    ></button>
                                                </div>
                                                <div className={sizes}>
                                                    <button
                                                        className={itemSize}
                                                    >
                                                        XS
                                                    </button>
                                                    <button
                                                        className={itemSize}
                                                    >
                                                        S
                                                    </button>
                                                    <button
                                                        className={itemSize}
                                                    >
                                                        M
                                                    </button>
                                                    <button
                                                        className={itemSize}
                                                    >
                                                        L
                                                    </button>
                                                    <button
                                                        className={itemSize}
                                                    >
                                                        XL
                                                    </button>
                                                </div>
                                                <button className={btnBuyItem}>
                                                    Придбати
                                                </button>
                                            </div>
                                        )}
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
