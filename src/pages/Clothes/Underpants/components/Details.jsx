import React, { useState } from 'react'
import style from './ClothesCards.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../../store/slices/binSlice'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { addDisiredItem } from '../../../../store/slices/desiredSlice'
import { useLocalStorage } from '../../../../hooks/useLocalStorage'
import Color from '../../../components/Colors/ColorsSquare'

export default function Details({ item }) {
    const {
        color,
        sizes,
        itemSize,
        btnBuyItem,
        descriptionItem,
        favoriteColorClick,
    } = style

    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.cart)
    const desiredItems = useSelector((state) => state.desired)
    const [localSaveDesiredItems] = useLocalStorage('desiredItems')
    const [cardSaving] = useLocalStorage('cards')
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

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
                    <Color />
                    <div>
                        <FavoriteIcon
                            sx={{ color: 'red', fontSize: '25px' }}
                            onClick={desiredProductLove}
                            className={colorForIcon && favoriteColorClick}
                        />
                    </div>
                </div>

                <div className={sizes}>
                    {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSize(size)}
                            className={`${itemSize} ${selectedSize === size ? 'selected-size-class' : ''}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                <button onClick={addToCard} className={btnBuyItem}>
                    Придбати
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}
