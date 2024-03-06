import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ways } from '../../../../data/data'
import style from './ClothesCards.module.scss'
import '@fontsource/roboto'
import Details from './Details'
import HeaderMainSection from '../../../Shop/MainPart/components/Header/HeaderMainSection'
import AdditionalInfoItem from '../../../AdditionalInfoAboutItem/AdditionalInfoItem'

export default function ClothesCards({ item, category }) {
    const {
        headerMainSection,
        img,
        title,
        description,
        price,
        listOfUnderClothes,
        listOfItem,
        hoverItem,
        lineThrough,
    } = style

    const [showDetailsAboutItem, setShowDetailsAboutItem] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedInfoItem, setSelectedInfoItem] = useState(false)
    const navigate = useNavigate()

    const handleEnteringOnItem = (e) => {
        setShowDetailsAboutItem(true)
        setSelectedItem(e)
    }

    const handleItemClick = () => {
        setSelectedInfoItem(true)
    }

    return (
        <div>
            <HeaderMainSection className={headerMainSection} titleSite={item} />
            <ul className={listOfUnderClothes}>
                {ways
                    .filter(
                        (e) => e.categories && e.categories.includes(category)
                    )
                    .map((e) => (
                        <li
                            onMouseEnter={() => handleEnteringOnItem(e)}
                            onMouseLeave={() => setShowDetailsAboutItem(false)}
                            className={listOfItem}
                            key={e.id}
                            onClick={() => handleItemClick(e)}
                        >
                            <div className={hoverItem}>
                                <img
                                    className={img}
                                    src={e.image}
                                    alt="Here must be an img"
                                />
                                <h2 className={title}>{e.title}</h2>
                                <h3 className={description}>{e.description}</h3>
                                {e.sales ? (
                                    <div>
                                        <h3 className={e.sales ? price : null}>
                                            {e.discount}
                                        </h3>
                                        <span className={lineThrough}>
                                            {e.price}
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <h3 className={price}>{e.price}</h3>
                                    </div>
                                )}

                                {showDetailsAboutItem &&
                                    selectedItem === e.id &&
                                    !e.disabled && <Details item={e} />}
                            </div>
                        </li>
                    ))}
            </ul>

        </div>
    )
}
