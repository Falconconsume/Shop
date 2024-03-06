import React, { useState } from 'react'
import style from './ClothesCards.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../../store/slices/binSlice'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { addDisiredItem } from '../../../../store/slices/desiredSlice'
import { useLocalStorage } from '../../../../hooks/useLocalStorage'

export default function Details({ item }) {
    const {
        color,
        sizes,
        itemSize,
        buttonColor,
        colorSquareBlack,
        blockColor,
        btnBuyItem,
        descriptionItem,
        flexCenterColor,
        favoriteColorClick,
    } = style

    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.cart)
    const desiredItems = useSelector((state) => state.desired)
    const [localSaveDesiredItems] = useLocalStorage('desiredItems')
    const [cardSaving] = useLocalStorage('cards')

    const addToCard = () => {
        const existingItem = cardItems.find(
            (cartItem) => cartItem.id === item.id
        )

        if (existingItem) {
            toast.success('Цей товар вже у вашому кошику')
        } else {
            const updatedCardItems = [...cardItems, item]
            cardSaving(updatedCardItems)
            dispatch(addItem(item))
            toast.success('Товар доданий до кошика')
        }
    }

    const [isSelectedColor, setIsSelectedColor] = useState(false)
    const [colorForIcon, setColorForIcon] = useState(false)

    const desiredProductLove = () => {
        const existingItem = desiredItems.find(
            (cartItem) => cartItem.id === item.id
        )

        if (existingItem) {
            toast.warning('Цей товар вже у вашому кошику')
        } else {
            localSaveDesiredItems([...desiredItems, item])
            dispatch(addDisiredItem(item))
            toast.success('Товар доданий до Уподобань')
        }
        setColorForIcon(true)
    }
    return (
        <div>
            <div className={descriptionItem}>
                <div className={color}>
                    <div className={flexCenterColor}>
                        <button
                            onClick={() => setIsSelectedColor(true)}
                            className={`${buttonColor} ${colorSquareBlack}`}
                        >
                            <div className={blockColor}></div>
                        </button>
                        <button className={buttonColor}></button>
                    </div>
                    <div>
                        <FavoriteIcon
                            sx={{ color: 'red', fontSize: '25px' }}
                            onClick={desiredProductLove}
                            className={colorForIcon && favoriteColorClick}
                        />
                    </div>
                </div>

                <div className={sizes}>
                    {['XS', 'S', 'M', 'L', 'XL'].map((e = [], index) => {
                        return (
                            <button key={index} className={itemSize}>
                                {e}
                            </button>
                        )
                    })}
                </div>
                <button onClick={addToCard} className={btnBuyItem}>
                    Придбати
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}
