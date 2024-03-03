import React, { useState } from 'react'
import style from './ClothesCards.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../../store/slices/binSlice'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

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
    } = style

    const dispatch = useDispatch()

    const addToCard = () => {
        dispatch(addItem(item))
        toast('товар доданий до корзини')
    }
    

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
                <button onClick={addToCard} className={btnBuyItem}>
                    Придбати
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}
